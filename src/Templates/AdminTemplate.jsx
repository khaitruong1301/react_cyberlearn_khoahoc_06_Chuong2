import React from 'react'
import { Navigate, NavLink, Outlet } from 'react-router-dom'

export default function AdminTemplate(props) {

    // if(!localStorage.getItem('userLogin')) {
    //     return <Navigate to={'/'} replace={false} />
    // }



  return (
    <div className='pt-5 bg-dark'>
        <div className='d-flex'>
            <div className='w-25 bg-dark text-white' style={{minHeight:'100vh'}}>
                <nav>
                    <ul>
                        <li>
                            <NavLink to='products'>
                                Product management
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='users'>
                                User management
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className='w-75 bg-light'>
                <Outlet />
            </div>
        </div>


    </div>
  )
}
