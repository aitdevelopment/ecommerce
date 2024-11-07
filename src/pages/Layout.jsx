import React from 'react'
import Header from '../category/Header'
import { Outlet } from 'react-router-dom'
import Aside from './Aside'
import Footer from '../category/Footer'

export const Layout = () => {
  return (
    <div>
        <Header/>
        <div>
            <Outlet/>
            <Aside/>
        </div>
    <Footer/>


    </div>
  )
}
