import { Link, routes } from '@redwoodjs/router'

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-start gap-2">
      <div className="flex-none">
        <label
          htmlFor="my-drawer"
          className="btn btn-square btn-ghost drawer-button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-5 h-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
      </div>
      <Link
        className="btn btn-ghost rounded text-xl normal-case mr-10 bg-accent"
        to={routes.home()}
      >
        Clay Crews
      </Link>
    </div>
    <div className="navbar-end">
      <Link
        className="btn btn-ghost rounded text-lg normal-case"
        to={routes.about()}
      >
        About
      </Link>
    </div>
  </nav>
)

export default Navbar
