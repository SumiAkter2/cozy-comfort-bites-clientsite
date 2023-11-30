import { Helmet } from "react-helmet-async";
import { IoRocket } from "react-icons/io5";

const AddReview = () => {
  return (
    <div className="w-full">
      <Helmet>
        <title>Cozy Comfort | Add Review</title>
      </Helmet>

      <div className="mx-auto text-center uppercase my-8  w-1/2">
        <p className="text-yellow-500 ">-----Sharing is Caring-----</p>
        <h2 className="md:text-3xl text-2xl mt-2 border-y-4 py-2">
          Give A Review?
        </h2>
      </div>

      <h1 className="lg:text-5xl text-2xl text-center font-bold">Rate Us</h1>

      <form className="my-6 w-1/2 mx-auto">
        <div className="form-control ">
          <label className="label">
            <span className="label-text text-xl">
              Which recipe you liked most?
            </span>
          </label>
          <input
            type="text "
            placeholder="Type here"
            className="input input-bordered  "
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text text-xl">
              Do you have any suggestion for us?
            </span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full "
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text text-xl">
              kindly express your care in a short way.
            </span>
          </label>
          <textarea
            type="text"
            placeholder="Type here"
            className="textarea textarea-bordered w-full "
          />
        </div>

        <button
          type="submit"
          className=" bg-gradient-to-r from-sky-500 to-indigo-500 flex justify-center items-center p-3 my-4 rounded-md text-white"
        >
          Send Review <IoRocket className="ml-2" size="20px" />
        </button>
      </form>
    </div>
  );
};

export default AddReview;
