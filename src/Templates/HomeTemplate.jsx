import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Components/HeaderHome/Header'

export default function HomeTemplate(props) {
  
    return (
    <div>
        <Header />
        <Outlet />
    </div>
  )
}
