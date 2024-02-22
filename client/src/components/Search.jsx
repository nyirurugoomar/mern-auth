// eslint-disable-next-line no-unused-vars
import React from "react";

function Search() {
  return (
    <>
      <div className=" p-20 w-full h-[25rem] bg-Search-bg bg-cover  ">
        <div>
          <section className=" ">
            <div className="">
              <h2 className="text-center text-white text-3xl mb-4 font-bold">
                Welcome
              </h2>
              <div className="flex flex-bold md:flex-row items-center md:items-stretch md:justify-center mt-4">
                <input
                  className="p-2 rounded-l-lg md:w-3/5 focus:outline-none"
                  type="search"
                  placeholder="Search..... "
                />
                <button className="bg-[#1B1464] p-2 md:p-4 text-white rounded-r-lg md:rounded-r-[20px] font-bold ">
                  Search
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Search;
