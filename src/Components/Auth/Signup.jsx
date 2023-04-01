import React, { useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import { USER_DETAILS_RESET, USER_REGISTER_RESET } from "../../constants/userConstants";
import { registerUser } from "../../actions/userActions";
import { NavLink } from "react-router-dom";
import { MdVisibilityOff, MdVisibility } from "react-icons/md";
import {
  AiFillInfoCircle,
 
} from "react-icons/ai";
import { BsCheckCircleFill } from "react-icons/bs";
import logo from "../subcomponents/assets/logo.png";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Spinner from "../Spinner";
import Slide from "react-reveal/Slide";


const Signup = () => {
  
 

  

  const dispatch = useDispatch()

  const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
  
  const userData = useSelector(state => state.userRegister);
  const user = useSelector((state) => state.userLogin);
  const {userLogin}= user

  const { userRegisterInfo, loading, error, success } = userData || {};
  

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [password, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  
   useEffect(() => {
     setValidPwd(PWD_REGEX.test(password));
     setValidMatch(password === matchPwd);
   }, [password, matchPwd]);
  
  useEffect(() => {
    if (success) {
      navigate("/account/login");
      toast.success(`Welcome ${name}, log in`, {
        position: toast.POSITION.TOP_CENTER,
        className: "toast-message",
      });

      dispatch({type: USER_REGISTER_RESET})
    } 
  },[success])
   
  const userRegisterHandler = (e) => {
    e.preventDefault();
   
    dispatch(registerUser(name, email, password));
    
    

  }



  const [visible, setVisible] = useState(false);
   const toggleVisibility = () => {
     setVisible(prev => !prev); 
   };
  return (
    <div className="w-full mx-auto max-w-7xl">
      <section>
        <Slide top>
          <nav className=" flex py-2">
            <NavLink to="/" className="">
              <img className="w-[5.5rem] h-[4.2rem]" src={logo} alt="" />
            </NavLink>
            <h1 className=" m-auto text-center font-medium text-[24px] leading-[34px] tracking-wide">
              Create Your Account
            </h1>
          </nav>
        </Slide>
      </section>

      <section>
        <Slide bottom>
          <section className="mt-4 sm:mt-6 md:mt-8 sm:ml-6 md:ml-8">
            <div className="flex justify-between items-center">
              <div className="w-full max-w-[639px]">
                <div className="bg-[#F2F9FF]  rounded-[10px] p-8 sm:p-10 md:p-12">
                  <div className=" flex flex-wrap justify-center sm:justify-between">
                    <img
                      src="https://res.cloudinary.com/eiroro/image/upload/v1677002782/Group_374_lbpcjg.svg"
                      alt="Sign up with Google"
                      className=" mb-4 md:mb-0"
                    />
                    <img
                      src="https://res.cloudinary.com/eiroro/image/upload/v1677002782/Group_375_xlfcsi.svg"
                      alt="Sign up with Facebook"
                      className=" mb-4 md:mb-0"
                    />
                  </div>
                  <h2 className=" text-center text-[20px] font-light my-4 sm:my-8">
                    -OR-
                  </h2>
                  <div>{loading && <Spinner />}</div>
                  <div className="pb-2 sm:pb-4">
                    {error && (
                      <div className="bg-red-200 w-full max-w-[553px] py-2 text-base text-red-600 text-center sm:tracking-wide sm:text-lg md:text-xl md:py-3 font-light font-sans rounded-lg">
                        <h1>{error}</h1>
                      </div>
                    )}
                  </div>
                  <form onSubmit={userRegisterHandler} className="">
                    <div className="flex flex-col gap-4 sm:gap-8  md:gap-10">
                      <div className="relative">
                        <input
                          className="peer focus:border-none rounded-[10px] bg-transparent border border-[#ADADAD] py-3 placeholder:text-[#A3A3A3] placeholder:text-[14px]  w-full max-w-[553px] placeholder:font-medium px-4 sm:px-6"
                          autoComplete="off"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          type="text"
                          name="name"
                          placeholder=" "
                        />
                        <label
                          className="absolute text-[#A3A3A3] left-0 scale-100 duration-300 capitalize translate-x-4 px-3 tracking-wide -top-3 bg-[#F2F9FF] peer-placeholder-shown:top-3.5 peer-focus:-top-3 pointer-events-none peer-focus:text-blue-500"
                          htmlFor=""
                        >
                          full name <span className="absolute top-1">*</span>
                        </label>
                      </div>
                      <div className="relative">
                        <input
                          className="peer focus:border-none rounded-[10px] bg-transparent border border-[#ADADAD] py-3 placeholder:text-[#A3A3A3] placeholder:text-[14px]  w-full max-w-[553px] placeholder:font-medium px-4 sm:px-6  invalid:text-pink-600
                        focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                          type="email"
                          required
                          autoComplete="off"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          name="name"
                          placeholder=" "
                        />

                        <label
                          className="absolute text-[#A3A3A3] left-0 scale-100 duration-300 capitalize translate-x-4 px-3 tracking-wide -top-3 bg-[#F2F9FF] peer-placeholder-shown:top-3.5 peer-focus:-top-3 pointer-events-none peer-focus:text-blue-500 "
                          htmlFor=""
                        >
                          email address
                        </label>
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
                            password
                            <BsCheckCircleFill
                              className={`${
                                validPwd ? "flex" : "hidden"
                              } text-green-600`}
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
                            Must include uppercase and lowercase letters, a
                            number and a special character.
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
                                password === matchPwd && validPwd
                                  ? "flex"
                                  : "hidden"
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
                    </div>
                    <div className="flex gap-4 items-center mt-4 sm:mt-8 md:mt-10">
                      <input
                        type="checkbox"
                        name="T&Cs"
                        value="Accept"
                        required
                        className="w-6 h-6 bg-transparent"
                      />
                      <label
                        htmlFor="consent"
                        className=" text-[#00000094] font-medium"
                      >
                        {" "}
                        I Read and Consent to the{" "}
                        <span className=" text-[#FF0000CC]">
                          Terms and Conditions
                        </span>
                      </label>
                    </div>

                    <div className="w-full max-w-[551px] flex flex-col mt-4 sm:mt-6 md:mt-8">
                      <button
                        disabled={!validPwd || !validMatch ? true : false}
                        className="bg-[#0043C6] disabled:bg-blue-200  transition-all duration-200 ease-in-out disabled:cursor-not-allowed rounded-[10px] text-[20px] capitalize text-white py-3 font-bold tracking-wide  grow hover:bg-black"
                        type="submit"
                      >
                        create account
                      </button>
                    </div>
                    <p className=" text-[#00000094] mt-4 sm:mt-6 md:mt-8 text-[15px] tracking-wide pb-2 sm:pb-4">
                      {" "}
                      Already have an account?{" "}
                      <NavLink
                        to="/account/login"
                        className=" text-[#FF0000CC] font-semibold tracking-wide text-[15px]"
                      >
                        Login
                      </NavLink>
                    </p>
                  </form>
                </div>
              </div>
              <div className=" hidden md:block m-auto h-fit select-none">
                <img
                  src="https://res.cloudinary.com/eiroro/image/upload/v1677002783/Group_373_qmepoo.svg"
                  alt="vector"
                />
              </div>
            </div>
          </section>
        </Slide>
      </section>
    </div>
  );
};

export default Signup;
