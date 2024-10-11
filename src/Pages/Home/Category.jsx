import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import img1 from "../../assets/category/beef.jpg";
import img2 from "../../assets/category/biriyani.jpg";
import img3 from "../../assets/category/rice bowl.jpg";
import img4 from "../../assets/category/salad.jpg";
import img5 from "../../assets/category/seafood.jpg";
import img6 from "../../assets/category/soup.jpg";
import SectionTitle from "../../components/SectionTitle";

const Category = () => {
  return (
    <div className="my-12">
      <div>
        <SectionTitle subHeading={"Open 24/7"}
            heading={"Order Online"}/>
      </div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="relative">
          <img src={img1} className="h-[400px] w-[600px] object-cover mx-auto" alt="Beef" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-4 rounded">
            <h3 className="text-lg font-bold text-center">Beef</h3>
          </div>
        </SwiperSlide>

        <SwiperSlide className="relative">
          <img src={img2} className="h-[400px] w-[600px] object-cover mx-auto" alt="Biriyani" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-4 rounded">
            <h3 className="text-lg font-bold text-center">Biriyani</h3>
          </div>
        </SwiperSlide>

        <SwiperSlide className="relative">
          <img src={img3} className="h-[400px] w-[600px] object-cover mx-auto" alt="Rice Bowl" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-4 rounded">
            <h3 className="text-lg font-bold text-center">Rice Bowl</h3>
          </div>
        </SwiperSlide>

        <SwiperSlide className="relative">
          <img src={img4} className="h-[400px] w-[600px] object-cover mx-auto" alt="Salad" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-4 rounded">
            <h3 className="text-lg font-bold text-center">Salad</h3>
          </div>
        </SwiperSlide>

        <SwiperSlide className="relative">
          <img src={img5} className="h-[400px] w-[600px] object-cover mx-auto" alt="Seafood" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-4 rounded">
            <h3 className="text-lg font-bold text-center">Seafood</h3>
          </div>
        </SwiperSlide>

        <SwiperSlide className="relative">
          <img src={img6} className="h-[400px] w-[600px] object-cover mx-auto" alt="Soup" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-4 rounded">
            <h3 className="text-lg font-bold text-center">Soup</h3>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;
