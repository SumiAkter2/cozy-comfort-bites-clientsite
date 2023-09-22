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
      <div className= "my-8">
        <Cover
          Img={dessertImg}
          Title={"Desserts"}
          ParagraphText={
            "Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi"
          }
        />
        <MenuCategory items={dessert} />
        <PrimaryButton buttonText={"Order Your Favorite Food"}></PrimaryButton>
      </div>
      <div className= "my-8">
        <Cover
          Img={saladImg}
          Title={"Salads"}
          ParagraphText={
            "Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi"
          }
        />
        <MenuCategory items={salad} />
        <PrimaryButton buttonText={"Order Your Favorite Food"}></PrimaryButton>
      </div>

      <div className= "my-8">
        <Cover
          Img={soupImg}
          Title={"Soups"}
          ParagraphText={
            "Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi"
          }
        />
        <MenuCategory items={soup} />
        <PrimaryButton buttonText={"Order Your Favorite Food"}></PrimaryButton>
      </div>

      <div className= "my-8">
        <Cover
          Img={pizzaImg}
          Title={"Pizza"}
          ParagraphText={
            "Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi"
          }
        />
        <MenuCategory items={pizza} />
        <PrimaryButton buttonText={"Order Your Favorite Food"}></PrimaryButton>
      </div>
      <div className= "my-8">
        <Cover
          Img={CoverImg}
          Title={"Drinks"}
          ParagraphText={
            "Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi"
          }
        />
        <MenuCategory items={drinks} />
        <PrimaryButton buttonText={"Order Your Favorite Food"}></PrimaryButton>
      </div>
    </div>
  );
};

export default OurMenu;
