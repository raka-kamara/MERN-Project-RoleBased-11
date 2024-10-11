import React from 'react';
import { Helmet } from 'react-helmet-async';
import menubg from '../../assets/menu/menubg.jpg';
import dessertImg from '../../assets/home/mooncake.jpg';
import pizzaImg from '../../assets/home/Pizza.jpg';
import saladImg from '../../assets/category/salad.jpg';
import soupImg from '../../assets/category/soup.jpg';
import Cover from '../Shared/Cover';
import useMenu from '../../hooks/useMenu';
import MenuCategory from './MenuCategory';
import SectionTitle from '../../components/SectionTitle';

const Menu = () => {
    const [menu] = useMenu(); // Call the hook as a function
    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');

    return (
        <div>
            <Helmet>
                <title>Chef's Place | Menu</title>
            </Helmet>
            <Cover img={menubg} title="Our Menu" description= "Select from our diverse food collections. Enjoy your prefered one. Our chefs are working hard to let you have the best food in town." design={{height: 'h-[700px]', opacity: 'opacity-30'}} />

            <SectionTitle subHeading="Don't Miss" heading="Today's Offer" />
            {/* Offered menu items */}
            <MenuCategory items={offered} />

            {/* Dessert menu items */}
            
            <MenuCategory items={dessert} title="Dessert" img={dessertImg} design={{height: 'h-[500px]', opacity: 'opacity-90'}} description= "Select from our diverse dessert collections. Enjoy your prefered one. Our chefs are working hard to let you have the best food in town."/>

            {/* Pizza menu items */}
            <MenuCategory items={pizza} title="Pizza" img={pizzaImg} design={{height: 'h-[500px]', opacity: 'opacity-90'}} description= "Select from our diverse pizza collections. Enjoy your prefered one. Our chefs are working hard to let you have the best food in town." />

            {/* Salad menu items */}
            <MenuCategory items={salad} title="Salad" img={saladImg} design={{height: 'h-[500px]', opacity: 'opacity-90'}} description= "Select from our diverse salad collections. Enjoy your prefered one. Our chefs are working hard to let you have the best food in town." />

            {/* Soup menu items */}
            <MenuCategory items={soup} title="Soup" img={soupImg} design={{height: 'h-[500px]', opacity: 'opacity-90'}} description= "Select from our diverse salad collections. Enjoy your prefered one. Our chefs are working hard to let you have the best food in town." />
        </div>
    );
};

export default Menu;
