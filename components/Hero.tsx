// components/Hero.tsx
import HeroImage from './HeroImage'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#F5F6FA] to-white pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1 z-10">
            <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight">
              Find your next job at{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#1ABC9C] to-[#6C5CE7]">
                Gracewell
              </span>
              .
            </h1>
            <form
              action="/jobs"
              className="mt-8 w-full max-w-3xl"
            >
              <div className="flex flex-col gap-3 lg:flex-row lg:items-end">
                <div className="flex-1 min-w-[260px]">
                <label className="block text-base font-medium text-black mb-1 ml-4">Role</label>
                  <div className="flex items-center gap-2 rounded-full border border-slate-700 px-6 py-4 shadow-sm bg-white"> 
                    <svg width="16" height="16" viewBox="0 0 24 24" className="text-slate-400" aria-hidden>
                      <path fill="currentColor" d="M21 20.3L16.7 16a7.5 7.5 0 10-1.7 1.7L20.3 22L21 20.3zM10.5 16a5.5 5.5 0 110-11a5.5 5.5 0 010 11z"/>
                    </svg>
                    <input
                      name="query"
                      placeholder="Software engineer"
                      className="w-full outline-none text-slate-900 placeholder:text-slate-500"
                      aria-label="Role"
                    />
                  </div>
                </div>
                <div className="flex-1 min-w-[260px]">
                <label className="block text-base font-medium text-black mb-1 ml-4">Where?</label>
                  <div className="flex items-center gap-2 rounded-full border border-slate-700 px-6 py-4 shadow-sm bg-white">
                    <svg width="16" height="16" viewBox="0 0 24 24" className="text-slate-400" aria-hidden>
                      <path fill="currentColor" d="M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7zm0 9.5a2.5 2.5 0 110-5a2.5 2.5 0 010 5z"/>
                    </svg>
                    <input
                      name="location"
                      placeholder="Los Angeles"
                      className="w-full outline-none text-slate-00 placeholder:text-slate-500"
                      aria-label="Location"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="mt-2 sm:mt-6  rounded-full px-7 py-4 text-base font-semibold text-white bg-[#6C5CE7] shadow-md hover:bg-[#5a48c8] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#6C5CE7]"
                  aria-label="Search jobs"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
           <div className="order-1 lg:order-2 relative flex justify-center lg:justify-end mb-6 lg:mb-0 z-0">
            <HeroImage />
            <span className="absolute left-6 sm:left-10 top-12 sm:top-16 h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 rotate-12 bg-[#6C5CE7] motion-safe:animate-float will-change-transform pointer-events-none z-0" />
            <span className="absolute right-6 sm:right-10 -bottom-8 sm:-bottom-10 h-8 w-8 sm:h-10 sm:w-10 md:h-14 md:w-14 rounded-full bg-[#1ABC9C] motion-safe:animate-drift will-change-transform pointer-events-none z-0" />
            <span
            className="absolute -right-10 sm:-right-14 top-16 sm:top-24 motion-safe:animate-float will-change-transform pointer-events-none z-0"
              style={{
                width: 0,
                height: 0,
                borderLeft: '18px solid transparent',
                borderRight: '18px solid transparent',
                borderBottom: '30px solid #FBBC05',
              }}  />
            <span className="absolute left-12 sm:left-20 -bottom-10 sm:-bottom-14 h-12 w-20 sm:h-16 sm:w-24 md:h-20 md:w-28 bg-[#FF7675] rounded-[50%_50%_40%_60%/40%_60%_50%_50%] motion-safe:animate-drift will-change-transform pointer-events-none z-0" />
            </div>
        </div>
      </div>
    </section>
  )
}