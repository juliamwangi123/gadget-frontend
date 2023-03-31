import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userPostedItemsRequest } from "../../actions/productAction";
import { listedItems } from "../data";
import ListedItemsPreview from "./ListedItemsPreview";
import Error from "../Error";
import Spinner from "../Spinner";
import {MdOutlineProductionQuantityLimits} from "react-icons/md"


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

      <div className={`${postedItems?.length !== 0 && "hidden"} flex flex-col items-center gap-4 mt-4 sm:gap-6`}>
        <MdOutlineProductionQuantityLimits
          size={45}
          className="text-blue-600"
        />
       
          <h1 className="text-lg font-mono font-semibold">
            You have no posted product!
          </h1>
          <h1 className="font-mono">
            Get started now and discover our best deals!
          </h1>
          <Link
            to="/sell-gadget"
            className="capitalize bg-blue-600 hover:bg-blue-500 py-2 rounded-md text-yellow-50 px-8 sm:px-10"
            type="submit"
          >
            post product
          </Link>
       
      </div>
    </div>
  );
};

export default ListedItems;
