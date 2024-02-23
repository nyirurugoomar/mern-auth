// Search component
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import axios from "axios";

// eslint-disable-next-line react/prop-types
function Search({ setFilteredCards }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5173/api/card/search?term=${searchTerm}`
      );
      setFilteredCards(response.data);
    } catch (error) {
      console.error("Error searching cards:", error);
    }
  };

  return (
    <div className="p-20 w-full h-[25rem] bg-Search-bg bg-cover">
      <div>
        <section className="">
          <div className="">
            <h2 className="text-center text-white text-3xl mb-4 font-bold">
              Welcome
            </h2>
            <div className="flex flex-bold md:flex-row items-center md:items-stretch md:justify-center mt-4">
              <input
                className="p-2 rounded-l-lg md:w-3/5 focus:outline-none"
                type="search"
                placeholder="Search..... "
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button
                onClick={handleSearch}
                className="bg-[#1B1464] p-2 md:p-4 text-white rounded-r-lg md:rounded-r-[20px] font-bold"
              >
                Search
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Search;
