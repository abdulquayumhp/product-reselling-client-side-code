import React, { useContext } from "react";
import {
  FaDatabase,
  FaEgg,
  FaRegHourglass,
  FaRegTrashAlt,
  FaShopify,
  FaShoppingBag,
  FaUserAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { UserContext } from "../../../../AuthContext/AuthContext";
import useAdmin from "../../../../CustomHook/UserEmail/UserEmail";

const DashboardMenu = () => {
  const { user } = useContext(UserContext);
  const [email] = useAdmin(user?.email);
  // console.log(email.role);
  return (
    <div class="flex flex-col  h-full py-8  border-r dark:bg-gray-900 dark:border-gray-700">
      <Link to="/">
        <div className="">
          <img
            className=" md:h-16  object-cover"
            src="https://assets.vakilsearch.com/live-gif/zolvitWhiteTransparent.gif"
            alt="/"
          />
        </div>
      </Link>

      <div class="flex flex-col items-center mt-6 -mx-2">
        <img
          class="object-cover w-24 h-24 mx-2 rounded-full"
          src={user?.photoURL}
          alt="avatar"
        />
        <h4 class="mx-2 mt-2 font-medium text-gray-800 dark:text-gray-200 hover:underline">
          {user?.displayName}
        </h4>
        <p class="mx-2 mt-1 text-sm font-medium text-gray-600 dark:text-gray-400 hover:underline">
          {user?.email}
        </p>
      </div>

      <div class="flex flex-col justify-between flex-1 mt-6">
        {email?.role === "admin" ? (
          <nav>
            <>
              <Link
                to="/dashboard"
                class="flex items-center px-4 py-2 text-gray-700 bg-gray-100 dark:bg-gray-800 dark:text-gray-200"
              >
                <FaDatabase />

                <span class="mx-4 font-medium">Dashboard</span>
              </Link>

              <Link
                to="/dashboard/Admin"
                class="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform dark:text-gray-400 hover:bg-white dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700"
              >
                <FaUserAlt />

                <span class="mx-4 font-medium">All User</span>
              </Link>
              <Link
                to="/dashboard/dashboardMyBooking"
                class="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform dark:text-gray-400 hover:bg-white dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700"
              >
                <FaRegHourglass />
                <span class="mx-4 font-medium">My Bookings</span>
              </Link>
              <Link
                to="/dashboard/dashboardAllReport"
                class="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform dark:text-gray-400 hover:bg-white dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700"
              >
                <FaRegTrashAlt />

                <span class="mx-4 font-medium">All Report</span>
              </Link>
              <Link
                to="/dashboard/dashboardAllBuyer"
                class="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform dark:text-gray-400 hover:bg-white dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700"
              >
                <FaShopify />

                <span class="mx-4 font-medium">All Buyer</span>
              </Link>
              <Link
                to="/dashboard/dashboardAllSeller"
                class="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform dark:text-gray-400 hover:bg-white dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700"
              >
                <FaShoppingBag />

                <span class="mx-4 font-medium">All Seller</span>
              </Link>
            </>
          </nav>
        ) : (
          ""
        )}
        {email?.role === "seller" ? (
          <nav>
            <>
              <Link
                to="/dashboard"
                class="flex items-center px-4 py-2 text-gray-700 bg-gray-100 dark:bg-gray-800 dark:text-gray-200"
              >
                <FaDatabase />

                <span class="mx-4 font-medium">Dashboard</span>
              </Link>

              <Link
                to="/dashboard/dashboardMyBooking"
                class="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform dark:text-gray-400 hover:bg-white dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700"
              >
                <FaRegHourglass />
                <span class="mx-4 font-medium">My Bookings</span>
              </Link>
              <Link
                to="/dashboard/addProduct"
                class="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform dark:text-gray-400 hover:bg-white dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700"
              >
                <FaEgg />
                <span class="mx-4 font-medium">Add Product</span>
              </Link>
            </>
          </nav>
        ) : (
          <>
            <Link
              to="/dashboard"
              class="flex items-center px-4 py-2 text-gray-700 bg-gray-100 dark:bg-gray-800 dark:text-gray-200"
            >
              <FaDatabase />

              <span class="mx-4 font-medium">Dashboard</span>
            </Link>
            <Link
              to="/dashboard/dashboardMyBooking"
              class="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform dark:text-gray-400 hover:bg-white dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700"
            >
              <FaRegHourglass />
              <span class="mx-4 font-medium">My Bookings</span>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default DashboardMenu;

{
  /* <Link
            to="/dashboard/dashboardAllReport"
            class="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform dark:text-gray-400 hover:bg-white dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700"
          >
            <FaRegTrashAlt />

            <span class="mx-4 font-medium">All Report</span>
          </Link> */
}
