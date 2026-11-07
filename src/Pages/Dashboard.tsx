import { useEffect, useState } from 'react'
import { _dashboardData } from '../data-services/dashboard';

type StatItem = {
    _id: string;
    totalBlogs: number;
    totalProjects: number;
    totalServices: number;
    label: string;
    value: string;
}

const Dashboard = () => {
    const [data, setData] = useState<StatItem[] | null>(null);
    console.log(data);

    const fetchDashboardData = async () => {
        try {
            const response = await _dashboardData();
            setData(response.data[0]);
        } catch (error) {
            console.error('Error fetching dashboard data:', error);
        }
    }
    useEffect(() => {
        fetchDashboardData();
    }, [])
    return (
        <div>

                {/* header */}
                <div className="mb-10 mt-10 md:mt-0">
                    <div className="sheet-num mb-1">DASHBOARD</div>
                    <h1 className="font-display text-3xl font-semibold">Overview <span className="text-[var(--cyan)]">Panel</span></h1>
                </div>

                {/* stat cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                    {data?.[0] &&
                        Object.entries({
                            totalBlogs: data[0].totalBlogs,
                            totalProjects: data[0].totalProjects,
                            totalServices: data[0].totalServices,
                        }).map(([key, value]) => (
                            <div
                                key={key}
                                className="border border-[var(--line-strong)] bg-[var(--bg-panel)] p-5 rounded-sm"
                            >
                                <div className="font-mono text-[10px] tracking-widest uppercase text-[var(--text-dim)] mb-2">
                                    {key.replace("total", "Total ")}
                                </div>
                                <div className="font-display text-4xl font-bold text-[var(--cyan)]">
                                    {value}
                                </div>
                            </div>
                        ))}
                </div>
        </div>
    )
}

export default Dashboard