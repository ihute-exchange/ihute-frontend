import React from 'react'
import Logo from './Logo'
import { Link } from 'react-router-dom'
import { LuHash } from 'react-icons/lu'

function OverviewLinks() {
  return (
    <div className='w-[170px] h-full bg-lightBodySecondBg flex flex-col items-start justify-start p-3'>
        <Logo />
        <div className='w-full flex flex-col items-start justify-start gap-[2px] text-lightBlackText/60 text-sm font-medium mt-4'>
          <h1 className='mb-2 font-semibold opacity-80 flex items-center gap-[2px]'>
            <LuHash />
            Overview</h1>
          <Link to="/" className='py-1 px-2 bg-stone-300/70 w-full rounded-lg font-bold'>Dashboard</Link>
          <Link to="/" className='py-1 px-2 hover:bg-stone-300/70 w-full rounded-lg'>Recent Activities</Link>
          <Link to="/" className='py-1 px-2 hover:bg-stone-300/70 w-full rounded-lg'>Analytics</Link>
          <Link to="/" className='py-1 px-2 hover:bg-stone-300/70 w-full rounded-lg'>User Statistics</Link>
        </div>
    </div>
  )
}

export default OverviewLinks