import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Components/Home/Home";
import OurMenu from "../Components/OurMenu/OurMenu";
import Shop from "../Components/Shop/Shop";
import LogIn from "../Components/LogIn/LogIn";
import SignUp from "../Components/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Secret from "../Components/Shared/Secret";
import NotFound from "../Components/NotFound/NotFound";
import Dashboard from "../layout/Dashboard";
import MyCart from "../Pages/Dashboard/MyCart/MyCart";
import AddReview from "../Pages/Dashboard/AddReview/AddReview";
import Payment from "../Pages/Dashboard/PaymentHistory/Payment";
import Reservation from "../Pages/Dashboard/Reservation/Reservation";
import MyBooking from "../Pages/Dashboard/MyBooking/MyBooking";
import UserHome from "../Pages/Dashboard/UserHome/UserHome";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "menu",
        element: <OurMenu></OurMenu>,
      },
      {
        path: "shop/:category",
        element: <Shop></Shop>,
      },
      {
        path: "login",
        element: <LogIn></LogIn>,
      },
      {
        path: "signup",
        element: <SignUp />,
      },

      {
        path: "secret",
        element: (
          <PrivateRoute>
            <Secret />
          </PrivateRoute>
        ),
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },

  {
    path: "dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "userhome",
        element: <UserHome />,
      },
      {
        path: "mycart",
        element: <MyCart />,
      },
      {
        path: "addreview",
        element: <AddReview />,
      },
      {
        path: "payment",
        element: <Payment />,
      },
      {
        path: "reservation",
        element: <Reservation />,
      },
      {
        path: "mybooking",
        element: <MyBooking />,
      },
    ],
  },
]);
