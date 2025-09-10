// prisma/seed.ts
import { PrismaClient, WorkType, EmploymentType } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  // Upsert companies
  const [Kenyans, Gates, Center] = await Promise.all([
    prisma.company.upsert({
      where: { name: 'Kenyans' },
      update: {},
      create: { name: 'Kenyans.co.ke'},
    }),
    prisma.company.upsert({
      where: { name: 'Gates' },
      update: {},
      create: { name: 'Gates Foundation' },
    }),
    prisma.company.upsert({
      where: { name: 'Center' },
      update: {},
      create: { name: 'Center for Domestic Training and Development' },
    }),
  ])

  // Upsert tags
  const tagSlugs = [
    ['react', 'React'],
    ['nextjs', 'Next.js'],
    ['figma', 'Figma'],
    ['design-systems', 'Design Systems'],
    ['sql', 'SQL'],
    ['python', 'Python'],
    ['nodejs', 'Node.js'],
    ['postgres', 'Postgres'],
  ] as const

  const tags = await Promise.all(
    tagSlugs.map(([slug, label]) =>
      prisma.tag.upsert({ where: { slug }, update: { label }, create: { slug, label } })
    )
  )

  const tagId = (slug: string) => tags.find(t => t.slug === slug)!.id

  // Create jobs
  const jobs = await prisma.job.createMany({
    data: [
      {
        id: 'aaaaaaa1-aaaa-aaaa-aaaa-aaaaaaaaaaa1',
        companyId: Kenyans.id,
        title: 'Frontend Developer',
        location: 'Nairobi',
        workType: WorkType.ONSITE,
        employmentType: EmploymentType.FULL_TIME,
        salaryMin: 7000000,
        salaryMax: 12000000,
        currency: 'KES',
        description: 'Send your CV and Portfolio to hr@kenyans.co.ke',
        responsibilities: 'Ship features with React/Next.js; collaborate with design; write tests.',
        qualifications: '2+ yrs with React; TS basics; eye for UX.',
        postedAt: new Date(),
        deadline: new Date(Date.now() + 9 * 86400000), // 9 days from now
      },
      {
        id: 'aaaaaaa2-aaaa-aaaa-aaaa-aaaaaaaaaaa2',
        companyId: Gates.id,
        title: 'Product Designer',
        location: 'Addis Ababa, Ethiopia',
        workType: WorkType.ONSITE,
        employmentType: EmploymentType.FULL_TIME,
        currency: 'KES',
        description: 'Own end-to-end product design at Lumina.',
        responsibilities: 'Work with PM/Eng; design systems; user research.',
        qualifications: '3+ yrs product design; Figma; portfolio.',
        postedAt: new Date(Date.now() - 2 * 86400000),
        deadline: new Date(Date.now() + 3 * 86400000), // 3 days from now
      },
      {
        id: 'aaaaaaa3-aaaa-aaaa-aaaa-aaaaaaaaaaa3',
        companyId: Center.id,
        title: 'Data Analyst',
        location: 'Lagos, NG',
        workType: WorkType.ONSITE,
        employmentType: EmploymentType.FULL_TIME,
        currency: 'NGN',
        description: 'Turn data into insights for Northstar.',
        responsibilities: 'Build dashboards; SQL queries; stakeholder comms.',
        qualifications: '2+ yrs analytics; SQL; Python a plus.',
        postedAt: new Date(Date.now() - 5 * 86400000),
        deadline: new Date(Date.now() + 9 * 86400000), // 9 days from now
      },
      {
        id: 'aaaaaaa4-aaaa-aaaa-aaaa-aaaaaaaaaaa4',
        companyId: Gates.id,
        title: 'Backend Engineer',
        location: 'Remote',
        workType: WorkType.REMOTE,
        employmentType: EmploymentType.CONTRACT,
        currency: 'USD',
        description: 'APIs & services powering Gates Foundation.',
        responsibilities: 'Node.js services; Postgres; performance.',
        qualifications: '3+ yrs backend; Node.js; SQL/Postgres.',
        postedAt: new Date(),
        deadline: new Date(Date.now() + 9 * 86400000), // 9 days from now
      },
    ],
    skipDuplicates: true,
  })

  // Link tags
  await prisma.jobTag.createMany({
    data: [
      // Frontend Developer
      { jobId: 'aaaaaaa1-aaaa-aaaa-aaaa-aaaaaaaaaaa1', tagId: tagId('react') },
      { jobId: 'aaaaaaa1-aaaa-aaaa-aaaa-aaaaaaaaaaa1', tagId: tagId('nextjs') },
      // Product Designer
      { jobId: 'aaaaaaa2-aaaa-aaaa-aaaa-aaaaaaaaaaa2', tagId: tagId('figma') },
      { jobId: 'aaaaaaa2-aaaa-aaaa-aaaa-aaaaaaaaaaa2', tagId: tagId('design-systems') },
      // Data Analyst
      { jobId: 'aaaaaaa3-aaaa-aaaa-aaaa-aaaaaaaaaaa3', tagId: tagId('sql') },
      { jobId: 'aaaaaaa3-aaaa-aaaa-aaaa-aaaaaaaaaaa3', tagId: tagId('python') },
      // Backend Engineer
      { jobId: 'aaaaaaa4-aaaa-aaaa-aaaa-aaaaaaaaaaa4', tagId: tagId('nodejs') },
      { jobId: 'aaaaaaa4-aaaa-aaaa-aaaa-aaaaaaaaaaa4', tagId: tagId('postgres') },
    ],
    skipDuplicates: true,
  })

  console.log('Seed complete.')
}

main().catch(e => {
  console.error(e)
  process.exit(1)
}).finally(async () => {
  await prisma.$disconnect()
})
