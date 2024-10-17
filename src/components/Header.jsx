import React from 'react'
import { LuBell, LuPlus, LuSearch } from 'react-icons/lu'

function Header() {
  return (
    <div className='flex items-center justify-between text-lightBlackText p-4'>
        <div className='flex flex-col'>
            <h1 className='text-lg font-medium text-lightBlackText/80'>Good Afternoon, Kevin!</h1>
            <h1 className='text-sm font-medium text-lightBlackText/60'>Oct 17 2024 </h1>
        </div>
        <div className="flex items-center justify-end">
        <button className="text-lightBlackText/50 hover:text-mainColor p-2 h-[35px] aspect-square flex items-center justify-center hover:bg-stone-200/50 rounded-xl">
          <LuSearch className="text-xl" />
        </button>
        <button className="text-lightBlackText/50 hover:text-mainColor p-1 h-[35px] aspect-square flex items-center justify-center hover:bg-stone-200/50 rounded-xl">
          <LuBell className="text-xl" />
        </button>
        <div></div>
        </div>
    </div>
  )
}

export default Header