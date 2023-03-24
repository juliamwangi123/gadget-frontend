import React, { useState } from "react";
import ChangePassword from "./ChangePassword";
import DeleteAccount from "./DeleteAccount";
import IdentityVerification from "./IdentityVerification";

const SecuritySettings = () => {
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [showDeleteAccount, setShowDeleteAccount] = useState(false);
  const [showIdentityVerification, setShowIdentityVerification] = useState(false);

  const handleClickPassword = () => {
    setShowChangePassword(!showChangePassword);
    setShowDeleteAccount(false);
    setShowIdentityVerification(false);
  };

  const handleClickDelete = () => {
    setShowDeleteAccount(!showDeleteAccount);
    setShowChangePassword(false);
    setShowIdentityVerification(false);
  };

  const handleClickVerification = () => {
    setShowIdentityVerification(!showIdentityVerification);
    setShowChangePassword(false);
    setShowDeleteAccount(false);
  };

  return (
    <div>
      <div className="md:ml-56 p-3 text-[#0043C6] space-y-4">
        <h2 className="text-xl font-medium hover:cursor-pointer" onClick={handleClickPassword}>
          Change Password
        </h2>
        {showChangePassword && <ChangePassword />}

        <h2 className="text-xl font-medium hover:cursor-pointer" onClick={handleClickVerification}>
          Identity Verification
        </h2>
        {showIdentityVerification && <IdentityVerification />}

        <h2 className="text-xl font-medium hover:cursor-pointer" onClick={handleClickDelete}>
          Delete Account
        </h2>
        {showDeleteAccount && <DeleteAccount />}
      </div>
    </div>
  );
};

export default SecuritySettings;
