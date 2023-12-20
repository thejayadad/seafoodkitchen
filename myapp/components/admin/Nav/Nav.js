'use client';
import Link from "next/link";
import {usePathname} from "next/navigation";

const Nav = () => {
    const path = usePathname();

  return (
    <div className="flex mx-auto justify-around max-w-screen-xl">
           <>
          <Link
            href={'/admin/categories'}
            className={path === '/admin/categories' ? 'active' : ''}
          >
            Categories
          </Link>
          <Link
            href={'/admin/menuItems'}
            className={path.includes('/admin/menuItems') ? 'active' : ''}
          >
            Menu Items
          </Link>
          <Link
            className={path.includes('/admin/users') ? 'active' : ''}
            href={'/admin/users'}
          >
            Users
          </Link>
        </>
   
      <Link
        className={path === '/admin/orders' ? 'active' : ''}
        href={'/admin/orders'}
      >
        Orders
      </Link>
    </div>
  )
}

export default Nav