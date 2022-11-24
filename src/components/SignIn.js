import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../images/netflix-logo.png";
import "./SignIn.css";
import NetflixTv from "../images/netflix-tv.jpg";
import NetflixDevices from "../images/netflix-devices.jpg";
import Kids from "../images/netflix-kids.png";
import { Link } from "react-router-dom";
import { Context } from "./UserList";

function SignIn() {
  const { users, setUsers, signedIn, setSignedIn } = useContext(Context);

  const [data, setData] = useState({
    user: "",
    pass: "",
    image: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = users.find(
      (item) => item.username === data.user && item.password === data.pass
    );

    if (!user)
      alert(
        "Invalid user, please check your username and password or register!!"
      );
    else {
      setSignedIn({ user: user.username, image: user.image });
      // console.log(setSignedIn)
      navigate("/home");
    }
  };

  return (
    <div>
      <div className="sign-in h-[140vh]">
        <img src={Logo} alt="" className="w-[14rem] p-3" />

        <div className="w-[28rem] text-white bg-black/70 m-auto text-center p-8 ">
          <form
            action=""
            className="flex flex-col w-[90%] gap-3 mt-4 justify-center m-auto"
            onSubmit={handleSubmit}
          >
            <h1 className="text-[2.5rem] text-left mb-8">Sign In</h1>

            <input
              type="text"
              placeholder="Username"
              value={data.user}
              className="p-3 rounded bg-gray-800"
              onChange={(e) => setData({ ...data, user: e.target.value })}
            />

            <input
              type="password"
              placeholder="Password"
              value={data.pass}
              className="p-3 rounded bg-gray-800"
              onChange={(e) =>
                setData((prevState) => {
                  return { ...prevState, pass: e.target.value };
                })
              }
            />

            <button className="p-3 rounded bg-red-600 my-8">Sign In</button>

            <p className="text-right ">
              New to Netflix?{" "}
              <Link
                to={"/register"}
                className="text-gray-500 hover:text-red-700"
              >
                Sign up now.
              </Link>
            </p>

            <p className="text-left text-gray-500 mt-5">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.
            </p>
          </form>
        </div>
      </div>
      <div className="bg-black py-[5rem] text-white border-t-gray-900 border-t-[10px] flex items-center justify-center flex-wrap">
        <div className="w-[40%]">
          <h1 className="text-[2.5rem] font-bold">Enjoy on your TV.</h1>
          <p className="text-[1rem]  mt-4 font-bold">
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and more.
          </p>
        </div>
        <img src={NetflixTv} alt="" className="w-[25rem]" />
      </div>
      <div className="bg-black py-[5rem] text-white border-t-gray-900 border-t-[10px] flex items-center justify-center flex-wrap">
        <img src={NetflixDevices} alt="" className="w-[25rem] rounded" />
        <div className="w-[40%] ml-10">
          <h1 className="text-[2.5rem] font-bold">Watch everywhere.</h1>
          <p className="text-[1rem] mt-4 font-bold">
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV without paying more.
          </p>
        </div>
      </div>
      <div className="bg-black py-[5rem] text-white border-t-gray-900 border-t-[10px] flex items-center justify-center flex-wrap">
        <div className="w-[40%]">
          <h1 className="text-[2.5rem] font-bold">Create profiles for kids.</h1>
          <p className="text-[1rem] w-[60%] mt-4 font-bold">
            Send kids on adventures with their favorite characters in a space
            made just for them—free with your membership.
          </p>
        </div>
        <img src={Kids} alt="" className="w-[25rem]" />
      </div>
    </div>
  );
}

export default SignIn;
