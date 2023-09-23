import { useContext, useEffect, useState } from "react";
import logInImg from "../../assets/LogIn/login.gif";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const LogIn = () => {
  const { signIn } = useContext(AuthContext);
  const [disabled, setDisabled] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password).then((result) => {
      const logInUser = result.user;
      console.log(logInUser);
      Swal.fire({
        title: "User Login Successful.",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
      navigate(from, { replace: true });
    });
  };
  // captcha:
  const handleValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    console.log(user_captcha_value);
    if (validateCaptcha(user_captcha_value) == true) {
      setDisabled(false);
      console.log(validateCaptcha);
    } else {
      setDisabled(true);
    }
  };
  return (
    <div>
      <Helmet>
        <title>Cozy Comfort | Login</title>
      </Helmet>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left md:w-1/2">
            <img src={logInImg} alt="Log-in gif" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm md:w-1/2">
            <div className="card-body ">
              <h1 className="md:text-3xl font-bold text-center text-purple-700">
                Login Now
              </h1>
              <form onSubmit={handleSubmit}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="text"
                    name="password"
                    id="password"
                    placeholder="password"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <LoadCanvasTemplate />
                  </label>
                  <input
                    onBlur={handleValidateCaptcha}
                    type="text"
                    name="captcha"
                    placeholder="Type the captcha above"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control mt-6">
                  <input
                    disabled={disabled}
                    className="btn btn-outline border-0 border-b-4"
                    type="submit"
                    value="Log In"
                  />
                </div>
                <p className="text-purple-700 text-center mt-2">
                  New Here?
                  <Link to="/signup" className="font-semibold pl-2">
                    Create A New Account
                  </Link>
                </p>
                <p className="text-center mt-6">Or Sign In With</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
