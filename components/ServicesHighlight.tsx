// components/Highlights.tsx
import Link from 'next/link'
import Image from 'next/image'

export default function ServicesHighlight() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="group overflow-hidden rounded-3xl bg-white shadow-md transition-all duration-300 hover:shadow-lg">
          <div className="relative aspect-[16/9] w-full">
            <Image
              src="/cvrevamp.jpg"
              alt="Person improving a CV"
              fill
              className="object-cover transition-transform duration-500 ease-out will-change-transform
                         group-hover:scale-105 group-hover:brightness-105"
              priority
            />
            <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold">CV Revamp</h3>
            <p className="mt-2 text-slate-600 text-sm">
              Professional feedback and formatting to make your CV stand out.
            </p>
            <Link
              href="/cv-revamp"
              className="inline-block mt-4 rounded-full px-4 py-2 text-sm font-semibold text-white bg-[#1ABC9C] hover:bg-[#17a589] focus:outline-none focus:ring-2 focus:ring-[#1ABC9C]/40"
            >
              Get Started
            </Link>
          </div>
        </div> 
        <div className="group overflow-hidden rounded-3xl bg-white shadow-md transition-all duration-300 hover:shadow-lg">
          <div className="relative aspect-[16/9] w-full">
            <Image
              src="/manspeaking.jpg"
              alt="Reading the Gracewell career blog"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 ease-out will-change-transform
                         group-hover:scale-105 group-hover:brightness-105"
            />
            <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold">Career Blog</h3>
            <p className="mt-2 text-slate-600 text-sm">
              Interview strategies, salary insights, and growth playbooks.
            </p>
            <Link
              href="/blog"
              className="inline-block mt-4 rounded-full px-4 py-2 text-sm font-semibold text-[#6C5CE7] bg-[#F1EEFF] hover:bg-[#E7E0FF] focus:outline-none focus:ring-2 focus:ring-[#6C5CE7]/40"
            >
              Read Articles
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}