'use client'
import React from 'react'
import AuthLinks from './AuthLinks'
import Logo from '@/components/Logo/Logo'

const Navbar = () => {
  return (
    <header className='px-4 py-12'>
        <nav className='flex justify-between items-center mx-auto max-w-screen-xl'>
            <Logo />
            <AuthLinks />
        </nav>
    </header>
  )
}

export default Navbar