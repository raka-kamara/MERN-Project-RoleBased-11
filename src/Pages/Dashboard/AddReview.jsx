import { useForm } from 'react-hook-form';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../components/SectionTitle';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2'; // Assuming you use SweetAlert2

const AddReview = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();

  const onSubmit = async (data) => {
    const review = {
      name: user.displayName, // Use the authenticated user's name
      details: data.details, // Get details from the form input
      rating: data.rating // Get rating from the form input
    };

    try {
      const reviewRes = await axiosPublic.post("/reviews", review); // Send the review data to the API
      if (reviewRes.data.insertedId) {
        reset(); // Reset the form after successful submission
        Swal.fire({
          position: "center",
          icon: "success",
          title: `Review added successfully!`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      console.error("Error adding review:", error);
    }
  };

  return (
    <div>
      <Helmet>
        <title>Chef's Place | Add Review</title>
      </Helmet>
      <SectionTitle heading="Add a Review" subHeading="What's on your mind?" />

      <div className="max-w-2xl mx-auto">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Name Field */}
            <div className="form-control w-full mb-6">
              <label className="label">
                <span className="label-text font-semibold text-lg">Name*</span>
              </label>
              <input
                type="text"
                value={user.displayName}
                readOnly
                className="input input-bordered w-full py-3"
              />
            </div>

            {/* Rating Field */}
            <div className="form-control w-full mb-6">
              <label className="label">
                <span className="label-text font-semibold text-lg">Rating*</span>
              </label>
              <select
                defaultValue="default"
                {...register("rating", { required: true })}
                className="select select-bordered w-full py-3"
              >
                <option disabled value="default">Select a Rating</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>

            {/* Details Field */}
            <div className="form-control mb-6">
              <label className="label">
                <span className="label-text font-semibold text-lg">Details</span>
              </label>
              <textarea
                {...register("details", { required: true })}
                className="textarea textarea-bordered h-28"
                placeholder="Enter Review Details"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center mt-8">
              <button
                type="submit"
                className="btn btn-outline bg-black border-0 text-gray-400 border-b-4 mt-4"
              >
                Add Review
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
