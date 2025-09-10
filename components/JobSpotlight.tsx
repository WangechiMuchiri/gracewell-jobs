// components/HotJobs.tsx
import Link from 'next/link'
import { getHotJobs } from '../app/lib/jobs'
import { WorkType, EmploymentType } from '@prisma/client'
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from 'react'

function fmtWorkType(w: WorkType) {
  if (w === 'REMOTE') return 'Remote'
  if (w === 'HYBRID') return 'Hybrid'
  return 'Onsite'
}
function fmtEmployment(e: EmploymentType) {
  switch (e) {
    case 'FULL_TIME': return 'Full-time'
    case 'PART_TIME': return 'Part-time'
    case 'CONTRACT':  return 'Contract'
    case 'INTERN':    return 'Intern'
  }
}

export default async function JobSpotlight() {
  const jobs = await getHotJobs(4)

  if (!jobs.length) {
  return (
    <section className="bg-slate-50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Job Spotlight 🌟</h2>
          <Link href="/jobs" className="text-sm font-semibold text-[#6C5CE7] hover:underline">
            View all jobs →
          </Link>
        </div>
        <p className="text-slate-600 text-sm">No jobs yet. Check back soon.</p>
        </div>
    </section>
  )
  }
  
  return (
    <section className="bg-slate-50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Job Spotlight</h2>
          <Link href="/jobs" className="text-sm font-semibold text-[#6C5CE7] hover:underline">
            View all jobs →
          </Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {jobs.map((job) => {
            const tags = job.tags?.map((t: { tag: { label: any } }) => t.tag.label).slice(0, 2) ?? []
            const closingSoon =
              job.deadline && job.deadline > new Date() &&
              (job.deadline.getTime() - Date.now()) < 1000 * 60 * 60 * 24 * 7 // < 7 days

            return (
            <article
              key={job.id}
              className="group rounded-2xl bg-white shadow-sm border border-slate-100 p-6 hover:shadow-md transition">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-base font-semibold leading-snug">{job.title}</h3>
                {closingSoon && (
                  <span className="inline-flex items-center rounded-full bg-[#F1EEFF] text-[#6C5CE7] text-[11px] font-semibold px-2 py-0.5">
                    Closing soon
                  </span>
                )}
              </div>

              <p className="mt-1 text-sm text-slate-600">
                <span className="font-medium">{job.company.name}</span> • {job.location}
              </p>

              <div className="mt-3 flex items-center gap-2">
                <span className="inline-flex items-center rounded-full border text-xs px-2 py-1">
                  {fmtWorkType(job.workType)} • {fmtEmployment(job.employmentType)}
                </span>
              </div>
              <div className="mt-6 flex items-center gap-3">
                <form action={`/jobs/${job.id}/apply`} className="contents">
                  <button
                    type="submit"
                    className="rounded-full bg-[#6C5CE7] px-4 py-2 text-sm font-semibold text-white shadow-md 
                 hover:bg-[#5a48c8] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#6C5CE7]"
                    aria-label={`Quick apply for ${job.title} at ${job.company}`}
                  >
                    Quick apply
                  </button>
                </form>
                <Link
                  href={`/jobs/${job.id}`}
                  className="text-sm font-medium text-[#6C5CE7] hover:underline"
                >
                  View Details →
                </Link>
              </div>
            </article>
            )
})}
        </div>
      </div>
    </section>
  )
}
