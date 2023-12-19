'use client'
import React, { useState } from 'react';
import { useSession } from 'next-auth/react';
import LoadingSpinner from '@/components/LoadingSpinner/LoadingSpinner';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProfilePage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [userName, setUserName] = useState(session?.user?.name || '');
  const [isLoading, setIsLoading] = useState(false); // Added loading state

  if (status === 'loading') {
    return <LoadingSpinner />;
  }

  if (status === 'unauthenticated') {
    router.push('/');
    return null;
  }

  const userImage = session?.user?.image;

  async function handleProfileInfoUpdate(ev) {
    ev.preventDefault();

    try {
      setIsLoading(true); // Set loading state to true

      const response = await fetch('/api/profile', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: userName }),
      });

      if (response.ok) {
        // Handle success, e.g., show a success message using react-toastify
        toast.success('Profile information updated successfully', {
          position: toast.POSITION.TOP_RIGHT,
        });
      } else {
        // Handle error, e.g., show an error message
        console.error('Failed to update profile information');
        toast.error('Failed to update profile information', {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    } catch (error) {
      console.error('Error occurred while updating profile information', error);
      toast.error('Error occurred while updating profile information', {
        position: toast.POSITION.TOP_RIGHT,
      });
    } finally {
      setIsLoading(false); // Set loading state back to false
    }
  }

  return (
    <section className='px-4 py-12'>
    <div className='flex flex-col max-w-screen-xl mx-auto'>
      <form 
      onSubmit={handleProfileInfoUpdate}
      className='max-w-screen-md mx-auto border rounded-lg border-secondary p-12'>
        <div className='flex gap-4'>
          <div className='bg-liteBrown p-6 rounded-lg'>
            <img src={userImage} alt='Profile' height={64} width={64} />
            <button className='mt-2 bg-secondary p-2 rounded-lg border border-liteGray'>
              Change Avatar
            </button>
          </div>
          <div className='grow flex flex-col gap-6'>
            <input
              className='rounded-lg  flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent'
              type='text'
              placeholder='Name...'
              value={userName}
              onChange={ev => setUserName(ev.target.value)}
            />
            <input
              className='rounded-lg border-secondary flex-1 appearance-none border  w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent'
              type='text'
              placeholder='Email'
              value={session?.user?.email}
              disabled
            />
          </div>
        </div>
        <button
            className='bg-liteBrown py-6 px-2 rounded-lg w-full mt-6'
            disabled={isLoading}
            >
            {isLoading ? 'Saving...' : 'Save'}
</button>

      </form>
    </div>
  </section>
  );
};

export default ProfilePage;
