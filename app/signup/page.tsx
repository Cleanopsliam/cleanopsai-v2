import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Section from '@/components/Section'

export default function Signup() {
  return (
    <>
      <Header />
      <Section>
        <h1 className="text-3xl font-bold">Create your account</h1>
        <p className="text-slate-700 mt-2">Auth not wired yet on the marketing site build. We’ll wire Supabase in the app phase.</p>
        <form className="mt-6 max-w-md space-y-3">
          <input className="w-full border rounded-xl p-3" placeholder="Email" />
          <input className="w-full border rounded-xl p-3" placeholder="Password" type="password" />
          <button className="btn-primary">Continue</button>
        </form>
      </Section>
      <Footer />
    </>
  )
}
