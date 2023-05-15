import { Toaster } from '@redwoodjs/web/toast'

import Navbar from 'src/components/Navbar/Navbar'

import '@reach/skip-nav/styles.css'

type NavLayoutProps = {
  children?: React.ReactNode
}

const START_MENU_ITEMS = [
  {
    to: '/projects',
    label: 'Projects',
  },
] as const

const END_MENU_ITEMS = [
  {
    to: '/personal',
    label: 'Personal Projects',
    submenu: [
      { to: '/chickens', label: 'Project Chickens' },
      { to: '/cars', label: 'Project Cars' },
    ],
  },
  {
    to: '/about',
    label: 'About',
  },
] as const

const NavLayout = ({ children }: NavLayoutProps) => {
  return (
    <>
      <Toaster />

      <header className="bg-base-300">
        <Navbar startItems={START_MENU_ITEMS} endItems={END_MENU_ITEMS} />
      </header>

      <main>{children}</main>
    </>
  )
}

export default NavLayout
