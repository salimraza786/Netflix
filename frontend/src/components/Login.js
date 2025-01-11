import React, { useState } from "react";
import Header from "./Header";
import axios from "axios";
import { API_END_POINT } from "../utils/constant";
import toast from "react-hot-toast"
import {useNavigate} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import { setLoading, setUser } from "../redux/userSlice";

const Login = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const isLoading = useSelector(store => store.app.isLoading)

  const loginHandler = () => {
    setIsLogin(!isLogin);
  };

  const getInputData = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true))
    if (isLogin) {
      // login
      const user = {email , password}
      try {
        const res = await axios.post(`${API_END_POINT}/login`, user ,{
           headers:{
            'Content-Type':'application/json'
           },
           withCredentials:true
        })
        console.log(res)
        if(res.data.success){
          toast.success(res.data.message)
        }
        dispatch(setUser(res.data.user))
        navigate("/browse")
      } catch (error) {
        toast.error(error.response.data.message)
        console.log(error)
      } finally{
        dispatch(setLoading(false))
      }
    } else {
      // register
      dispatch(setLoading(true))
      const user = { fullName, email, password };
      try {
        const res = await axios.post(`${API_END_POINT}/register`, user ,{
          headers:{
            'Content-Type':'application/json'
           },
           withCredentials:true
        });
        console.log(res);
        if(res.data.success){
          toast.success(res.data.message)
        }
        setIsLogin(true)
      } catch (error) {
        toast.error(error.response.data.message)
        console.log(error);
      } finally{
        dispatch(setLoading(false))
      }
    }

    setFullName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="w-[100vw] h-[100vh] bg-cover"
          src="https://www.slashgear.com/img/gallery/netflix-4k-streaming-on-macos-big-sur-to-require-a-t2-security-chip/intro-import.webp"
          alt="banner"
        />
      </div>
      <form
        onSubmit={getInputData}
        className="flex flex-col w-3/12 my-36 p-12 left-0 right-0 mx-auto items-center justify-center absolute bg-black opacity-85 rounded-md"
      >
        <h1 className="text-3xl text-white font-bold mb-5">
          {isLogin ? "Login" : "Signup"}
        </h1>
        <div className="flex flex-col">
          {!isLogin && (
            <input
              type="text"
              placeholder="Fullname"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="outline-none my-2 p-3 rounded-sm bg-gray-800 text-white"
            />
          )}
          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="outline-none my-2 p-3 rounded-sm bg-gray-800 text-white"
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="outline-none my-2 p-3 rounded-sm bg-gray-800 text-white"
          />
          <button className="bg-red-700 text-white font-bold p-3 mt-4 rounded-sm">
            {`${isLoading ? "loading" : (isLogin ? "Login" : "Signup")} `}
          </button>
          <p className="text-white mt-2">
            {isLogin ? "New to Netflix" : "Already have an account ?"}
            <span
              onClick={loginHandler}
              className="ml-2 font-medium text-red-800 cursor-pointer"
            >
              {isLogin ? "Signup" : "Login"}
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
