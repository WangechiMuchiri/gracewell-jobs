// components/Header.tsx
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const nav = [
  { href: '/jobs', label: 'Jobs' },
  { href: '/blog', label: 'Career Blog' },
  { href: '/cv-revamp', label: 'CV Revamp' },
  { href: '/about', label: 'About' },
]

export default function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  // Lock background scroll when drawer is open
  useEffect(() => {
    const el = document.documentElement
    if (open) el.classList.add('overflow-hidden')
    else el.classList.remove('overflow-hidden')
    return () => el.classList.remove('overflow-hidden')
  }, [open])

  return (
    <header className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-slate-200">
      {/* Top bar */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="inline-flex items-center gap-2">
          <span className="text-xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#1ABC9C] to-[#6C5CE7]">
            Gracewell
          </span>
          <span className="hidden sm:inline text-m font-extrabold text-slate-500">Careers</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {nav.map((item) => {
            const active = pathname?.startsWith(item.href)
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium hover:text-[#1ABC9C] transition ${
                  active ? 'text-[#1ABC9C]' : 'text-slate-700'
                }`}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        {/* Desktop auth */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="/login" className="text-sm text-slate-700 hover:text-[#6C5CE7]">
            Sign in
          </Link>
          <Link
            href="/signup"
            className="rounded-full px-4 py-2 text-sm font-semibold text-white bg-[#1ABC9C] hover:opacity-90 transition"
          >
            Sign up
          </Link>
        </div>

        {/* Mobile trigger */}
        <button
          onClick={() => setOpen(true)}
          aria-expanded={open}
          aria-controls="mobile-drawer"
          className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 text-slate-700 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6C5CE7]"
        >
          <span className="sr-only">Open menu</span>
          <Menu size={20} />
        </button>
      </div>

      {/* Mobile drawer (overlay + slide-in) */}
      <div
        id="mobile-drawer"
        aria-hidden={!open}
        className={`md:hidden fixed inset-0 z-50 ${open ? '' : 'pointer-events-none'}`}
      >
        {/* Backdrop */}
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
            open ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Panel */}
        <aside
          role="dialog"
          aria-modal="true"
          className={`absolute right-0 top-0 h-full w-72 max-w-[85%] bg-white shadow-xl border-l border-slate-200 transition-transform duration-300 ease-out ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Drawer header with title */}
          <div className="flex items-center justify-between px-4 py-4 border-b border-slate-200">
            <span className="text-lg font-bold text-slate-800">Gracewell</span>
            <button
              onClick={() => setOpen(false)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 text-slate-700 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6C5CE7]"
            >
              <span className="sr-only">Close menu</span>
              <X size={18} />
            </button>
          </div>

          {/* Drawer nav links */}
          <nav className="px-4 py-4 flex flex-col gap-1">
            {nav.map((item) => {
              const active = pathname?.startsWith(item.href)
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-md px-3 py-2 text-sm font-medium transition ${
                    active ? 'bg-slate-100 text-slate-900' : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>
        </aside>
      </div>
    </header>
  )
}