import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "../../../CustomHook/PrivateRoute/ProtectedRoute";
import ErrorPage from "../../../SharebleInfo/ErrorPage/ErrorPage";
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
import BdOnlinePayment from "../../Pages/Payment/BdOnlinePayment";
import Payment from "../../Pages/Payment/Payment";
import PaymentFail from "../../Pages/Payment/PaymentFail";
import Service from "../../Pages/Service/Service";
import Main from "../Main/Main";
import Sign from "../Sign/Sign";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
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
          fetch(
            `https://assaignment-tharteen.vercel.app/home/category/${params.id}`
          ),
      },
      {
        path: "/booking/:id",
        element: (
          <ProtectedRoute>
            <Bookings />
          </ProtectedRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://assaignment-tharteen.vercel.app/home/category/${params.id}`
          ),
      },
    ],
  },
  {
    path: "/",
    element: <Sign />,
    errorElement: <ErrorPage />,

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
    errorElement: <ErrorPage />,
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
      {
        path: "/dashboard/payment/success",
        element: <BdOnlinePayment />,
      },
      {
        path: "/dashboard/payment/fail",
        element: <PaymentFail />,
      },
      {
        path: "/dashboard/payment/:id",
        element: <Payment />,
        loader: ({ params }) =>
          fetch(
            `https://assaignment-tharteen.vercel.app/bookings/${params.id}`
          ),
      },
    ],
  },
]);
