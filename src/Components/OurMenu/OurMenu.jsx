import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import CoverImg from "../../assets/menu/banner3.jpg";

const OurMenu = () => {
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
    </div>
  );
};

export default OurMenu;
