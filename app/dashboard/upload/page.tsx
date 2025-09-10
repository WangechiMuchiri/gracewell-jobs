// src/app/dashboard/upload/page.tsx
import { auth } from '@/auth'
import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'
import { z } from 'zod'
import slugify from 'slugify'

const schema = z.object({
  title: z.string().min(3),
  companyName: z.string().min(2),
  location: z.string().min(2),
  workType: z.enum(['REMOTE','HYBRID','ONSITE']),
  employment: z.enum(['FULL_TIME','PART_TIME','CONTRACT','INTERN']),
  salaryMin: z.coerce.number().optional(),
  salaryMax: z.coerce.number().optional(),
  description: z.string().min(20),
  tags: z.string().optional(),
})

export default async function Upload() {
  const session = await auth()
  if (!session?.user || session.user.role !== 'ADMIN') return null

  async function createJob(fd: FormData) {
    'use server'
    const raw = Object.fromEntries(fd) as any
    const data = schema.parse(raw)
    const company = await prisma.company.upsert({
      where: { name: data.companyName }, update: {}, create: { name: data.companyName }
    })
    await prisma.job.create({
      data: {
        title: data.title,
        slug: slugify(`${data.title}-${company.name}-${Date.now()}`, { lower: true, strict: true }),
        companyId: company.id,
        location: data.location,
        workType: data.workType,
        employment: data.employment,
        salaryMin: data.salaryMin ?? null,
        salaryMax: data.salaryMax ?? null,
        description: data.description,
        tags: data.tags ? data.tags.split(',').map((t:string)=>t.trim()) : [],
        createdById: session.user.id as string,
      }
    })
    revalidatePath('/jobs')
  }

  return (/* <JobForm action={createJob} /> and <CsvUploadForm action={uploadCsv} /> */)
}
