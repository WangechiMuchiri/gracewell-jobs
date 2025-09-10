// components/JobSpotlightSkeleton.tsx
export default function JobSpotlightSkeleton() {
  return (
    <section className="bg-slate-50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-6 w-40 bg-slate-200 rounded mb-6" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="rounded-2xl border border-slate-100 p-5 bg-white">
              <div className="h-5 w-2/3 bg-slate-200 rounded" />
              <div className="mt-2 h-4 w-1/2 bg-slate-200 rounded" />
              <div className="mt-3 h-6 w-32 bg-slate-200 rounded" />
              <div className="mt-5 h-9 w-36 bg-slate-200 rounded" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}