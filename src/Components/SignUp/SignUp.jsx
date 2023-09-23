import { Link } from "react-router-dom";
import SignUpImg from "../../assets/LogIn/signUp.gif";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthProvider";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password).then((result) => {
      const signUpUser = result.user;
      console.log(signUpUser);
    });
  };
  console.log(watch("example"));
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
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    {...register("name", { required: true })}
                    placeholder="Name"
                    className="input input-bordered"
                  />
                  {errors.name && (
                    <span className="text-red-500">Name is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    {...register("email", { required: true })}
                    placeholder="Email"
                    className="input input-bordered"
                  />
                  {errors.email && (
                    <span className="text-red-500">Email is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="text"
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      maxLength: 20,
                      pattern: /(?=.*[!@#$&*])(?=.*[0-9])/,
                    })}
                    placeholder="Password"
                    className="input input-bordered"
                  />
                  {errors.password?.type === "pattern" && (
                    <p className="text-red-600">
                      Password must have one number and one special character.
                    </p>
                  )}
                  {errors.password?.type === "required" && (
                    <span className="text-red-500">Password is Required</span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span className="text-red-500">
                      Password Must Be 6 Character
                    </span>
                  )}
                  {errors.password?.type === "maxLength" && (
                    <span className="text-red-500">
                      Password must be less then 20 Character
                    </span>
                  )}
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
