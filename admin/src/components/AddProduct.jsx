import React from "react";

const AddProduct = () => {
  return (
    <div className="p-8 box-border bg-white w-full rounded-sm mt-4 lg:m-7">
      <div className="mb-3">
        <h4 className="bold-18 pb-2">Product title:</h4>
        <input
          type="text"
          name="name"
          placeholder="Type here.."
          className="bg-primary outline-none max-w-80 w-full py-3 px-4 rounded-md"
        />
      </div>
      <div className="mb-3">
        <h4 className="bold-18 pb-2">Price:</h4>
        <input
          type="text"
          name="old_price"
          placeholder="Type here.."
          className="bg-primary outline-none max-w-80 w-full py-3 px-4 rounded-md"
        />
      </div>
      <div className="mb-3">
        <h4 className="bold-18 pb-2">Product title:</h4>
        <input
          type="text"
          name="new_price"
          placeholder="Type here.."
          className="bg-primary outline-none max-w-80 w-full py-3 px-4 rounded-md"
        />
      </div>
      <div>
        <h4>Product Category:</h4>
        <select name="category" id="" className="bg-primary">
          option
        </select>
      </div>
    </div>
  );
};

export default AddProduct;
