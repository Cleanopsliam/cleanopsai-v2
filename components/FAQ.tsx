'use client'
import { useState } from 'react'
type Item = { q: string; a: string }
export default function FAQ({ items }: { items: Item[] }) {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <div className="divide-y rounded-2xl border bg-white shadow-smooth">
      {items.map((it, i)=>(
        <details key={i} className="p-5" open={open===i} onClick={(e)=>{ e.preventDefault(); setOpen(open===i?null:i) }}>
          <summary className="cursor-pointer list-none font-medium">{it.q}</summary>
          <p className="mt-2 text-slate-600">{it.a}</p>
        </details>
      ))}
    </div>
  )
}
