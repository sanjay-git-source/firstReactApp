import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { Eye, EyeOff, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [userName, setUserName] = useState("");
  const [count, setCount] = useState(0);
  const [login, setLogin] = useState(true);
  const navigate = useNavigate();
  const handleLogin = () => {
      navigate("/home");
  };

  const btnStyle = {
    backgroundColor: "#F91942",
    color: "#ffffff",
  };

  return (
    <TooltipProvider>
      <div className="flex justify-center items-center h-screen bg-gray-50">
        <form className="flex flex-col justify-center border border-gray-300 p-6 rounded-2xl w-full max-w-md shadow-md bg-white">
          <h1 className="text-2xl font-bold mb-2 text-center">
            {login ? "Login" : "SignUp"}
          </h1>
          <p className="text-base mb-4 text-gray-600 text-center">
            {login
              ? "Please enter your credentials to login."
              : "Fill all the details."}
          </p>

          {!login ? (
            <>
              <div className="relative mb-4">
                <Label htmlFor="name" className="mb-2">
                  userName:
                </Label>
                <Input id="name" type="text" className="pr-10" />
              </div>
              <div className="relative mb-4">
                <Label htmlFor="number" className="mb-2">
                  Phone No:
                </Label>
                <Input id="number" type="number" className="pr-10" />
              </div>
            </>
          ) : (
            ""
          )}

          {/* Email */}
          <Label htmlFor="email" className="mb-2">
            Email:
          </Label>
          <div className="relative mb-4">
            <Input id="email" type="text" className="pr-10" />
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  type="button"
                  aria-label="Email format help"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
                  tabIndex={-1} // remove if you want focusable
                >
                  <Mail size={18} />
                </button>
              </TooltipTrigger>
              <TooltipContent side="left" align="center">
                <p>e.g. sample@gmail.com</p>
              </TooltipContent>
            </Tooltip>
          </div>

          {/* Password */}
          <Label htmlFor="password" className="mb-2">
            Password:
          </Label>
          <div className="relative mb-4">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="pr-10"
            />
            <button
              type="button"
              aria-label={showPassword ? "Hide password" : "Show password"}
              onClick={() => setShowPassword((v) => !v)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none mb-2"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          <Button
            className="mb-3"
            style={btnStyle}
            onClick={() => handleLogin()}
          >
            {login ? "Login" : "SignUp"}
          </Button>

          <div className="text-center">
            <span className="inline-flex mb-2 cursor-pointer">
              {login ? "Don't have an account?" : "Already have an account?"}
              <p
                className="text-green-500 ml-1"
                onClick={() => setLogin((v) => !v)}
              >
                {login ? "Create a new account." : "Go back to login."}
              </p>
            </span>
            <hr />
          </div>
        </form>
        {/* <Label>{count}</Label> */}
      </div>
    </TooltipProvider>
  );
};

export default Login;
