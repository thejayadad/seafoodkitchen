'use client'
import React from 'react';
import Link from 'next/link';
import { FiUser } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { signIn, signOut, useSession } from 'next-auth/react';

const AuthLinks = () => {
    const { data: session } = useSession();

  return (
    <div className='flex items-center gap-4'>
        {
            session ? (
                <div className='flex items-center gap-6'>
                    <Link href={`/profile`}>{session.user.email}</Link>
            <span onClick={signOut}>LogOut</span>

                </div>
            ) : (
                <div>
            <button onClick={signIn}>LogIn</button>

                </div>
            )
        }
    </div>
  )
}

export default AuthLinks