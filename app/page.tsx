import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Section from '@/components/Section'
import Image from 'next/image'
import Link from 'next/link'
import FAQ from '@/components/FAQ'
import { site } from '@/lib/site'

export default function Home() {
  const faqs = [
    { q:'How is this different from Jobber?', a:'CleanOpsAI is built specifically for UK cleaning operations: constraint‑aware scheduling (staff windows, client fixed times), simple travel pay at £0.70/mi, and route feasibility checks with clear “why” notes.'},
    { q:'Is it mobile friendly?', a:'Absolutely. We design mobile‑first with large tap targets, safe‑area spacing, and fast load times.'},
    { q:'Can I import my clients?', a:'Yes. CSV import is supported in the app (and we can help migrate).' },
  ]
  return (
    <>
      <Header />
      <main>
        <Section className="pt-20 pb-12">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="badge border-brand-200 text-brand-700">Jobber alternative</p>
              <h1 className="mt-3 text-4xl md:text-5xl font-bold leading-tight">
                Webflow‑level design. <span className="text-brand-600">Operations‑level brain.</span>
              </h1>
              <p className="mt-4 text-lg text-slate-700">
                {site.name} helps cleaning companies schedule smarter, pay fairly, and keep clients happy — without spreadsheets.
              </p>
              <div className="mt-6 flex gap-3">
                <Link href="/signup" className="btn-primary">Start free</Link>
                <Link href="/pricing" className="btn-outline">See pricing</Link>
              </div>
              <p className="mt-2 text-sm text-slate-500">No credit card. Cancel anytime.</p>
              <ul className="mt-8 grid sm:grid-cols-2 gap-3 text-sm text-slate-700">
                <li className="card p-3">Drag‑drop schedule</li>
                <li className="card p-3">Mileage & payroll</li>
                <li className="card p-3">Google Maps aware</li>
                <li className="card p-3">Route feasibility warnings</li>
              </ul>
            </div>
            <div className="relative">
              <div className="card overflow-hidden">
                <Image src="/og.jpg" width={1200} height={630} alt="CleanOpsAI preview" className="w-full h-auto" priority />
              </div>
            </div>
          </div>
        </Section>

        <Section className="py-12">
          <h2 className="text-2xl font-semibold">Why teams switch from Jobber</h2>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {t:'Constraint‑aware scheduling', d:'Respect staff windows, client preferred times, and travel in one view.'},
              {t:'Overrun forecasts', d:'Know days that will run late before they happen, with one‑click fixes.'},
              {t:'Simple UK‑friendly pay', d:'Cleaning minutes + miles × £0.70 — no headaches, fair for staff.'},
            ].map((i)=> (
              <div key={i.t} className="card p-6">
                <div className="text-lg font-medium">{i.t}</div>
                <div className="text-slate-600 mt-2">{i.d}</div>
              </div>
            ))}
          </div>
        </Section>

        <Section className="py-12">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl font-semibold">Fast, light, and mobile‑first</h3>
              <p className="mt-3 text-slate-700">We avoid heavy UI frameworks and ship only what you need. Next.js routing, image optimization, and font subsetting keep first load fast on 4G.</p>
              <ul className="mt-4 list-disc pl-5 text-slate-700 space-y-2">
                <li>Dynamic import of heavy components</li>
                <li>SEO‑first metadata & Open Graph</li>
                <li>Robots + Sitemap + JSON‑LD</li>
              </ul>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-medium">At a glance</h4>
              <dl className="mt-3 grid grid-cols-2 gap-3 text-sm">
                <div><dt className="text-slate-500">First paint</dt><dd className="font-medium">Ultra fast</dd></div>
                <div><dt className="text-slate-500">SEO</dt><dd className="font-medium">Ready out of the box</dd></div>
                <div><dt className="text-slate-500">Accessibility</dt><dd className="font-medium">Semantic & ARIA</dd></div>
                <div><dt className="text-slate-500">Editing</dt><dd className="font-medium">Copy in one file</dd></div>
              </dl>
            </div>
          </div>
        </Section>

        <Section className="py-12">
          <h2 className="text-2xl font-semibold">Pricing</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {[
              {name:'Starter', price:'£29/mo', features:['Up to 2 staff','Basic scheduling','Email support']},
              {name:'Pro', price:'£79/mo', features:['Up to 10 staff','Drag‑drop schedule','Route checks','Priority support']},
              {name:'Scale', price:'£149/mo', features:['Unlimited staff','Advanced constraints','Payroll export','Slack support']},
            ].map((t)=> (
              <div key={t.name} className="card p-6">
                <div className="text-xl font-semibold">{t.name}</div>
                <div className="text-4xl font-bold mt-2">{t.price}</div>
                <ul className="mt-4 text-slate-600 space-y-2 list-disc pl-5">
                  {t.features.map((f)=> <li key={f}>{f}</li>)}
                </ul>
                <a href="/signup" className="btn-primary mt-6">Choose {t.name}</a>
              </div>
            ))}
          </div>
        </Section>

        <Section className="py-12">
          <h2 className="text-2xl font-semibold">FAQs</h2>
          <div className="mt-6">
            <FAQ items={faqs} />
          </div>
        </Section>

        <Section id="contact" className="py-12">
          <div className="card p-6">
            <h2 className="text-2xl font-semibold">Contact us</h2>
            <p className="text-slate-700 mt-2">Have questions or want a personalised walkthrough? Drop your email and we’ll get in touch.</p>
            <form className="mt-4 grid sm:grid-cols-[1fr_auto] gap-3" action="https://formspree.io/f/xdknjvyl" method="POST">
              <label className="sr-only" htmlFor="email">Email</label>
              <input id="email" name="email" type="email" required placeholder="you@company.com" className="w-full border rounded-xl p-3" />
              <button className="btn-primary">Request demo</button>
            </form>
            <p className="text-xs text-slate-500 mt-2">We’ll only use your email to contact you about CleanOpsAI.</p>
          </div>
        </Section>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify({
          "@context":"https://schema.org",
          "@type":"SoftwareApplication",
          "name":"CleanOpsAI",
          "applicationCategory":"BusinessApplication",
          "operatingSystem":"Web",
          "description":"Cleaning business software for smart scheduling, payroll, and happier clients.",
          "offers":{"@type":"Offer","price":"29.00","priceCurrency":"GBP"}
        })}}
      />
    </>
  )
}
