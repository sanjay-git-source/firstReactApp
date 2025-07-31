import React from "react";
import Contact from "./Contact";
import { Link } from "react-router-dom";

const data = 
  {
    title: "Hi, EveryOne!",
    couseName: "React JS",
    desc: "It's Made upon by using Js Library.",
    btnText: "Watch React Tutorial.",
  }
const checkData = {demo:"hello.."}   
const Home = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-black space-x-2">
    <Contact sample={data} sample1={checkData}/>
    <Link to="/login" className="text-white">Go to Login</Link>
    </div>
  );
};

export default Home;
