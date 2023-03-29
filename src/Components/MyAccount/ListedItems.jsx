import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userPostedItemsRequest } from "../../actions/productAction";
import { listedItems } from "../data";
import ListedItemsPreview from "./ListedItemsPreview";
import Error from "../Error";
import Spinner from "../Spinner";


const ListedItems = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userPostedItemsRequest());
  }, [dispatch]);
  const postedProducts = useSelector((state) => state.postedItems);
  const { loading, error, postedItems } = postedProducts || {};

  return (
    <div className="flex flex-col justify-center items-center w-full mx-auto">
      {loading ? (
        <Spinner />
      ) : error ? (
        <Error error={error} />
      ) : (
        <div className="">
          {postedItems &&
            postedItems.map((item) => (
              <ListedItemsPreview key={item.id} item={item} />
            ))}
        </div>
      )}
    </div>
  );
};

export default ListedItems;
