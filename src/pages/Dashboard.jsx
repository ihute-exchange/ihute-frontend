import React from 'react'
import Sidebar from '../components/Sidebar'
import DashboardContent from '../components/DashboardContent'

function Dashboard() {
  return (
    <div className='flex w-full h-svh bg-white gap-3'>
        <Sidebar />
        <DashboardContent />
    </div>
  )
}

export default Dashboard