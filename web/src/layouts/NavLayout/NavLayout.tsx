// import { Link, useLocation } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

// import Navbar from 'src/components/Navbar/Navbar'

type NavLayoutProps = {
  children?: React.ReactNode
}

// const START_MENU_ITEMS = [
//   {
//     to: '/',
//     label: 'Clay Crews',
//   },
//   {
//     label: 'Projects',
//     submenu: [
//       { to: '/projects/wordification', label: 'Wordification' },
//       { to: '/projects/whats-that-plant', label: `What's That Plant` },
//       { to: '/projects/dkms', label: 'DKMS' },
//     ],
//   },
//   {
//     label: 'Personal Projects',
//     submenu: [{ to: '/personal-projects/henhouse', label: 'Henhouse' }],
//   },
// ] as const

// export type MenuItem = {
//   to?: string
//   label: string
//   submenu?: readonly {
//     to: string
//     label: string
//   }[]
// }

// const NavbarItem = ({ item }: { item: MenuItem }) => {
//   const { pathname } = useLocation()

//   return (
//     <>
//       {item.to ? (
//         <li>
//           <Link
//             className={`font-bold normal-case text-lg rounded ${
//               pathname === item.to ? 'bg-accent' : ''
//             }`}
//             to={item.to}
//           >
//             {item.label}
//           </Link>
//         </li>
//       ) : (
//         <li className="pointer-events-none">
//           <h1 className="font-bold normal-case text-lg rounded">
//             {item.label}
//           </h1>
//         </li>
//       )}

//       {item.submenu && (
//         <li className="ml-4">
//           {item.submenu.map((subItem) => (
//             <Link
//               className={`font-semibold normal-case rounded ${
//                 pathname === subItem.to ? 'bg-accent' : ''
//               }`}
//               to={subItem.to}
//               key={subItem.to}
//             >
//               {subItem.label}
//             </Link>
//           ))}
//         </li>
//       )}

//       <div className="divider"></div>
//     </>
//   )
// }

const NavLayout = ({ children }: NavLayoutProps) => {
  return (
    <>
      <div className="flex min-h-screen flex-col">
        <Toaster />

        {/* <header className="bg-base-300">
          <Navbar />
        </header> */}

        <main className="container mx-auto flex-grow p-4 md:px-8">
          {children}
        </main>
      </div>
    </>

    // <>
    //   <div className="drawer">
    //     <input id="my-drawer" type="checkbox" className="drawer-toggle" />
    //     <div className="drawer-content">
    //       <div className="flex min-h-screen flex-col">
    //         <Toaster />

    //         <header className="bg-base-300">
    //           <Navbar />
    //         </header>

    //         <main className="container mx-auto flex-grow p-4 md:px-8">
    //           {children}
    //         </main>
    //       </div>
    //     </div>
    //     <div className="drawer-side">
    //       {
    //         // eslint-disable-next-line jsx-a11y/label-has-associated-control
    //         <label htmlFor="my-drawer" className="drawer-overlay"></label>
    //       }
    //       <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
    //         {START_MENU_ITEMS.map((item) => (
    //           <NavbarItem item={item} key={item.label} />
    //         ))}
    //       </ul>
    //     </div>
    //   </div>
    // </>
  )
}

export default NavLayout
