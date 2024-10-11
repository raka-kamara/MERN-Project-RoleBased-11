import { Link } from "react-router-dom";
import Cover from "../Shared/Cover";
import MenuItem from "../Shared/MenuItem";

const MenuCategory = ({ items, title, img, description, design }) => {
  return (
    <div>
      <Cover
        img={img}
        title={title}
        description={description}
        design={design}
      />

      <div className="grid md:grid-cols-3 gap-10 px-20 my-16">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <Link to={`/order/${title}`}>
        <button className="btn btn-outline border-0 border-b-4 mb-4">
          Order Now
        </button>
      </Link>
    </div>
  );
};

export default MenuCategory;
