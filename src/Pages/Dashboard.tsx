import Sidebar from '../components/ui/Sidebar'

const stats = [
  { label: 'Projects', value: '04' },
  { label: 'Experience', value: '03' },
  { label: 'Skills', value: '06' },
  { label: 'Gallery Items', value: '03' },
]

const Dashboard = () => {
  return (
    <div className="min-h-screen flex">
      <Sidebar />

      {/* main content — offset by sidebar width on md+ */}
      <main className="flex-1 md:ml-56 p-6 md:p-10">

        {/* header */}
        <div className="mb-10 mt-10 md:mt-0">
          <div className="sheet-num mb-1">DASHBOARD</div>
          <h1 className="font-display text-3xl font-semibold">Overview <span className="text-[var(--cyan)]">Panel</span></h1>
        </div>

        {/* stat cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {stats.map(s => (
            <div key={s.label} className="border border-[var(--line-strong)] bg-[var(--bg-panel)] p-5 rounded-sm">
              <div className="font-mono text-[10px] tracking-widest uppercase text-[var(--text-dim)] mb-2">{s.label}</div>
              <div className="font-display text-4xl font-bold text-[var(--cyan)]">{s.value}</div>
            </div>
          ))}
        </div>

        {/* quick actions */}
        <div className="border border-[var(--line-strong)] bg-[var(--bg-panel)] rounded-sm">
          <div className="px-6 py-4 border-b border-[var(--line-strong)]">
            <span className="font-mono text-[11px] tracking-widest uppercase text-[var(--text-dim)]">Quick Actions</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-px bg-[var(--grid-line)]">
            {['Add Project', 'Add Experience', 'Upload Photo', 'Edit Skills', 'View Portfolio', 'Logout'].map(action => (
              <button key={action}
                className="bg-[var(--bg-panel)] px-6 py-5 text-left font-mono text-[12px] tracking-wide text-[var(--text-muted)] hover:text-[var(--cyan)] hover:bg-[var(--cyan-dim)] transition-colors">
                {action} →
              </button>
            ))}
          </div>
        </div>

      </main>
    </div>
  )
}

export default Dashboard