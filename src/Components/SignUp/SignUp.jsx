import { Link } from "react-router-dom";
import SignUpImg from "../../assets/LogIn/signUp.gif";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password);
    console.log(name, email, password);
  };

  return (
    <div>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left md:w-1/2">
            <img src={SignUpImg} alt="Sign Up -gif" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm l ">
            <div className="card-body">
              <h1 className="md:text-3xl font-bold text-center ">Sign Up</h1>
              <form onSubmit={handleSubmit}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Email"
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
                    placeholder="Password"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control mt-6">
                  <input
                    className="btn btn-outline  border-0 border-b-4"
                    type="submit"
                    value="Sign Up"
                  />
                </div>
                <p className="text-blue-500 text-center mt-2">
                  Already Registered?
                  <Link to="/login" className="font-semibold pl-2">
                    Go to LogIN
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

export default SignUp;
