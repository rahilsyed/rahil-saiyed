import React, { useEffect } from 'react'
import { _fetchBlogs } from '../data-services/blogs';
import { toast } from 'react-toastify';

type Blog = {
    _id: string;
    title: string;
    description: string;
    image: string;
    category: string;
    isDeleted: boolean;
    createdAt: string;
    author: { _id: string; fullName: string };
}

const BlogsPage = () => {
    const [data, setData] = React.useState<Blog[] | null>(null);

    const fetchBlogs = async () => {
        try {
            const response = await _fetchBlogs();
            setData(response.data)
        } catch (error: any) {
            toast.error(error.message)
        }
    }

    useEffect(() => { fetchBlogs(); }, [])

    return (
        <div>
            {/* header */}
            <div className="mb-8 mt-10 md:mt-0 flex items-end justify-between">
                <div>
                    <div className="sheet-num mb-1">BLOGS</div>
                    <h1 className="font-display text-3xl font-semibold">My <span className="text-[var(--cyan)]">Blogs</span></h1>
                </div>
                <button className="btn btn-primary">+ New Blog</button>
            </div>

            {/* blog cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                {data?.map(blog => (
                    <div key={blog._id} className="border border-[var(--line-strong)] bg-[var(--bg-panel)] rounded-sm overflow-hidden flex flex-col">
                        <img src={blog.image} alt={blog.title} className="w-full h-44 object-cover" />
                        <div className="p-5 flex flex-col flex-1">
                            <div className="flex items-center justify-between mb-3">
                                <span className="font-mono text-[10px] tracking-widest uppercase text-[var(--cyan)] bg-[var(--cyan-dim)] px-2 py-1 rounded-sm">{blog.category}</span>
                                <span className="font-mono text-[10px] text-[var(--text-dim)]">{new Date(blog.createdAt).toLocaleDateString()}</span>
                            </div>
                            <div className="font-display text-[16px] font-semibold mb-2 leading-snug">{blog.title}</div>
                            <p className="text-[13px] text-[var(--text-muted)] line-clamp-3 flex-1">{blog.description}</p>
                            <div className="flex items-center justify-between mt-4 pt-4 border-t border-[var(--grid-line)]">
                                <span className="font-mono text-[10px] text-[var(--text-dim)]">{blog.author.fullName}</span>
                                <div className="flex gap-2">
                                    <button className="font-mono text-[10px] tracking-wide border border-[var(--line-strong)] text-[var(--text-muted)] px-3 py-1.5 rounded-sm hover:border-[var(--cyan)] hover:text-[var(--cyan)] transition-colors">Edit</button>
                                    <button className="font-mono text-[10px] tracking-wide border border-[var(--line-strong)] text-[var(--text-muted)] px-3 py-1.5 rounded-sm hover:border-[var(--amber)] hover:text-[var(--amber)] transition-colors">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BlogsPage