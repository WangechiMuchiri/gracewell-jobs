// components/Newsletter.tsx
export default function Newsletter() {
  return (
    <section className="bg-gradient-to-r from-[#F5F6FA] to-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              Stay Ahead in Your Career
            </h2>
            <p className="mt-2 text-slate-600">
              Get weekly job openings, career tips, and more—straight to your inbox.
            </p>
          </div>
          <form
            action="#"
            className="flex flex-col sm:flex-row gap-3 sm:justify-end"
          >
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="flex-1 rounded-full border border-slate-700 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-500 focus:outline-none"
              required
            />
            <button
              type="submit"
               className="rounded-full bg-[#1ABC9C] px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-[#17a589] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1ABC9C]/40"
               aria-label="Subscribe to newsletter">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
