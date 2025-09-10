// src/app/jobs/page.tsx
import { prisma } from '@/lib/prisma'
export default async function Jobs({ searchParams }: { searchParams: Record<string,string|undefined> }) {
  const { query, location, workType, employment, page='1' } = searchParams
  const take = 20, skip = (Number(page)-1)*take
  const where:any = {}
  if (query) where.OR = [
    { title: { contains: query, mode: 'insensitive' }},
    { description: { contains: query, mode: 'insensitive' }},
    { tags: { has: query.toLowerCase() }},
  ]
  if (location) where.location = { contains: location, mode: 'insensitive' }
  if (workType) where.workType = workType
  if (employment) where.employment = employment
  const [jobs, total] = await Promise.all([
    prisma.job.findMany({ where, include:{company:true}, orderBy:{postedAt:'desc'}, take, skip }),
    prisma.job.count({ where })
  ])
  return (/* sidebar filters + job cards + pagination */)
}
