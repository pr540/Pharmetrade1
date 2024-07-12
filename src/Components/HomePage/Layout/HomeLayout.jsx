import React from 'react'
import Nav from './Nav'
import { Outlet } from 'react-router-dom'
import Footers from '../../Footers'

const HomeLayout = ({topDivRef,cartItems}) => {
  return (
    <div className='w-screen overflow-scroll '>
        <Nav topDivRef={topDivRef} cartItems={cartItems} />
        <div className='w-full'>
            <Outlet/>
        </div>
        <Footers />

    </div>
  )
}

export default HomeLayout