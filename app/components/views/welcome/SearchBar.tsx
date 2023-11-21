"use client";
import React from "react";
//-----> Components <---------------------------------------------//
import { BiSearch } from "react-icons/bi";
//----------------------------------------------------------------------------------//
//-----> END OF IMPORTS <-------------------------------------//
//----------------------------------------------------------------------------------//

const SearchBar = () => {
  return (
    <div className="flex items-center relative">
      <BiSearch className="text-grayish text-sm w-4 h-4 absolute left-3" />
      <input
        id="search"
        type="text"
        placeholder="Find Your Saas"
        className="min-w-lg pl-12 py-2 outline-none text-sm bg-transparent border-b border-b-[#848484] border-opacity-30 w-[304px] placeholder:text-emperor placeholder:opacity-30 text-opacity-90 text-emperor"
        // onChange={(e) => {
        //   onSearch(e.target.value);
        // }}
      />
    </div>
  );
};

export default SearchBar;
