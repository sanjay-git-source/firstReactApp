import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const Home = () => {
  

  return (
    <div className="min-h-screen flex flex-col bg-black text-gray-100">
      {/* Topbar */}
      <header className="w-full border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-xl font-semibold text-white">
            <Link to="/">LENDING</Link>
          </div>
          <nav>
            <ul className="flex gap-6 text-sm">
              <li>
                <Link
                  to="/"
                  className="hover:  px-2 py-1 rounded-md hover:bg-gray-800 transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/invoices"
                  className=" px-2 py-1 rounded-md hover:bg-gray-800 transition"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className=" px-2 py-1 rounded-md hover:bg-gray-800 transition"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className=" px-2 py-1 rounded-md hover:bg-gray-800 transition"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to="/signup"
                  className=" px-2 py-1 rounded-md hover:bg-gray-800 transition"
                >
                  Sign Up
                </Link>
              </li>
              <li>
                <Link
                  to="/logout"
                  className=" px-2 py-1 rounded-md hover:bg-gray-800 transition"
                >
                  Logout
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col justify-center items-center px-6 py-12">
        <div className="max-w-md w-full">
          <h1 className="text-4xl font-semibold text-white mb-8 text-center">
            Welcome
          </h1>

          <Card className="w-full">
            <CardHeader>
              <CardTitle className="text-lg">New App</CardTitle>
              <CardDescription>An Startup App for your needs</CardDescription>
            </CardHeader>

            <CardContent>
              <h1 className="text-5xl font-semibold text-center mb-4 text-blue-600">
                LENDING
              </h1>
            </CardContent>

            <CardFooter className="flex flex-col gap-2">
              <Button variant="outline" className="w-full">
                Join
              </Button>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Home;
