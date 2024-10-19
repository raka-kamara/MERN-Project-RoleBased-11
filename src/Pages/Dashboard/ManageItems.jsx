import { useState } from "react"; // Import useState for search functionality
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../components/SectionTitle";
import useMenu from "../../hooks/useMenu";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ManageItems = () => {
  const [menu, loading, refetch] = useMenu(); // Updated destructuring
  const axiosSecure = useAxiosSecure();
  const [searchTerm, setSearchTerm] = useState(""); // State for search input

  const handleDeleteItem = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/menu/${item._id}`);
        console.log(res);
        if (res.data.deletedCount > 0) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${item.name} has been deleted`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    });
  };

  // Filter menu items based on search input
  const filteredMenu = menu.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Helmet>
        <title>Chef's Place | Manage Items</title>
      </Helmet>
      <SectionTitle
        heading={`Total Items ${filteredMenu.length}`} // Show filtered count
        subHeading="Manage All Items"
      />

      <div className="flex-1 p-6 bg-slate-300 rounded-lg">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search by item name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Update search term
          className="input input-bordered mb-4 w-full"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {filteredMenu.length > 0 ? (
            filteredMenu.map((item) => (
              <div
                key={item._id}
                className="bg-slate-200 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="avatar mb-4">
                  <div className="mask mask-squircle w-24 h-24">
                    <img src={item.image} alt={item.name} />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-slate-800">
                  {item.name}
                </h3>
                <p className="text-slate-600 text-xl mb-4">${item.price}</p>
                <div className="flex gap-2">
                  <Link to={`/dashboard/updateItem/${item._id}`}>
                    <button className="btn bg-slate-600 text-white hover:bg-slate-700">
                      <FaEdit className="mr-1" /> Edit
                    </button>
                  </Link>
                  <button
                    onClick={() => handleDeleteItem(item)}
                    className="btn btn-ghost text-red-600 hover:text-red-700"
                  >
                    <FaTrashAlt className="mr-1" /> Delete
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-slate-700 col-span-3">
              No items found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ManageItems;
