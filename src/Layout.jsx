import React from 'react'
import { Footer } from './components/Footer'
import { Outlet } from 'react-router-dom'
import { TopBar } from './components/TopBar'

export function Layout() {

  return (
    <>
    <Outlet />
    <Footer />
    </>
  )
}
