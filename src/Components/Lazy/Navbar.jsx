import React from 'react'
import { Suspense } from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
      <nav style={{ display: 'flex', gap: "16px" }}>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
      </nav>
      {/*
       Lazy loading with  <Suspense> Component
       մինչև էջի բեռնվելը՝ կցուցադրի fallback ատրիբուտով փոխանցած կոնտենտը 
      */}
      <Suspense fallback={<h2>Loading...</h2>}>
        <Outlet />
      </Suspense>
    </>
  )
}
