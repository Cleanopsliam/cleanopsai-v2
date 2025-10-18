'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { site } from '@/lib/site'
import clsx from 'clsx'

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b">
      <div className="container py-3 flex items-center justify-between" role="navigation" aria-label="Main">
        <Link href="/" className="flex items-center gap-2" aria-label="CleanOpsAI home">
          <Image src="/logo.svg" alt="CleanOpsAI logo" width={28} height={28} priority />
          <span className="font-semibold">{site.name}</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/pricing" className="text-slate-700 hover:text-slate-900">Pricing</Link>
          <Link href="/privacy" className="text-slate-700 hover:text-slate-900">Privacy</Link>
          <Link href="#contact" className="text-slate-700 hover:text-slate-900">Contact</Link>
          <Link href="/signup" className="btn-primary">Start free</Link>
        </nav>
        <button className="md:hidden p-2" onClick={()=>setOpen(v=>!v)} aria-label="Toggle menu">
          <div className={clsx('h-0.5 w-6 bg-slate-900 transition', open && 'rotate-45 translate-y-1')} />
          <div className={clsx('h-0.5 w-6 bg-slate-900 my-1 transition', open && 'opacity-0')} />
          <div className={clsx('h-0.5 w-6 bg-slate-900 transition', open && '-rotate-45 -translate-y-1')} />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t">
          <div className="container py-3 flex flex-col gap-3">
            <Link href="/pricing" onClick={()=>setOpen(false)}>Pricing</Link>
            <Link href="/privacy" onClick={()=>setOpen(false)}>Privacy</Link>
            <Link href="#contact" onClick={()=>setOpen(false)}>Contact</Link>
            <Link href="/signup" className="btn-primary w-max" onClick={()=>setOpen(false)}>Start free</Link>
          </div>
        </div>
      )}
    </header>
  )
}
