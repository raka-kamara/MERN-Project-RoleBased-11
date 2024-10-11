import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Import framer-motion for animations
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import SectionTitle from "../../components/SectionTitle";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch('reviews.json')
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000); // Change testimonial every 5 seconds
    return () => clearInterval(interval);
  }, [reviews]);

  return (
    <section className="my-20">
      <SectionTitle subHeading="What Our Clients Say" heading="Reviews" />

      <div className="flex justify-center items-center">
        <div className="w-full max-w-2xl text-center">
          <AnimatePresence>
            {reviews.length > 0 && (
              <motion.div
                key={reviews[currentIndex]._id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
              >
                <Rating
                  style={{ maxWidth: 180 }}
                  value={reviews[currentIndex].rating}
                  readOnly
                />
                <p className="py-8">{reviews[currentIndex].details}</p>
                <h3 className="text-2xl text-orange-400">
                  {reviews[currentIndex].name}
                </h3>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
