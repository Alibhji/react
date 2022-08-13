import React from 'react';
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          {/* <li>
            <Link to="/">Home</Link>
          </li> */}
          <li>
            <Link to="/">Create user</Link>
          </li>
          <li>
            <Link to="/all-users">AllUsers</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;