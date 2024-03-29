// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-blue-700 ">
      <div className="justify-between mx-10 py-8 grid grid-cols-1 lg:grid-cols-2">
        <div className="">
          <h1 className="text-[4rem] text-white"><span className="text-white bg-black rounded-lg py-4 px-4 font-mono">Help</span>|Center</h1>
          <div className="flex space-x-28 mt-4 text-white">
            <h3>Email</h3>
            <p>hello@helpcenter.com</p>
          </div>
          <div className="flex space-x-12 text-white">
            <h3>Phone Number</h3>
            <p>+(250) 784 418 127</p>
          </div>
        </div>
        <div>
          <h1 className="font-bold text-3xl mt-4 text-white">
            Get Started With Our Application <br></br>Now Create Account For
            Free
          </h1>
          <div className="flex gap-4 mt-4">
          <Link to="/sign-in">
          <button className="rounded-2xl border-white  px-4 py-1 bg-white">
              Get Start
            </button>
          </Link>
            
          </div>
        </div>
      </div>

      {/* // social media */}

      <div className="justify-between mx-10 py-8 grid grid-cols-1 lg:grid-cols-2">
        <div className="">
          <div className="flex space-x-12 text-white">
            <h3>Available on all social media</h3>
          </div>
        </div>
        <div>
          <div className="md:after:flex  ">
            <button className="rounded-2xl border-white border-[1px] px-4 py-1 text-white m-2 ">
              Instgram
            </button>
            <button className="rounded-2xl border-white border-[1px] px-4 py-1 text-white m-2 ">
              Facebook
            </button>
            <button className="rounded-2xl border-white border-[1px] px-4 py-1 text-white m-2 ">
              X(Twitter)
            </button>
            <button className="rounded-2xl border-white border-[1px] px-4 py-1 text-white m-2 ">
              LinkedIn
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
