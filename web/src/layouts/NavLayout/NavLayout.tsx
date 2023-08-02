import { Link } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

import Navbar from 'src/components/Navbar/Navbar'

type NavLayoutProps = {
  children?: React.ReactNode
}

const START_MENU_ITEMS = [
  {
    to: '/',
    label: 'Clay Crews',
  },
  {
    to: '/projects',
    label: 'Projects',
    submenu: [
      { to: '/projects/wordification', label: 'Wordification' },
      { to: '/projects/whats-that-plant', label: `What's That Plant` },
      { to: '/projects/dkms', label: 'DKMS' },
    ],
  },
  {
    to: '/personal-projects',
    label: 'Personal Projects',
    submenu: [{ to: '/personal-projects/henhouse', label: 'Henhouse' }],
  },
] as const

export type MenuItem = {
  to: string
  label: string
  submenu?: readonly {
    to: string
    label: string
  }[]
}

const NavbarItem = ({ item }: { item: MenuItem }) => (
  <>
    <li>
      <Link className="font-bold normal-case rounded" to={item.to}>
        {item.label}
      </Link>
    </li>
    {item.submenu && (
      <li className="ml-4">
        {item.submenu.map((subItem) => (
          <Link
            className="font-semibold normal-case rounded"
            to={subItem.to}
            key={subItem.to}
          >
            {subItem.label}
          </Link>
        ))}
      </li>
    )}
    <div className="divider"></div>
  </>
)

const NavLayout = ({ children }: NavLayoutProps) => {
  return (
    <>
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <div className="flex min-h-screen flex-col">
            <Toaster />

            <header className="bg-base-300">
              <Navbar />
            </header>

            <main className="container mx-auto flex-grow p-4 md:px-8">
              {children}
            </main>
          </div>
        </div>
        <div className="drawer-side">
          {
            // eslint-disable-next-line jsx-a11y/label-has-associated-control
            <label htmlFor="my-drawer" className="drawer-overlay"></label>
          }
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
            {START_MENU_ITEMS.map((item) => (
              <NavbarItem item={item} key={item.to} />
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default NavLayout
