import Cover from "../Shared/Cover/Cover";
import shopBanner from "../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import useMenu from "../Hook/useMenu";
import OrderTab from "./OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Shop = () => {
  const [menu] = useMenu();
  const categories = ["salads", "desserts", "drinks", "soup", "pizza"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);

  const dessert = menu.filter((item) => item.category === "dessert");
  const drinks = menu.filter((item) => item.category === "drinks");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");

  const [tabIndex, setTabIndex] = useState(initialIndex);
  return (
    <div>
      <Helmet>
        <title>Cozy Comfort Bites | Order</title>
      </Helmet>
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
          <OrderTab items={salad} />
        </TabPanel>
        <TabPanel>
          <OrderTab items={dessert} />
        </TabPanel>
        <TabPanel>
          <OrderTab items={drinks} />
        </TabPanel>
        <TabPanel>
          <OrderTab items={soup} />
        </TabPanel>
        <TabPanel>
          <OrderTab items={pizza} />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Shop;
