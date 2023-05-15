import { Link, routes } from '@redwoodjs/router'

export type MenuItem = {
  to: string
  label: string
  submenu?: readonly {
    to: string
    label: string
  }[]
}

const NavbarItem = ({ item }: { item: MenuItem }) => (
  <li>
    <Link className="font-bold normal-case rounded" to={item.to}>
      {item.label}
    </Link>
    {item.submenu && (
      <ul className="p-2 bg-base-300">
        {item.submenu.map((subItem) => (
          <NavbarItem item={subItem} key={subItem.to} />
        ))}
      </ul>
    )}
  </li>
)

const Navbar = ({
  startItems,
  endItems,
}: {
  startItems: readonly MenuItem[]
  endItems: readonly MenuItem[]
}) => (
  <nav className="navbar">
    <div className="navbar-start">
      <Link
        className="btn btn-ghost rounded text-xl normal-case text-primary mr-10"
        to={routes.home()}
      >
        Clay Crews
      </Link>

      <ul className="menu menu-horizontal">
        {startItems.map((item) => (
          <NavbarItem item={item} key={item.to} />
        ))}
      </ul>
    </div>
    <div className="navbar-end">
      <ul className="menu menu-horizontal mr-5">
        {endItems.map((item) => (
          <NavbarItem item={item} key={item.to} />
        ))}
      </ul>
    </div>
  </nav>
)

export default Navbar
