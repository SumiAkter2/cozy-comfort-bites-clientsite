import { Link } from "react-router-dom";
import NotFoundImg from "../../assets/404.gif";
import PrimaryButton from "../Shared/PrimaryButton/PrimaryButton";

const NotFound = () => {
  return (
    <div className="py-12 ">
      <Link to="/">
        <PrimaryButton buttonText="Go Home" />
      </Link>
      <div className="flex justify-center items-center">
        <img src={NotFoundImg} alt="404-gif" />
      </div>
    </div>
  );
};

export default NotFound;
