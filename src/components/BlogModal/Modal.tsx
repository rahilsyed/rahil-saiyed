const Modal = ({ setIsModalOpen, onClose }: {setIsModalOpen: () => void, onClose: () => void }) => {
  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-5"
      style={{ background: 'rgba(10,22,40,0.82)', backdropFilter: 'blur(6px)' }}
    >
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-sm"
        style={{ background: 'var(--bg-panel)', border: '1px solid var(--line-strong)' }}
      >
        {/* crop marks */}
        <span className="crop" />
        <span className="crop tr" />
        <span className="crop bl" />
        <span className="crop br" />

        {/* header */}
        <div className="flex items-center justify-between px-6 py-4"
          style={{ borderBottom: '1px solid var(--line-strong)' }}
        >
          <span className="uppercase tracking-widest text-[11px]"
            style={{ fontFamily: 'var(--font-mono)', color: 'var(--cyan)' }}
          >
            // blog — post
          </span>
          <button
            onClick={onClose}
            className="text-xl leading-none cursor-pointer transition-colors duration-200"
            style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-dim)', background: 'none', border: 'none' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--amber)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-dim)')}
          >
            ×
          </button>
        </div>

        {/* body */}
        <div className="px-6 py-7 flex flex-col gap-4">
          <div className="eyebrow">Blog Post</div>

          <h2 className="font-semibold tracking-tight text-2xl"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
          >
            Post Title Goes Here
          </h2>

          {/* meta */}
          <div className="flex flex-wrap gap-4 text-[11px] tracking-wider pb-5"
            style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-dim)', borderBottom: '1px dashed var(--grid-line)' }}
          >
            <span>2025-01-01</span>
            <span style={{ color: 'var(--line-strong)' }}>|</span>
            <span style={{ color: 'var(--cyan)' }}>5 min read</span>
          </div>

          {/* tags */}
          <div className="proj-tags">
            <span>React</span>
            <span>TypeScript</span>
            <span>AWS</span>
          </div>

          {/* content */}
          <p className="text-[14.5px] leading-7" style={{ color: 'var(--text-muted)' }}>
            Blog content goes here...
          </p>
        </div>

        {/* footer */}
        <div className="flex justify-end px-6 py-4"
          style={{ borderTop: '1px solid var(--line-strong)' }}
        >
          <button onClick={onClose} className="btn btn-ghost text-xs px-4 py-2">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
