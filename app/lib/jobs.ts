// lib/jobs.ts
import { prisma } from '@/lib/prisma'

export async function getHotJobs(limit = 4) {
  return prisma.job.findMany({
    where: { isActive: true },
    orderBy: { postedAt: 'desc' },
    take: limit,
    include: {
      company: { select: { name: true } },
      tags: { include: { tag: { select: { slug: true, label: true } } } },
    },
  })
}