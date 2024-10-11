import React from "react";
import SectionTitle from "../../components/SectionTitle";
import img from "../../assets/featured/restaurant.jpg";
import img1 from "../../assets/home/Pizza.jpg";
import { Link } from "react-router-dom";

const Featured = () => {
  return (
    <div className="bg-fixed text-white pt-8 my-20  opacity-80"  style={{
        backgroundImage: `url(${img1})`,
      }}>
      <SectionTitle subHeading={"Check it Out"} heading={"Featured"} />
      <div className="md:flex justify-center items-center bg-black bg-opacity-50 pb-20 pt-12 px-10 md:px-36">
        <div>
          <img className="h-[400px] w-full object-cover" src={img} alt="Featured Restaurant" />
        </div>
        <div className="md:ml-10 md:w-2/3 ">
          <p className="uppercase">Discover our Signature Dish</p>
          <p>
            Experience a culinary masterpiece crafted by our renowned chefs. Our
            featured dish combines locally sourced ingredients with global
            flavors to create a unique dining experience. From tender, slow-cooked
            meats to fresh seasonal vegetables, every bite is a celebration of
            flavor and innovation. Whether you're joining us for a special
            occasion or just looking to indulge in something extraordinary, this
            dish is not to be missed.
          </p>
          <Link to="/order/Main" className="btn btn-outline text-white border-0  border-b-4 mt-4">
            Order Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Featured;
