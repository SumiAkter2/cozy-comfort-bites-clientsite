import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import CoverImg from "../../assets/menu/banner3.jpg";
import PopularMenu from "../Home/PopularMenu/PopularMenu";

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
      <PopularMenu />
      <Cover
        Img={CoverImg}
        Title={"Our Menu"}
        ParagraphText={
          "Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi"
        }
      />
      <PopularMenu />
      <Cover
        Img={CoverImg}
        Title={"Our Menu"}
        ParagraphText={
          "Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi"
        }
      />
      <PopularMenu />
    </div>
  );
};

export default OurMenu;
