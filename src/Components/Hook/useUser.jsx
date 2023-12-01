import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const useUser = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("http://localhost:5000/user")
      .then((response) => {
        setUser(response.data);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return [user, loading];

  // const {
  //   data: user = [],
  //   refetch,
  //   isLoading,
  // } = useQuery(["user"], async () => {
  //   const res = await fetch(`http://localhost:5000/user`);
  //   return res.json();
  // });

  // return [refetch, isLoading, user, isError, error];
};
export default useUser;
