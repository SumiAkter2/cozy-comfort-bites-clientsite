import { useEffect, useState } from "react";
import HeadingTitle from "../../Shared/HeadingTitle";
import axios from "axios";
import MenuItem from "../../Shared/MenuItem/MenuItem";
const PopularMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    axios
      .get("menu.json")
      .then((response) => {
        const popularItem = response.data.filter(
          (item) => item.category == "popular"
        );
        setMenu(popularItem);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [menu]);
  return (
    <section className="my-12">
      <HeadingTitle heading={"from our menu"} subtitle={"check it out"} />

      <div className="grid md:grid-cols-2 gap-10">
        {menu.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </section>
  );
};

export default PopularMenu;
