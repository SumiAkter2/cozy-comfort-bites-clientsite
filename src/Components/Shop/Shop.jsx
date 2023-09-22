import Cover from "../Shared/Cover/Cover";
import shopBanner from "../../assets/shop/banner2.jpg";

const Shop = () => {
  return (
    <div>
      <Cover
        Img={shopBanner}
        Title="Our Shop"
        ParagraphText="Would you like to order from our shop?"
      />
    </div>
  );
};

export default Shop;
