export default function Footer() {
  return (
    <footer className="border-t border-black/5 dark:border-white/10">
      <div className="container-px max-w-6xl mx-auto py-6 text-sm opacity-80 flex items-center justify-between">
        <div>© {new Date().getFullYear()} Just Wing It</div>
        <nav className="flex items-center gap-4">
          <a className="hover:underline" href="#">Privacy</a>
          <a className="hover:underline" href="#">Terms</a>
          <a className="hover:underline" href="#">Contact</a>
        </nav>
      </div>
    </footer>
  )
}
