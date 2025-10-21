import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Section from '@/components/Section'
import Image from 'next/image'
import Link from 'next/link'
import PricingPlans from '@/components/PricingPlans'
import DemoDashboard from '@/components/DemoDashboard'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* HERO */}
        <Section className="pt-20 pb-12">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Scheduling & operations software for{' '}
                <span className="text-brand-600">cleaning companies</span>
              </h1>
              <p className="mt-4 text-lg text-slate-700">
                CleanOpsAI makes scheduling, planning, tracking, client & staff management, and payments easier — 
                so you can scale without spreadsheets.
              </p>
              <div className="mt-6 flex gap-3">
                <Link href="/signup" className="btn-primary">
                  Start free
                </Link>
                <Link href="/pricing" className="btn-outline">
                  See pricing
                </Link>
              </div>
              <p className="mt-2 text-sm text-slate-500">
                No credit card. Cancel anytime.
              </p>
              <ul className="mt-8 grid sm:grid-cols-2 gap-3 text-sm">
                <li className="card p-3">Drag-drop schedules</li>
                <li className="card p-3">Client & staff management</li>
                <li className="card p-3">Route & time optimisation</li>
                <li className="card p-3">Mileage & payroll</li>
              </ul>
            </div>
            <div className="relative">
              <div className="card overflow-hidden">
                <Image
                  src="/og.jpg"
                  width={1200}
                  height={630}
                  alt="CleanOpsAI preview"
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </Section>

        {/* WHO IT'S FOR */}
        <Section className="py-12">
          <h2 className="text-2xl font-semibold">
            Built for cleaning companies of every size
          </h2>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                t: 'Small & growing teams',
                d: 'Keep everyone aligned with a clear daily plan and simple client notes.',
              },
              {
                t: 'Multi-crew operations',
                d: 'Schedule by team or vehicle, respect staff hours, and avoid overtime.',
              },
              {
                t: 'Scale with confidence',
                d: 'Forecast route overruns before they happen and keep customers updated.',
              },
            ].map((i) => (
              <div key={i.t} className="card p-6">
                <div className="text-lg font-medium">{i.t}</div>
                <div className="text-slate-600 mt-2">{i.d}</div>
              </div>
            ))}
          </div>
        </Section>

        <Section className="py-12">
  <h2 className="text-2xl font-semibold mb-4">See the workflow (demo)</h2>
  <p className="text-slate-600 mb-6">
    A single place to plan your day, move jobs, respect client times and staff hours, and pay fairly for travel.
  </p>
  <DemoDashboard />
</Section>

        {/* PRICING */}
        <Section className="py-12">
          <PricingPlans />
        </Section>

        {/* PERFORMANCE & TRUST */}
        <Section className="py-12">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl font-semibold">
                Fast, light, and mobile-first
              </h3>
              <p className="mt-3 text-slate-700">
                We avoid heavy UI frameworks and ship only what you need.
                Next.js routing, image optimization, and font subsetting keep
                first load fast on 4G.
              </p>
              <ul className="mt-4 list-disc pl-5 text-slate-700 space-y-2">
                <li>Dynamic import of heavy components</li>
                <li>SEO-first metadata & Open Graph</li>
                <li>Robots + Sitemap + JSON-LD</li>
              </ul>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-medium">At a glance</h4>
              <dl className="mt-3 grid grid-cols-2 gap-3 text-sm">
                <div>
                  <dt className="text-slate-500">First paint</dt>
                  <dd className="font-medium">Ultra fast</dd>
                </div>
                <div>
                  <dt className="text-slate-500">SEO</dt>
                  <dd className="font-medium">Ready out of the box</dd>
                </div>
                <div>
                  <dt className="text-slate-500">Accessibility</dt>
                  <dd className="font-medium">Semantic & ARIA</dd>
                </div>
                <div>
                  <dt className="text-slate-500">Editing</dt>
                  <dd className="font-medium">Copy in one file</dd>
                </div>
              </dl>
            </div>
          </div>
        </Section>

        {/* CONTACT */}
        <Section id="contact" className="py-12">
          <div className="card p-6">
            <h2 className="text-2xl font-semibold">Contact us</h2>
            <p className="text-slate-700 mt-2">
              Have questions or want a personalised walkthrough? Drop your email
              and we’ll get in touch.
            </p>
            <form
              className="mt-4 grid sm:grid-cols-[1fr_auto] gap-3"
              action="https://formspree.io/f/xdknjvyl"
              method="POST"
            >
              <label className="sr-only" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@company.com"
                className="w-full border rounded-xl p-3"
              />
              <button className="btn-primary">Request demo</button>
            </form>
            <p className="text-xs text-slate-500 mt-2">
              We’ll only use your email to contact you about CleanOpsAI.
            </p>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}