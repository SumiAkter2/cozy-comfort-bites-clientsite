import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import CoverImg from "../../assets/menu/banner3.jpg";
import dessertImg from "../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";
import useMenu from "../Hook/useMenu";
import HeadingTitle from "../Shared/HeadingTitle";
import MenuCategory from "../Home/PopularMenu/MenuCategory";
import PrimaryButton from "../Shared/PrimaryButton/PrimaryButton";

const OurMenu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const drinks = menu.filter((item) => item.category === "drinks");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Cozy Comfort Bites | Menu</title>
      </Helmet>
      <Cover
        Img={CoverImg}
        Title={"Our Menu"}
        ParagraphText={"Would You Like To Try A Dish?"}
      />
      <div className="my-24">
        <HeadingTitle heading={"today's Offer"} subtitle={"DON'T MISS"} />
        <MenuCategory items={offered} />
        <PrimaryButton buttonText={"Order Your Favorite Food"}></PrimaryButton>
      </div>
      <div className=" mb-8">
        <MenuCategory
          coverImg={dessertImg}
          Title={"Desserts"}
          items={dessert}
        />
        <PrimaryButton buttonText={"Order Your Favorite Food"}></PrimaryButton>
      </div>
      <div className=" mb-8">
        <MenuCategory coverImg={saladImg} Title={"Salads"} items={salad} />
        <PrimaryButton buttonText={"Order Your Favorite Food"}></PrimaryButton>
      </div>

      <div className=" mb-8">
        <MenuCategory coverImg={soupImg} Title={"Soups"} items={soup} />
        <PrimaryButton buttonText={"Order Your Favorite Food"}></PrimaryButton>
      </div>

      <div className=" mb-8">
        <MenuCategory coverImg={pizzaImg} Title={"Pizza"} items={pizza} />
        <PrimaryButton buttonText={"Order Your Favorite Food"}></PrimaryButton>
      </div>
      <div className=" mb-8">
        <MenuCategory coverImg={CoverImg} Title={"Drinks"} items={drinks} />
        <PrimaryButton buttonText={"Order Your Favorite Food"}></PrimaryButton>
      </div>
    </div>
  );
};

export default OurMenu;
