import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "../../../CustomHook/PrivateRoute/ProtectedRoute";
import SignIn from "../../../SharebleInfo/SigIn/SignIn";
import SignUp from "../../../SharebleInfo/SignUp/SignUp";
import Blog from "../../Pages/Blog/Blog";
import Bookings from "../../Pages/Bookings/Bookings";
import CategoryDetails from "../../Pages/CategoryDetails/CategoryDetails";
import Dasboard from "../../Pages/Dashboard/Dasboard";
import DashBoardAddProduct from "../../Pages/Dashboard/DashBoardAdmin/DashBoardAddProduct";
import DashBoardAdmin from "../../Pages/Dashboard/DashBoardAdmin/DashBoardAdmin";
import DashboardAllBuyer from "../../Pages/Dashboard/DashBoardAdmin/DashboardAllBuyer";
import DashBoardAllReport from "../../Pages/Dashboard/DashBoardAdmin/DashBoardAllReport";
import DashboardAllSeller from "../../Pages/Dashboard/DashBoardAdmin/DashboardAllSeller";
import DashBoardMyBooking from "../../Pages/Dashboard/DashBoardAdmin/DashBoardMyBooking";
import DashBoardSellerMyProduct from "../../Pages/Dashboard/DashBoardAdmin/DashBoardSellerMyProduct";
import DashboardForAll from "../../Pages/Dashboard/DashboardForAll/DashboardForAll";
import HomeAll from "../../Pages/Home/Home/HomeAll";
import Service from "../../Pages/Service/Service";
import Main from "../Main/Main";
import Sign from "../Sign/Sign";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <HomeAll />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/service",
        element: <Service />,
      },
      {
        path: "/home/category/:id",
        element: (
          <ProtectedRoute>
            <CategoryDetails />
          </ProtectedRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:8000/home/category/${params.id}`),
      },
      {
        path: "/booking/:id",
        element: <Bookings />,
        loader: ({ params }) => fetch(``),
      },
    ],
  },
  {
    path: "/",
    element: <Sign />,
    children: [
      {
        path: "/signIn",
        element: <SignIn />,
      },

      {
        path: "/signUp",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dasboard />,
    children: [
      {
        path: "/dashboard/Admin",
        element: <DashBoardAdmin />,
      },
      {
        path: "/dashboard",
        element: <DashboardForAll />,
      },
      {
        path: "/dashboard/dashboardAllReport",
        element: <DashBoardAllReport />,
      },
      {
        path: "/dashboard/dashboardMyBooking",
        element: <DashBoardMyBooking />,
      },
      {
        path: "/dashboard/dashboardAllBuyer",
        element: <DashboardAllBuyer />,
      },
      {
        path: "/dashboard/dashboardAllSeller",
        element: <DashboardAllSeller />,
      },
      {
        path: "/dashboard/addProduct",
        element: <DashBoardAddProduct />,
      },
      {
        path: "/dashboard/myProduct",
        element: <DashBoardSellerMyProduct />,
      },
    ],
  },
]);
