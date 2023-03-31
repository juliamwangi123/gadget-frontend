import { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { fetchUserDetails } from '../../actions/userActions'
import { Outlet } from 'react-router-dom'
import DashboardHeader from './DashboardHeader'
import SideNav from './SideNav'

const AccountLayout = () => {
  const dispatch = useDispatch()
  const profileDataupdate = useSelector((state) => state.profileUpdate);
  const userDataupdate = useSelector((state) => state.userUpdateData);

 
  const {
    userUpdateData,
    loading: LoadingUserUpdate,
    error: ErrorUserUpdate,
    success
  } = userDataupdate || {};
   useEffect(() => {
     if (success) {
       dispatch(fetchUserDetails());
     }
   }, [success,dispatch]);
  useEffect(() => {
    dispatch(fetchUserDetails())
  },[dispatch])
  return (
    <div className='mx-auto w-full max-w-7xl'>
      <SideNav />
      <DashboardHeader />
      <div>
        <Outlet />
      </div>


      {/* <div></div> */}
    </div>
  )
}

export default AccountLayout