import { IoIosListBox } from "react-icons/io";
const Reservation = () => {
  return (
    <div>
      <div className="mx-auto text-center uppercase my-8  w-1/2">
        <p className="text-yellow-500 ">-----Reservation-----</p>
        <h2 className="md:text-3xl text-2xl mt-2 border-y-4 py-2">
          Book A Table?
        </h2>
      </div>
      {/* booking form */}

      <form>
        <div className="grid grid-cols-3 gap-3 mt-12">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-bold">Date*</span>
            </label>
            <input
              type="date"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-bold">Time*</span>
            </label>
            <input
              type="time"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-bold">Guest*</span>
            </label>
            <select className="select select-bordered">
              <option disabled selected>
                1 person
              </option>
              <option>2 persons</option>
              <option>3 persons</option>
              <option>4 persons</option>
              <option>5 persons</option>
              <option>6 persons</option>
            </select>
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-bold">Name*</span>
            </label>
            <input
              type="text"
              placeholder="Type Name"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-bold">Phone*</span>
            </label>
            <input
              type="text"
              placeholder="Type Phone"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-bold">Email*</span>
            </label>
            <input
              type="text"
              placeholder="Type Email"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
        </div>

        <div className="flex justify-center items-center my-6">
          <button
            type="submit"
            className=" bg-gradient-to-r from-sky-500 to-indigo-500 flex justify-center items-center p-3 my-4 rounded-md text-white"
          >
            Book A Table <IoIosListBox className="ml-2" size="20px" />
          </button>
        </div>
      </form>

      <div className="mx-auto text-center uppercase my-8  w-1/2">
        <p className="text-yellow-500 ">-----Visit Us-----</p>
        <h2 className="md:text-3xl text-2xl mt-2 border-y-4 py-2">
          Book A Table?
        </h2>
      </div>
    </div>
  );
};

export default Reservation;
