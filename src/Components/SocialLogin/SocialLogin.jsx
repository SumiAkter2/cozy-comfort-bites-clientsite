import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      const user = result.user;

      const savedUser = { name: user.displayName, email: user.email };
      fetch(`http://localhost:5000/user`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(savedUser),
      })
        .then((res) => res.json())
        .then(() => {
            navigate(from, { replace: true });
          
        });
    });
  };
  return (
    <div>
      <button
        onClick={handleGoogleSignIn}
        className="p-2 btn btn-circle btn-outline"
      >
        <FaGoogle size="25px" />
      </button>
    </div>
  );
};

export default SocialLogin;
