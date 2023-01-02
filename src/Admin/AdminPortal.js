import React from 'react'
import { Outlet } from 'react-router-dom'
import Topbar from '../Topbar'
import AdminNav from './AdminNav'

function AdminPortal() {
  return (
    <div className="container-fluid">
    <Topbar />
    <AdminNav/>
    <div className="container-fluid text-center m-2">
        <div className="row justify-content-center">
            <Outlet/>
        </div>
        </div>
    </div>
  )
}

export default AdminPortal