import React from 'react'
import Sidebar from '../components/Sidebar'
import OverviewLinks from '../components/OverviewLinks'
import Dashboard from '../components/Dashboard'

function Overview() {
  return (
    <div className='flex w-full h-svh'>
      {/* Sidebar and its links */}
      <div className='w-fit h-full flex'>
        <Sidebar />
        <OverviewLinks />
      </div>
      <div className='w-full h-full bg-lightBodySecondBg'>
        <Dashboard />
      </div>
    </div>
  )
}

export default Overview