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
      </div>
      <div className=" mb-8">
        <MenuCategory
          coverImg={dessertImg}
          Title={"desserts"}
          items={dessert}
        />
      </div>
      <div className=" mb-8">
        <MenuCategory coverImg={saladImg} Title={"salads"} items={salad} />
      </div>

      <div className=" mb-8">
        <MenuCategory coverImg={soupImg} Title={"soup"} items={soup} />
      </div>

      <div className=" mb-8">
        <MenuCategory coverImg={pizzaImg} Title={"pizza"} items={pizza} />
      </div>
      <div className=" mb-8">
        <MenuCategory coverImg={CoverImg} Title={"drinks"} items={drinks} />
      </div>
    </div>
  );
};

export default OurMenu;
