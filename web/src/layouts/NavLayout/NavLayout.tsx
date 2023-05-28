import { routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

import Navbar from 'src/components/Navbar/Navbar'

type NavLayoutProps = {
  children?: React.ReactNode
}

const START_MENU_ITEMS = [
  {
    to: '/projects',
    label: 'Projects',
    submenu: [
      { to: routes.wordification(), label: 'Wordification' },
      { to: routes.whatsThatPlant(), label: `What's That Plant` },
      { to: routes.dkms(), label: 'DKMS' },
    ],
  },
] as const

const END_MENU_ITEMS = [
  {
    to: '/personal-projects',
    label: 'Personal Projects',
    submenu: [{ to: '/personal-projects/henhouse', label: 'Henhouse' }],
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
