import { Outlet } from 'react-router-dom'
import Sidebar from '../components/ui/Sidebar'

const AdminLayout = () => {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <main className="flex-1 md:ml-56 p-6 md:p-10">
        <Outlet />
      </main>
    </div>
  )
}

export default AdminLayout
