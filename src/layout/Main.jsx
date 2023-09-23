import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Components/Shared/Footer";
import Navbar from "../Components/Shared/Navbar";

const Main = () => {
  const location = useLocation();
  const noHeaderAndFooter =
    location.pathname.includes("login") || location.pathname.includes("signup");
  return (
    <div>
      {noHeaderAndFooter || <Navbar />}
      <Outlet />
      {noHeaderAndFooter || <Footer />}
    </div>
  );
};

export default Main;
