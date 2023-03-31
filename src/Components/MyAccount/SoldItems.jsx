import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { userSoldItemsRequest } from '../../actions/productAction';
import { listedItems } from "../data";
import Error from '../Error';
import Spinner from '../Spinner';
import SoldItemsCard from './SoldItemsCard';

const SoldItems = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(userSoldItemsRequest())
    }, [dispatch])
    

    const soldProducts = useSelector(state => state.soldItems)

    const { loading, error, soldItems } = soldProducts || {};

  return (
    <div className="flex flex-col justify-center items-center w-full mx-auto">
      <div
        className={`${
          soldItems && soldItems?.length !== 0 && "hidden"
        } px-4 sm:px-9 flex flex-col gap-4  items-center justify-center mx-auto text-center w-full max-w-[400px] pb-4 sm:pb-8`}
      >
        <img
          src="https://res.cloudinary.com/seeders/image/upload/v1680279457/Blaone/10205904_mvgdtu.png"
          alt=""
        />
        <h1 className="text-[#0043C6]">
          Looks like none of your products have been purchased yet. Hang tight ,the list will be available
          once potential customers notices your products
        </h1>
        
      </div>
      {loading ? (
        <Spinner />
      ) : error ? (
        <Error error={error} />
      ) : (
        <div className="">
          {soldItems &&
            soldItems.map((item) => (
              <SoldItemsCard key={item.id} item={item} />
            ))}
        </div>
      )}
    </div>
  );
}

export default SoldItems
