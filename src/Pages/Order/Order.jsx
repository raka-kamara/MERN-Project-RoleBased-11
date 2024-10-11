import { Helmet } from "react-helmet-async";
import coverImg from "../../assets/order/cover.jpg";
import Cover from "../Shared/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import useMenu from "../../hooks/useMenu";
import FoodeCard from "../../components/FoodeCard";
import { useParams } from "react-router-dom";

const Order = () => {
  const categories = ['Main', 'Salad', 'Pizza', 'Soup', 'Dessert', 'Drinks'];
    const { category } = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);

  const [menu] = useMenu();
  
  const main = menu.filter(item => item.category === "main");
  const desserts = menu.filter(item => item.category === "dessert");
  const soup = menu.filter(item => item.category === "soup");
  const salad = menu.filter(item => item.category === "salad");
  const pizza = menu.filter(item => item.category === "pizza");
  const drinks = menu.filter(item => item.category === "drinks");

  return (
    <div className="mx-auto">
      <Helmet>
        <title>Chef's Place | Order</title>
      </Helmet>
      <Cover img={coverImg} title="Order Food" design={{height: 'h-[700px]', opacity: 'opacity-90'}} />
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
       <div className="my-20 flex justify-center">
       <TabList >
          <Tab>Main</Tab>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Dessert</Tab>
          <Tab>Drinks</Tab>
        </TabList>
       </div>
       <TabPanel>{<div className="grid md:grid-cols-3 gap-10 my-20">
          {
          main.map(item => <FoodeCard 
            key={item._id}
            item={item}
          ></FoodeCard>)}</div>}</TabPanel>

        <TabPanel>{<div className="grid md:grid-cols-3 gap-10 my-20">
          {
          salad.map(item => <FoodeCard 
            key={item._id}
            item={item}
          ></FoodeCard>)}</div>}</TabPanel>
        <TabPanel>{<div className="grid md:grid-cols-3 gap-10 my-20">
          {
          pizza.map(item => <FoodeCard 
            key={item._id}
            item={item}
          ></FoodeCard>)}</div>}</TabPanel>
        <TabPanel>{<div className="grid md:grid-cols-3 gap-10 my-20">
          {
          soup.map(item => <FoodeCard 
            key={item._id}
            item={item}
          ></FoodeCard>)}</div>}</TabPanel>
        <TabPanel>{<div className="grid md:grid-cols-3 gap-10 my-20">
          {
          desserts.map(item => <FoodeCard 
            key={item._id}
            item={item}
          ></FoodeCard>)}</div>}</TabPanel>
        <TabPanel>{<div className="grid md:grid-cols-3 gap-10 my-20">
          {
          drinks.map(item => <FoodeCard 
            key={item._id}
            item={item}
          ></FoodeCard>)}</div>}</TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
