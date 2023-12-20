'use client'
import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const Admin = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('categories'); // Default active tab

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/');
    } else if (session?.user?.email !== 'thejayadad@gmail.com') {
      router.push('/');
    }
  }, [status, session, router]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {session && session.user.email === 'thejayadad@gmail.com' && (
        <section className='px-4 py-12'>
          <div className='flex flex-col mx-auto max-w-screen-xl border h-screen border-t-transparent'>
            <div className='flex mx-auto justify-center w-full'>
              <div
                className={`inline-block p-4 text-gray-800 bg-white rounded-t-lg  ${
                  activeTab === 'categories' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700'
                }`}
                onClick={() => handleTabClick('categories')}
              >
                Categories
              </div>
              <div
                className={`inline-block p-4 rounded-t-lg hover:text-gray-600 ${
                  activeTab === 'menuItems' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700'
                }`}
                onClick={() => handleTabClick('menuItems')}
              >
                Menu Items
              </div>
              <div
                className={`inline-block p-4 rounded-t-lg hover:text-gray-600 ${
                  activeTab === 'users' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700'
                }`}
                onClick={() => handleTabClick('users')}
              >
                Users
              </div>
              <div
                className={`inline-block p-4 rounded-t-lg hover:text-gray-600 ${
                  activeTab === 'orders' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700'
                }`}
                onClick={() => handleTabClick('orders')}
              >
                Orders
              </div>
            </div>

            {activeTab === 'categories' && <div>Categories content</div>}
            {activeTab === 'menuItems' && <div>Menu Items content</div>}
            {activeTab === 'users' && <div>Users content</div>}
            {activeTab === 'orders' && <div>Orders content</div>}
          </div>
        </section>
      )}
    </div>
  );
};

export default Admin;
