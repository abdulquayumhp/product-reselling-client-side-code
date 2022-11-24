import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { UserContext } from "../../AuthContext/AuthContext";

const Navbar = () => {
  const { user, userSignOut } = useContext(UserContext);
  // console.log(user?.photoURL);

  // handle signout

  const handleSignOut = () => {
    userSignOut()
      .then((update) => {
        console.log(update);
      })
      .catch((err) => console.log(err));
  };

  // menu
  const navbarLi = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/service">Service</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
    </>
  );

  return (
    <>
      <div className="navbar bg-blue-200  text-slate-200 ">
        <div className="navbar-start ">
          {/* mobile  */}
          <div className="dropdown">
            <label
              tabIndex={0}
              className="text-black swap swap-rotate lg:hidden pl-10"
            >
              <FaBars />
            </label>

            <div className="mx-auto">
              <ul
                tabIndex={0}
                className="bg-blue-200 text-slate-200 menu menu-compact dropdown-content  p-3 shadow w-screen"
              >
                {navbarLi}
              </ul>
            </div>
            <ul
              tabIndex={0}
              className="bg-blue-200 text-black menu menu-compact dropdown-content -mx-5 p-3 shadow w-screen font-medium text-center"
            >
              <div className="mx-auto text-center">{navbarLi}</div>
              {/* sign in and up menu in mobile  */}
              <div className="md:hidden mx-auto text-center">
                {user?.uid ? (
                  <>
                    <li>
                      <button className="ml-3" onClick={handleSignOut}>
                        SignOut
                      </button>
                    </li>
                    <li>
                      <Link to="/Dashboard">Dashboard</Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <Link to="/signIn">SignIn</Link>
                    </li>
                    <li>
                      <Link to="/signUp">signUp</Link>
                    </li>
                  </>
                )}
              </div>
            </ul>
          </div>
          {/* logo  */}
          <Link to="/">
            <div className=" md:pl-20">
              <img
                className=" md:h-16  object-cover"
                src="https://assets.vakilsearch.com/live-gif/zolvitWhiteTransparent.gif"
                alt="/"
              />
            </div>
          </Link>
        </div>
        {/* main pc dekstop nabmenu  */}
        <div className="navbar-center bg-blue-200 hidden  lg:flex">
          <ul className="bg-blue-200 font-medium text-black text menu menu-horizontal p-0 text-center">
            {navbarLi}
          </ul>
        </div>
        {/* sign up and image  */}
        <div className="navbar-end md:pr-20">
          <ul className="font-medium bg-blue-200 text-black text menu  p-0 text-center  ">
            {user?.uid ? (
              <div className="md:flex hidden">
                <li>
                  <button onClick={handleSignOut}>SignOut</button>
                </li>
                <li>
                  <Link to="/Dashboard">Dashboard</Link>
                </li>
              </div>
            ) : (
              <div className="md:flex hidden ">
                <li>
                  <Link to="/signIn">SignIn</Link>
                </li>
                <li>
                  <Link to="/signUp">signUp</Link>
                </li>
              </div>
            )}
          </ul>

          <label tabIndex={0} className="btn btn-ghost btn-circle avatar mr-6">
            {user?.uid ? (
              <div className="w-7 md:w-10  rounded-full">
                <img src={user?.photoURL} />
              </div>
            ) : (
              <div className="w-10 rounded-full">
                <img src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" />
              </div>
            )}
          </label>
          <label
            htmlFor="my-drawer-2"
            className=" drawer-button lg:hidden cursor-pointer text-black pr-4"
          >
            <FaBars />
          </label>
        </div>
      </div>
    </>
  );
};

export default Navbar;
