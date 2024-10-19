import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { Helmet } from "react-helmet-async";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";
import Swal from "sweetalert2";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const AddItems = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    console.log(data);
    // image upload to imgbb and then get an url
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url,
      };
      //
      const menuRes = await axiosSecure.post("/menu", menuItem);
      console.log(menuRes.data);
      if (menuRes.data.insertedId) {
        // show success popup
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} is added to the menu.`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
    console.log("with image url", res.data);
  };

  return (
    <div className="min-h-screen bg-slate-300 py-12">
      <Helmet>
        <title>Chef's Place | Add an Item</title>
      </Helmet>
      <SectionTitle
        heading="Add a New Recipe"
        subHeading="What's new on the menu?"
      />
      
      <div className="max-w-2xl mx-auto">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Recipe Name */}
            <div className="form-control w-full mb-6">
              <label className="label">
                <span className="label-text font-semibold text-lg">
                  Recipe Name*
                </span>
              </label>
              <input
                type="text"
                placeholder="Enter Recipe Name"
                {...register("name", { required: true })}
                required
                className="input input-bordered w-full py-3"
              />
            </div>

            {/* Category and Price */}
            <div className="flex gap-6">
              <div className="form-control w-full mb-6">
                <label className="label">
                  <span className="label-text font-semibold text-lg">
                    Category*
                  </span>
                </label>
                <select
                  defaultValue="default"
                  {...register("category", { required: true })}
                  className="select select-bordered w-full py-3"
                >
                  <option disabled value="default">
                    Select a category
                  </option>
                  <option value="salad">Main</option>
                  <option value="salad">Salad</option>
                  <option value="pizza">Pizza</option>
                  <option value="soup">Soup</option>
                  <option value="dessert">Dessert</option>
                  <option value="drinks">Drinks</option>
                </select>
              </div>

              <div className="form-control w-full mb-6">
                <label className="label">
                  <span className="label-text font-semibold text-lg">
                    Price*
                  </span>
                </label>
                <input
                  type="number"
                  placeholder="Enter Price"
                  {...register("price", { required: true })}
                  className="input input-bordered w-full py-3"
                />
              </div>
            </div>

            {/* Recipe Details */}
            <div className="form-control mb-6">
              <label className="label">
                <span className="label-text font-semibold text-lg">
                  Recipe Details
                </span>
              </label>
              <textarea
                {...register("recipe")}
                className="textarea textarea-bordered h-28"
                placeholder="Enter Recipe Details"
              ></textarea>
            </div>

            {/* Image Upload */}
            <div className="form-control w-full mb-6">
              <label className="label">
                <span className="label-text font-semibold text-lg">
                  Upload Image*
                </span>
              </label>
              <input
                {...register("image", { required: true })}
                type="file"
                className="file-input w-full max-w-xs"
              />
            </div>

            <div className="text-center mt-8">
              <button
                type="submit"
                className="btn btn-outline bg-black border-0 text-gray-400  border-b-4 mt-4"
              >
                Add Item <FaUtensils className="ml-2" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddItems;
