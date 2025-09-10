// src/app/jobs/[slug]/page.tsx
import { prisma } from '@/lib/prisma'
import { notFound } from 'next/navigation'
export default async function JobDetail({ params:{ slug } }:{ params:{slug:string} }) {
  const job = await prisma.job.findUnique({ where:{ slug }, include:{ company:true } })
  if (!job) notFound()
  return (/* title, company, location, type, tags, description, apply/save */)
}
