import { Helmet } from "react-helmet-async";
import { MdDeleteForever } from "react-icons/md";
import { MdAdminPanelSettings } from "react-icons/md";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../Components/Hook/useAxiosSecure";

const AllUser = () => {
  const axiosSecure = useAxiosSecure();
  const { data: user = [], refetch } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await axiosSecure.get("/user");
      return res.data;
    },
  });
  console.log(user.length);
  const handleMakeAdmin = (user) => {
    fetch(`http://localhost:5000/user/admin/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is an admin now.`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const handleDeleteUser = (user) => {
    console.log(user);
    fetch(`http://localhost:5000/user/${user._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          refetch();
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Successfully Deleted!",
            showConfirmButton: false,
            timer: 1000,
          });
        }
      });
  };

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
                <td className="text-green-600">
                  {usr?.role === "admin" ? (
                    "Admin"
                  ) : (
                    <button
                      className="btn btn-ghost"
                      onClick={() => handleMakeAdmin(usr)}
                    >
                      <MdAdminPanelSettings size="30px" color="#FDBA7A" />
                    </button>
                  )}
                </td>
                <td>
                  <button
                    className="btn btn-ghost"
                    onClick={() => handleDeleteUser(usr)}
                  >
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
