import { Helmet } from "react-helmet-async";
import { MdPayment } from "react-icons/md";
const Payment = () => {
  return (
    <div>
      <Helmet>
        <title>Cozy Comfort  | Payment</title>
      </Helmet>
      <div className="mx-auto text-center uppercase my-8 ">
        <p className="text-yellow-500 my-6">
          -----let&apos;s introduce our payment method-----
        </p>
        <h2 className="md:text-3xl text-2xl mt-2 border-y-4 py-2">Payment</h2>
      </div>

      <form>
        <div className="flex justify-center items-center gap-4">
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="flex justify-center items-center my-6">
          <button
            type="submit"
            className=" bg-gradient-to-r from-sky-500 to-indigo-500 flex justify-center items-center p-3 my-4 rounded-md text-white"
          >
            Payment <MdPayment className="ml-2" size="20px" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Payment;
