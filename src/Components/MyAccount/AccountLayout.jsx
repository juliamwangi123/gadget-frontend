import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getUserProfile } from '../../actions/userActions'
import { Outlet } from 'react-router-dom'
import DashboardHeader from './DashboardHeader'
import SideNav from './SideNav'

const AccountLayout = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUserProfile())
  },[dispatch])
  return (
    <div>
      <SideNav />
      <DashboardHeader />
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default AccountLayout