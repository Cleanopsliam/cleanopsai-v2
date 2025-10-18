export default function Footer() {
  return (
    <footer className="border-t mt-16">
      <div className="container py-8 text-sm text-slate-600 grid gap-4 md:flex md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} CleanOpsAI. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="/privacy">Privacy</a>
          <a href="mailto:hello@cleanopsai.com">Contact</a>
        </div>
      </div>
    </footer>
  )
}
