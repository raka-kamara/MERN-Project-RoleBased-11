import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../../assets/home/burger.jpg";
import img2 from "../../assets/home/Pizza.jpg";
import img3 from "../../assets/home/mooncake.jpg";

const Banner = () => {
  return (
    <div className="relative">
      <Carousel showThumbs={false} autoPlay infiniteLoop>
        {/* Burger */}
        <div className="relative">
          <img src={img1} alt="Burger" className="h-[700px] w-full object-cover" />
          <div className="absolute bottom-56 md:left-10 bg-black bg-opacity-50 text-white p-4 rounded">
            <h2 className="text-xl font-bold text-yellow-500">Juicy Burger</h2>
            <p>Savor the flavors of a perfectly grilled burger with fresh toppings.</p>
            <p className="mt-2">
              <span className="font-semibold">Coupon Code:</span> <span className="bg-red-500 px-2 py-1 rounded">BURGER10</span> {/* Responsive Coupon */}
            </p>
          </div>
        </div>
        {/* Pizza */}
        <div className="relative">
          <img src={img2} alt="Pizza" className="h-[700px] w-full object-cover" />
          <div className="absolute bottom-56 md:left-10 bg-black bg-opacity-50 text-white p-4 rounded">
            <h2 className="text-xl font-bold text-yellow-500">Cheesy Pizza</h2>
            <p>A delicious pizza topped with gooey cheese and fresh ingredients.</p>
            <p className="mt-2">
              <span className="font-semibold">Coupon Code:</span> <span className="bg-green-500 px-2 py-1 rounded">PIZZA20</span> {/* Responsive Coupon */}
            </p>
          </div>
        </div>
        {/* Mooncake */}
        <div className="relative">
          <img src={img3} alt="Mooncake" className="h-[700px] w-full object-cover" />
          <div className="absolute bottom-56 md:left-10 bg-black bg-opacity-50 text-white p-4 rounded">
            <h2 className="text-xl font-bold text-yellow-500">Sweet Mooncake</h2>
            <p>A traditional mooncake with rich flavors perfect for celebrations.</p>
            <p className="mt-2">
              <span className="font-semibold">Coupon Code:</span> <span className="bg-yellow-500 px-2 py-1 rounded">MOONCAKE15</span> {/* Responsive Coupon */}
            </p>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
