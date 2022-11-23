import { createBrowserRouter } from "react-router-dom";
import SignIn from "../../../SharebleInfo/SigIn/SignIn";
import SignUp from "../../../SharebleInfo/SignUp/SignUp";
import Blog from "../../Pages/Blog/Blog";
import CategoryDetails from "../../Pages/CategoryDetails/CategoryDetails";
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
        element: <CategoryDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:8000/home/category/${params.id}`),
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
]);
