import React, { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle";

const ChefRecommendations = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const mustTryItems = data.filter((item) => item.MustTry === "yes");
        setMenu(mustTryItems);
      });
  }, []);

  return (
    <section className="mb-12">
      <SectionTitle
        heading="Chef Recommends"
        subHeading="Must Try Items"
      ></SectionTitle>
      <div className="grid md:grid-cols-3 gap-10 px-20">
        {menu.map((item) => (
          <div
            key={item._id}
            className="flex flex-col items-center justify-center w-full max-w-sm mx-auto"
          >
            <div
              className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
              style={{ backgroundImage: `url(${item.image})` }}
            ></div>

            <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
              <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
                {item.name}
              </h3>

              <p className="text-center text-gray-600 dark:text-gray-400 px-2">
                {item.recipe}
              </p>

              <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                <span className="font-bold text-gray-800 dark:text-gray-200">
                 <span className="text-yellow-500">Price:</span>  ${item.price}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ChefRecommendations;
