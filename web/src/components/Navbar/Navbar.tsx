import { Link, routes } from '@redwoodjs/router'

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-start">
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
        className="btn btn-ghost rounded text-xl normal-case mr-10"
        to={routes.home()}
      >
        Clay Crews
      </Link>
    </div>
    <div className="navbar-end">
      <Link
        className="btn btn-ghost rounded text-xl normal-case"
        to={routes.about()}
      >
        About
      </Link>
    </div>
  </nav>

  // <div className="drawer">
  //   <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  //   <div className="drawer-content">
  //     <div className="navbar bg-base-100">
  //       <div className="flex-none">
  //         <label
  //           htmlFor="my-drawer"
  //           className="btn btn-square btn-ghost drawer-button"
  //         >
  //           <svg
  //             xmlns="http://www.w3.org/2000/svg"
  //             fill="none"
  //             viewBox="0 0 24 24"
  //             className="inline-block w-5 h-5 stroke-current"
  //           >
  //             <path
  //               strokeLinecap="round"
  //               strokeLinejoin="round"
  //               strokeWidth="2"
  //               d="M4 6h16M4 12h16M4 18h16"
  //             ></path>
  //           </svg>
  //         </label>
  //       </div>
  //       <div className="flex-1">
  //         <Link
  //           className="btn btn-ghost rounded text-xl normal-case"
  //           to={routes.home()}
  //         >
  //           Clay Crews
  //         </Link>
  //       </div>
  //       <div className="flex-none">
  //         <div className="navbar-end">
  //           <ul className="menu menu-horizontal">
  //             {endItems.map((item) => (
  //               <NavbarItem item={item} key={item.to} />
  //             ))}
  //           </ul>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  //   <div className="drawer-side">
  //     {
  //       // eslint-disable-next-line jsx-a11y/label-has-associated-control
  //       <label htmlFor="my-drawer" className="drawer-overlay"></label>
  //     }
  //     <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
  //       {startItems.map((item) => (
  //         <NavbarItem item={item} key={item.to} />
  //       ))}
  //     </ul>
  //   </div>
  // </div>
)

export default Navbar
