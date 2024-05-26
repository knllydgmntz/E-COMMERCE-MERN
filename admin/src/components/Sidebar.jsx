import { Link } from "react-router-dom";
import addProduct from "../assets/addproduct.png";
import listProduct from "../assets/productlist.png";

const Sidebar = () => {
  return (
    <div>
      <Link to={"/addproduct"}>
        <button>
          <img src={addProduct} alt="" height={55} width={55} />
          <span>Add Product</span>
        </button>
      </Link>
      <Link to={"/listproduct"}>
        <button>
          <img src={listProduct} alt="" height={55} width={55} />
          <span>Add Product</span>
        </button>
      </Link>
    </div>
  );
};

export default Sidebar;
