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
    <div className='flex flex-col justify-center items-center w-full mx-auto'>
      {loading ? (
        <Spinner />
      ) : error ? (
        <Error error={error} />
      ) : (
        <div className=''>
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
