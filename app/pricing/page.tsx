import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Section from '@/components/Section'

export default function Pricing() {
  const tiers = [
    {name:'Starter', price:'£29/mo', features:['Up to 2 staff','Basic scheduling','Email support']},
    {name:'Pro', price:'£79/mo', features:['Up to 10 staff','Drag‑drop schedule','Route checks','Priority support']},
    {name:'Scale', price:'£149/mo', features:['Unlimited staff','Advanced constraints','Payroll export','Slack support']},
  ]
  return (
    <>
      <Header />
      <Section>
        <h1 className="text-3xl font-bold">Pricing</h1>
        <p className="text-slate-700 mt-2">Simple plans that grow with you.</p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {tiers.map(t => (
            <div key={t.name} className="card p-6">
              <h3 className="text-xl font-semibold">{t.name}</h3>
              <div className="text-4xl font-bold mt-2">{t.price}</div>
              <ul className="mt-4 text-slate-600 space-y-2 list-disc pl-5">
                {t.features.map(f=> <li key={f}>{f}</li>)}
              </ul>
              <a href="/signup" className="btn-primary mt-6">Choose {t.name}</a>
            </div>
          ))}
        </div>
      </Section>
      <Footer />
    </>
  )
}
