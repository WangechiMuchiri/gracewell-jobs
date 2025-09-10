// components/Footer.tsx
import Link from 'next/link'
import { FaXTwitter, FaInstagram, FaLinkedin } from "react-icons/fa6";


type Props = { variant?: 'dark' | 'light' }
export default function Footer({ variant = 'dark' }: Props) {
  const isDark = variant === 'dark'
  const bg = isDark ? 'bg-slate-900' : 'bg-white'
  const border = isDark ? 'border-slate-800' : 'border-slate-200'
  const text = isDark ? 'text-slate-300' : 'text-slate-600'
  const heading = isDark ? 'text-white' : 'text-slate-900'
  const link = isDark
    ? 'text-slate-300 hover:text-white'
    : 'text-slate-700 hover:text-[#1ABC9C]'

  return (
    <footer className={`${bg} border-t ${border}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid gap-8 md:grid-cols-5">
        <div>
          <p className={`text-xl font-extrabold ${heading}`}>
            <span className="text-[#1ABC9C]">Grace</span>
            <span className="text-[#6C5CE7]">well</span>
          </p>
          <p className={`mt-2 text-sm ${text}`}>
            Find jobs. Grow your career. Stand out with your CV.
          </p>
        </div>
        <div>
          <p className={`font-semibold mb-3 ${heading}`}>Explore</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/jobs" className={link}>Jobs</Link></li>
            <li><Link href="/blog" className={link}>Career Blog</Link></li>
            <li><Link href="/cv-revamp" className={link}>CV Revamp</Link></li>
          </ul>
        </div>
        <div>
          <p className={`font-semibold mb-3 ${heading}`}>Company</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className={link}>About</Link></li>
            <li><Link href="/contact" className={link}>Contact</Link></li>
            <li><Link href="/privacy" className={link}>Privacy</Link></li>
          </ul>
        </div>
        <div>
          <p className={`font-semibold mb-3 ${heading}`}>Help</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/faq" className={link}>FAQ</Link></li>
            <li><Link href="/support" className={link}>Support</Link></li>
            <li><Link href="/terms" className={link}>Terms</Link></li>
          </ul>
        </div>
        <div>
          <p className={`font-semibold mb-3 ${heading}`}>Stay connected</p>
          <div className="flex gap-4">
            <Link href="https://x.com/" aria-label="Gracewell on X" className={`${text} hover:text-[#1ABC9C]`}>
              <FaXTwitter size={20} />
            </Link>
            <Link href="https://instagram.com/" aria-label="Gracewell on Instagram" className={`${text} hover:text-[#1ABC9C]`}>
              <FaInstagram size={20} />
            </Link>
            <Link href="https://linkedin.com/" aria-label="Gracewell on LinkedIn" className={`${text} hover:text-[#1ABC9C]`}>
              <FaLinkedin size={20} />
            </Link>
          </div>
        </div>
      </div>

      <div className={`border-t ${border}`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 text-xs flex items-center justify-between">
          <p className={text}>© {new Date().getFullYear()} Gracewell. All rights reserved.</p>
          <p className={text}>Made with ❤️ for jobseekers</p>
        </div>
      </div>
    </footer>
  )
}
