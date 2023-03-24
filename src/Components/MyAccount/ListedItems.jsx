import React from "react";
import { listedItems } from "../data";
import ListedItemsPreview from "./ListedItemsPreview";

const ListedItems = () => {
  return (
    <div>
      {listedItems.map((product) => (
        <ListedItemsPreview key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ListedItems;
