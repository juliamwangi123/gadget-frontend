import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateUser,logoutUser } from "../../actions/userActions";
import { MdVisibilityOff, MdVisibility } from "react-icons/md";
import { BsCheckCircleFill } from "react-icons/bs";
import { AiFillInfoCircle } from "react-icons/ai";
import { toast } from "react-toastify";
import {
  USER_PROFILE_UPDATE_RESET,
  USER_UPDATE_RESET,
} from "../../constants/userConstants";


const ChangePassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

   const [password, setPwd] = useState("");
   const [validPwd, setValidPwd] = useState(false);
   const [pwdFocus, setPwdFocus] = useState(false);

   const [matchPwd, setMatchPwd] = useState("");
   const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);
  const userProfile = useSelector((state) => state.userDetails);
 


  const userDataupdate = useSelector((state) => state.userUpdateData);
  const {
    userUpdateData,
    loading: LoadingUserUpdate,
    error: ErrorUserUpdate,
    success
  } = userDataupdate || {};
  const { userDetails, loading, error } = userProfile || {};
  const { username, email, firstname, lastname } = userDetails || {};

  
   useEffect(() => {
     setValidPwd(PWD_REGEX.test(password));
     setValidMatch(password === matchPwd);
   }, [password, matchPwd]);

  const [visible, setVisible] = useState(false);
  const toggleVisibility = () => {
    setVisible((prev) => !prev);

  };

  const changePasswordHandler = (e) => {
    e.preventDefault();
    dispatch(updateUser({username,firstname,lastname,email, password }));
    if (success) {
      dispatch(logoutUser())
      navigate("/account/login")
      dispatch({ type: USER_UPDATE_RESET });
      dispatch({ type: USER_PROFILE_UPDATE_RESET });
      toast.success("Password changed succefully", {
        position: toast.POSITION.TOP_CENTER,
        className: "toast-message",
      });
    }
    

  }
  
  return (
    <div>
      <div className=" w-3/4 float-right justify-center items-center mt-4 sm:mt-6">
        <div className=" bg-[#F2F9FF] rounded-[10px] max-w-[639px]  p-6 sm:p-8 md:p-10">
          <section className="flex flex-col gap-6 sm:gap-8 md:gap-10">
           
            <div className="flex flex-col gap-2">
              <div className=" relative flex items-center">
                {visible ? (
                  <MdVisibility
                    onClick={toggleVisibility}
                    size={25}
                    className="absolute right-0 mr-5 text-[#A3A3A3] cursor-pointer"
                  />
                ) : (
                  <MdVisibilityOff
                    onClick={toggleVisibility}
                    size={25}
                    className="absolute right-0 mr-5 text-[#A3A3A3] cursor-pointer"
                  />
                )}

                <input
                  className={`peer rounded-[10px] bg-transparent border py-3 placeholder:text-[#A3A3A3] placeholder:text-[14px]  w-full max-w-[553px] placeholder:font-medium px-4 sm:px-6 focus:border-none`}
                  type={`${visible ? "text" : "password"}`}
                  required
                  autoComplete="off"
                  name="name"
                  onFocus={() => setPwdFocus(true)}
                  onBlur={() => setPwdFocus(false)}
                  onChange={(e) => setPwd(e.target.value)}
                  value={password}
                  placeholder=" "
                />

                <label
                  className="absolute inline-flex gap-1 items-center px-2 translate-x-4 capitalize text-[#A3A3A3] -top-3  tracking-wide bg-[#F2F9FF] scale-100 duration-300 peer-placeholder-shown:top-3 pointer-events-none peer-focus:-top-3 peer-focus:text-blue-500"
                  htmlFor=""
                >
                  new password
                  <BsCheckCircleFill
                    className={`${validPwd ? "flex" : "hidden"} text-green-600`}
                  />
                  {/* <AiFillCloseCircle
                          className={`${
                           validPwd || !password  ?  "hidden" : ""
                          } text-green-600`}
                        /> */}
                </label>
              </div>

              <div
                className={`${
                  pwdFocus && !validPwd ? "flex" : "hidden"
                } w-full max-w-[553px] rounded-[10px] bg-sky-300 p-2`}
              >
                <p className="text-blue-900 tracking-wide">
                  <span className="inline-flex items-center gap-1">
                    <AiFillInfoCircle />8 to 24 characters.
                  </span>
                  <br />
                  Must include uppercase and lowercase letters, a number and a
                  special character.
                  <br />
                  Allowed special characters:{" "}
                  <span className="text-fuchsia-600 text-base font-medium">
                    <span>!</span>
                    <span>@</span>
                    <span>#</span>
                    <span>%</span>
                  </span>
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className=" relative flex items-center">
                {visible ? (
                  <MdVisibility
                    onClick={toggleVisibility}
                    size={25}
                    className="absolute right-0 mr-5 text-[#A3A3A3] cursor-pointer"
                  />
                ) : (
                  <MdVisibilityOff
                    onClick={toggleVisibility}
                    size={25}
                    className="absolute rotate-360 right-0 mr-5 text-[#A3A3A3] cursor-pointer"
                  />
                )}

                <input
                  className={`peer rounded-[10px] bg-transparent border border-[#ADADAD] py-3 placeholder:text-[#A3A3A3] placeholder:text-[14px]  w-full max-w-[553px] placeholder:font-medium px-4 sm:px-6 focus:border-none`}
                  type={`${visible ? "text" : "password"}`}
                  required
                  name="name"
                  autoComplete="off"
                  onChange={(e) => setMatchPwd(e.target.value)}
                  value={matchPwd}
                  onFocus={() => setMatchFocus(true)}
                  onBlur={() => setMatchFocus(false)}
                  placeholder=" "
                />

                <label
                  className="absolute inline-flex items-center gap-1 px-2 translate-x-4 capitalize tracking-wide text-[#A3A3A3] -top-3 bg-[#F2F9FF] scale-100 duration-300 peer-placeholder-shown:top-3 peer-focus:-top-3 pointer-events-none peer-focus:text-blue-500"
                  htmlFor=""
                >
                  confirm password
                  <BsCheckCircleFill
                    className={`${
                      password === matchPwd && validPwd ? "flex" : "hidden"
                    } text-green-600`}
                  />
                </label>
              </div>
              <div
                className={`${
                  matchFocus && !validMatch ? "flex" : "hidden"
                } w-full max-w-[553px] rounded-[10px] bg-sky-300 p-2`}
              >
                <p className="inline-flex items-center gap-1 text-blue-900 ">
                  {" "}
                  <AiFillInfoCircle />
                  Must match the first password input field.
                </p>
              </div>
            </div>
          </section>
        </div>
        <button
          type="submit"
          onClick={changePasswordHandler}
          disabled={!validPwd || !validMatch ? true : false}
          className=" bg-[#0043C6] disabled:cursor-not-allowed disabled:bg-blue-200 py-2 px-20 mt-6 rounded-md text-xl font-black text-white"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default ChangePassword;
