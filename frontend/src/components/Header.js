import axios from "axios";
import React from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { API_END_POINT } from "../utils/constant";
import toast from "react-hot-toast";
import { setUser } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";
import { setToggle } from "../redux/movieSlice";

const Header = () => {
  const user = useSelector(store => store.app.user);
  const toggle = useSelector(store => store.movie.toggle)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const logoutHandler = async() => {
     try {
       const res = await axios.get(`${API_END_POINT}/logout`)
       console.log(res)
       if(res.data.success){
        toast.success(res.data.message)
       }
       dispatch(setUser(null))
       navigate("/")
     } catch (error) {
       toast(error.response.data.message)
       console.log(error)
     }
  }
  const toggleHandler = () => {
    dispatch(setToggle())
  }
  return (
    <div className="absolute z-10 flex w-[100%] items-center justify-between px-6 py-2 bg-gradient-to-b from-slate-900">
      <img
        className="w-56"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png"
        alt="netflix logo"
      />
      {user && (
        <div className="flex items-center ">
          <IoIosArrowDropdown className="text-yellow-200 " size="20px" />
          <h1 className=" font-semibold text-lg text-yellow-200">{user.fullName}</h1>
          <div className="flex items-center gap-3 ml-3">
            <button onClick={logoutHandler} className="bg-red-800 outline-none px-3 py-2 rounded-md text-white">
              Logout
            </button>
            <button onClick={toggleHandler} className="bg-red-800 outline-none px-3 py-2 rounded-md text-white">
             {toggle ? "Home" : "Search Movie"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
