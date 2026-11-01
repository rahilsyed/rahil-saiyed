import { useState } from 'react'

const links = [
  { label: 'Overview', href: '/admin' },
  { label: 'Projects', href: '/admin/projects' },
  { label: 'Experience', href: '/admin/experience' },
  { label: 'Skills', href: '/admin/skills' },
  { label: 'Gallery', href: '/admin/gallery' },
]

const Sidebar = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* hamburger — mobile only */}
      <button
        className="fixed top-4 left-4 z-50 md:hidden flex flex-col gap-1.5 p-2 border border-[var(--line-strong)] bg-[var(--bg-panel)] rounded-sm"
        onClick={() => setOpen(o => !o)}
        aria-label="Toggle menu"
      >
        <span className={`block w-5 h-px bg-[var(--text-primary)] transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
        <span className={`block w-5 h-px bg-[var(--text-primary)] transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
        <span className={`block w-5 h-px bg-[var(--text-primary)] transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
      </button>

      {/* overlay — mobile */}
      {open && <div className="fixed inset-0 z-30 bg-black/50 md:hidden" onClick={() => setOpen(false)} />}

      {/* sidebar */}
      <aside className={`fixed top-0 left-0 z-40 h-full w-56 bg-[var(--bg-panel)] border-r border-[var(--line-strong)] flex flex-col transition-transform duration-300
        ${open ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>

        <div className="px-5 py-5 border-b border-[var(--line-strong)]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[var(--cyan)] shadow-[0_0_8px_var(--cyan)]" />
            <span className="font-mono text-[11px] tracking-widest text-[var(--text-primary)]">ADMIN PANEL</span>
          </div>
        </div>

        <nav className="flex flex-col gap-1 p-3 flex-1">
          {links.map(l => (
            <a key={l.label} href={l.href}
              className="font-mono text-[12px] tracking-wide text-[var(--text-muted)] px-3 py-2.5 rounded-sm hover:text-[var(--cyan)] hover:bg-[var(--cyan-dim)] transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="p-4 border-t border-[var(--line-strong)]">
          <a href="/" className="font-mono text-[11px] text-[var(--text-dim)] hover:text-[var(--cyan)] transition-colors">← Portfolio</a>
        </div>
      </aside>
    </>
  )
}

export default Sidebar
