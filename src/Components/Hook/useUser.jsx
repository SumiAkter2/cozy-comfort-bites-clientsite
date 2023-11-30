import axios from "axios";
import { useEffect, useState } from "react";

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
};
export default useUser;
