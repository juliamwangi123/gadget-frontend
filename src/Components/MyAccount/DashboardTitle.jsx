import { useLocation } from "react-router-dom";

const DashboardTitle = () => {
  const location = useLocation();

  let title;
  switch (location.pathname) {
    case "/my-account":
      title = "Dashboard";
      break;
    case "/my-account/profile-details":
      title = "Profile Details";
      break;
    case "/my-account/security-settings":
      title = "Security Settings";
      break;
    case "/my-account/product-page":
      title = "Product Page";
      break;
    case "/my-account/sold-items":
      title = "Sold Items";
      break;
    case "/my-account/transaction-history":
      title = "Transaction History";
      break;
    default:
      title = "Dashboard";
  }

  return (
    <div className=" bg-[#F2F9FF] text-[#0043C6] md:ml-44 text-lg font-bold flex justify-between">
      <h2 className=" py-3 pl-11 ">{title}</h2>
      <select className="bg-transparent border-none text-sm p-5  ">
        <option>Naira(NGN)</option>
        <option>Dollar(USD)</option>
        <option>Shilling (KES)</option>
        <option>Cedi (GHS)</option>
      </select>
    </div>
  );
};

export default DashboardTitle;
