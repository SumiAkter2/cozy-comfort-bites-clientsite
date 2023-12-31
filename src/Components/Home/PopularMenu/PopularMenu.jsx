import useMenu from "../../Hook/useMenu";
import HeadingTitle from "../../Shared/HeadingTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import PrimaryButton from "../../Shared/PrimaryButton/PrimaryButton";
const PopularMenu = () => {
  const [menu] = useMenu();
  const popularMenu = menu.filter((items) => items.category === "popular");
  return (
    <section className="my-12">
      <HeadingTitle heading={"from our menu"} subtitle={"check it out"} />

      <div className="grid md:grid-cols-2 gap-10">
        {popularMenu.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <PrimaryButton buttonText={'View All'}></PrimaryButton>
    </section>
  );
};

export default PopularMenu;
