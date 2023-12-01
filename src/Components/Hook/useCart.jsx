import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
const useCart = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  // const token = localStorage.getItem("access-token");
  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: async () => {
      const response = await axiosSecure.get(
        `/cart?email=${user?.email}`
        // token use korle headers dite hbe
        //   , {
        //   headers: {
        //     authorization: `bearer ${token}`,
        //   },
        // }
      );

      return response.json();
    },
  });

  return [cart, refetch];
};
export default useCart;
