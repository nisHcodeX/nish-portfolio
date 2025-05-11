import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/Header'
import SideBar from '../../components/SideBar'

const RootLayout = () => {
  return (
    <div className='flex flex-row'>
      <SideBar />
      <div className='flex-grow'>
        <Header />
        <Outlet />
      </div>
    </div>
  )
}

export default RootLayout