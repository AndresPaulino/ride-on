import React from 'react'
import { useStateContext } from '../../context/StateContext'

function DashboardMain() {
  const { user } = useStateContext();

  return (
    <main className='bg-white w-full h-screen'>
      {/* Dashboard Container */}
      <div className='px-14 py-16'>
        <div>
          <h1 className='text-xl font-bold text-gray-800'>Hi, {user.user_name}</h1>
        </div>
              <h1>Dashboard</h1>
          </div>
    </main>
  )
}

export default DashboardMain