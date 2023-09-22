import Cover from "../Shared/Cover/Cover";
import shopBanner from "../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import useMenu from "../Hook/useMenu";
import FoodCard from "./FoodCard";

const Shop = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const drinks = menu.filter((item) => item.category === "drinks");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const offered = menu.filter((item) => item.category === "offered");
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <div>
      <Cover
        Img={shopBanner}
        Title="Our Shop"
        ParagraphText="Would you like to order from our shop?"
      />

      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <div className="text-xl font-semibold flex justify-center mt-12">
          <TabList>
            <Tab>SALAD </Tab>
            <Tab>DESSERTS</Tab>
            <Tab>DRINKS</Tab>
            <Tab>SOUP</Tab>
            <Tab>PIZZA</Tab>
          </TabList>
        </div>

        <TabPanel>
          <div className="grid md:grid-cols-3 md:px-16 gap-6 my-6">
            {salad.map((item) => (
              <FoodCard key={item._id} item={item} />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Shop;
