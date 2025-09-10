import { parse } from 'csv-parse/sync'
export async function uploadCsv(fd: FormData) {
  'use server'
  const file = fd.get('file') as File
  const text = await file.text()
  const rows = parse(text, { columns: true, skip_empty_lines: true }) as any[]
  for (const r of rows) {
    const company = await prisma.company.upsert({ where:{ name:r.company }, update:{}, create:{ name:r.company } })
    await prisma.job.create({
      data: {
        title: r.title,
        slug: slugify(`${r.title}-${company.name}-${Date.now()}`, { lower:true, strict:true }),
        companyId: company.id,
        location: r.location,
        workType: r.workType,
        employment: r.employment,
        description: r.description,
        salaryMin: r.salaryMin ? Number(r.salaryMin) : null,
        salaryMax: r.salaryMax ? Number(r.salaryMax) : null,
        tags: r.tags ? r.tags.split(',').map((t:string)=>t.trim()) : [],
      }
    })
  }
}
