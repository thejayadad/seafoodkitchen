'use client'
import Nav from '@/components/admin/Nav/Nav'
import React from 'react'

const layout = ({children}) => {
  return (
    <div>
        <Nav />
        {children}
    </div>
  )
}

export default layout