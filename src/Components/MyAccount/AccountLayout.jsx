import { Outlet } from 'react-router-dom'
import DashboardHeader from './DashboardHeader'
import SideNav from './SideNav'

const AccountLayout = () => {
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