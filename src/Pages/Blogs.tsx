import React, { useEffect, useMemo, useState } from 'react'
import { toast } from 'react-toastify'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import { _fetchBlogs } from '../data-services/blogs'

type Blog = {
  _id: string
  title: string
  description: string
  image: string
  category: string
  isDeleted: boolean
  createdAt: string
  updatedAt: string
  author: { _id: string; fullName: string }
}

const ALL = 'all'

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })

const readTime = (text: string) => Math.max(1, Math.round(text.trim().split(/\s+/).length / 200))

const titleCase = (s: string) => s.replace(/\b\w/g, c => c.toUpperCase())

const BlogCard = ({ blog, onOpen }: { blog: Blog; onOpen: () => void }) => (
  <article className="group flex flex-col overflow-hidden rounded-md border border-[var(--line-strong)] bg-[var(--bg-panel)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--cyan)] hover:shadow-[0_12px_30px_-12px_rgba(0,0,0,0.5)]">
    <div className="relative h-48 overflow-hidden">
      <img
        src={blog.image}
        alt={blog.title}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <span className="absolute left-3 top-3 rounded-sm bg-[var(--bg)]/80 px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-[var(--cyan)] backdrop-blur">
        {blog.category}
      </span>
    </div>

    <div className="flex flex-1 flex-col p-5">
      <h3 className="mb-2 line-clamp-2 font-display text-[17px] font-semibold leading-snug">{blog.title}</h3>

      <div className="mb-3 flex items-center justify-between gap-3 font-mono text-[11px] text-[var(--text-dim)]">
        <span className="truncate">
          {formatDate(blog.createdAt)} by{' '}
          <span className="text-[var(--cyan)]">{titleCase(blog.author?.fullName ?? 'Unknown')}</span>
        </span>
        <span className="shrink-0">{readTime(blog.description)} min read</span>
      </div>

      <p className="mb-4 line-clamp-3 flex-1 text-[14px] leading-relaxed text-[var(--text-muted)]">
        {blog.description}
      </p>

      <button
        onClick={onOpen}
        className="inline-flex w-fit cursor-pointer items-center gap-2 font-mono text-[12px] font-semibold tracking-wide text-[var(--cyan)]"
      >
        Read More
        <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
      </button>
    </div>
  </article>
)

const SkeletonCard = () => (
  <div className="animate-pulse overflow-hidden rounded-md border border-[var(--line-strong)] bg-[var(--bg-panel)]">
    <div className="h-48 bg-[var(--bg-panel-alt)]" />
    <div className="space-y-3 p-5">
      <div className="h-4 w-3/4 rounded bg-[var(--bg-panel-alt)]" />
      <div className="h-3 w-1/2 rounded bg-[var(--bg-panel-alt)]" />
      <div className="h-3 w-full rounded bg-[var(--bg-panel-alt)]" />
      <div className="h-3 w-5/6 rounded bg-[var(--bg-panel-alt)]" />
    </div>
  </div>
)

const BlogModal = ({ blog, onClose }: { blog: Blog; onClose: () => void }) => {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={blog.title}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-md border border-[var(--line-strong)] bg-[var(--bg-panel)]"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-3 top-3 z-10 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-[var(--bg)]/80 text-lg text-[var(--text-primary)] hover:text-[var(--cyan)]"
        >
          ✕
        </button>
        <img src={blog.image} alt={blog.title} className="h-64 w-full object-cover md:h-80" />
        <div className="p-6 md:p-8">
          <span className="font-mono text-[11px] uppercase tracking-widest text-[var(--cyan)]">{blog.category}</span>
          <h2 className="mt-2 mb-3 font-display text-2xl font-semibold leading-tight md:text-3xl">{blog.title}</h2>
          <div className="mb-6 font-mono text-[12px] text-[var(--text-dim)]">
            {formatDate(blog.createdAt)} by{' '}
            <span className="text-[var(--cyan)]">{titleCase(blog.author?.fullName ?? 'Unknown')}</span> ·{' '}
            {readTime(blog.description)} min read
          </div>
          <p className="whitespace-pre-line text-[15px] leading-relaxed text-[var(--text-muted)]">{blog.description}</p>
        </div>
      </div>
    </div>
  )
}

const Blogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([])
  const [loading, setLoading] = useState(true)
  const [active, setActive] = useState<string>(ALL)
  const [selected, setSelected] = useState<Blog | null>(null)

  useEffect(() => {
    const load = async () => {
      try {
        const response = await _fetchBlogs()
        setBlogs((response.data as Blog[]).filter(b => !b.isDeleted))
      } catch (error: any) {
        toast.error(error.message)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  const categories = useMemo(
    () => [ALL, ...Array.from(new Set(blogs.map(b => b.category.toLowerCase())))],
    [blogs]
  )

  const visible = useMemo(
    () => (active === ALL ? blogs : blogs.filter(b => b.category.toLowerCase() === active)),
    [blogs, active]
  )

  return (
    <React.Fragment>
      <Navbar />
      <section className="py-24">
        <div className="wrap">
          {/* heading */}
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <div className="sheet-num mb-2">// BLOGS</div>
            <h1 className="font-display text-[clamp(28px,4vw,42px)] font-semibold tracking-tight">
              Read My <span className="text-[var(--cyan)]">Latest Blogs</span>
            </h1>
            <p className="mt-3 text-[15px] text-[var(--text-muted)]">
              Notes on code, backend systems, fitness and living a little more intentionally — written
              along the way.
            </p>
          </div>

          {/* category tabs */}
          <div className="mb-10 border-b border-[var(--line-strong)]">
            <div className="-mb-px flex justify-start gap-6 overflow-x-auto md:justify-center md:gap-10">
              {categories.map(cat => {
                const isActive = cat === active
                return (
                  <button
                    key={cat}
                    onClick={() => setActive(cat)}
                    className={`cursor-pointer whitespace-nowrap border-b-2 pb-3 font-mono text-[13px] tracking-wide transition-colors ${
                      isActive
                        ? 'border-[var(--cyan)] font-semibold text-[var(--cyan)]'
                        : 'border-transparent text-[var(--text-dim)] hover:text-[var(--text-primary)]'
                    }`}
                  >
                    {titleCase(cat)}
                  </button>
                )
              })}
            </div>
          </div>

          {/* grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {loading
              ? Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)
              : visible.map(blog => <BlogCard key={blog._id} blog={blog} onOpen={() => setSelected(blog)} />)}
          </div>

          {!loading && visible.length === 0 && (
            <div className="py-20 text-center font-mono text-[13px] text-[var(--text-dim)]">
              No blogs published yet.
            </div>
          )}
        </div>
      </section>
      <Footer />

      {selected && <BlogModal blog={selected} onClose={() => setSelected(null)} />}
    </React.Fragment>
  )
}

export default Blogs
