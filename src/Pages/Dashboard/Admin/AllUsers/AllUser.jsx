import { Helmet } from "react-helmet-async";
import useUser from "../../../../Components/Hook/useUser";
import { MdDeleteForever } from "react-icons/md";
import { MdAdminPanelSettings } from "react-icons/md";

const AllUser = () => {
  const [user] = useUser();
  return (
    <div className="lg:w-2/3 mx-6">
      <Helmet>
        <title>Cozy Comfort | All users</title>
      </Helmet>

      <div className="mx-auto text-center uppercase my-8 w-1/2">
        <p className="text-yellow-500 ">-----How Many-----</p>
        <h2 className="md:text-3xl text-2xl mt-2 border-y-4 py-2">
          Manage All Users?
        </h2>
      </div>
      <div className="overflow-x-auto mt-4 mb-12 ">
        <table className="table">
          <thead className="text-xl text-black bg-orange-300">
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {user.map((usr, index) => (
              <tr className="font-bold hover" key={usr._id}>
                <th>{index + 1}</th>

                <td>{usr.name}</td>
                <td>${usr.email}</td>
                <td>
                  <button className="btn btn-ghost">
                    <MdAdminPanelSettings size="30px" color="#FDBA7A" />
                  </button>
                </td>
                <td>
                  <button className="btn btn-ghost">
                    <MdDeleteForever size="30px" color="red" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUser;
