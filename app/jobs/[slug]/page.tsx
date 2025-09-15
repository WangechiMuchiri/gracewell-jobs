// src/app/jobs/[slug]/page.tsx
import { prisma } from '@/lib/prisma'
import { notFound } from 'next/navigation'
export default async function JobDetail() {
  return (<div>Job detail page</div>)
}
