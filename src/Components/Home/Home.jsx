import Banner from "./Banner";
import Category from "./Category";
import Featured from "./Feature/Featured";

import PopularMenu from "./PopularMenu/PopularMenu";

const Home = () => {
  return (
    <div>
      <Banner />
      <Category />
      <PopularMenu />
      <Featured />
    </div>
  );
};

export default Home;
