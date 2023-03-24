import React from "react";
import { SavedProducts } from "../data";
import SavedItemsPreview from "./SavedItemsPreview";

const SavedItems = () => {
  return (
    <div>
      {" "}
      <h2 className=" ml-64 font-bold text-2xl py-4 text-[#0043C6]">
        Saved Products
      </h2>
      <div className="mt-5 gap-10 flex flex-col p-9 sm:px-0 w-3/4 mx-auto sm:flex-row flex-wrap md:ml-64 bg-[#F2F9FF]">
        {SavedProducts.map((product) => (
          <SavedItemsPreview key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default SavedItems;
