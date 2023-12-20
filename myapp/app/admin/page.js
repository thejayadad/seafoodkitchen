'use client'
import React, { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const Admin = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/');
    } else if (session?.user?.email !== 'thejayadad@gmail.com') {
      // If the user email is not 'thejayadad@gmail.com', show access denied
      router.push('/'); // Redirect them to the home page as well
    }
  }, [status, session, router]);

  if (status === 'loading') {
    // You can show a loading spinner or any other loading indication here
    return <div>Loading...</div>;
  }

  return (
    <div>
      {session && session.user.email === 'thejayadad@gmail.com' && (
        <div>Admin</div>
      )}
    </div>
  );
};

export default Admin;
