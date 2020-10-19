import React from "react";
import Header from "../shared/Header";

export default function Navbar() {
  return (
    <div className='bg-gray-800 shadow flex justify-between items-center p-4'>
      <Header>eTeu Task</Header>
      <div className='italic text-white text-xs'>
        developed by <span className='font-bold'>Bulent Eroglu</span>
      </div>
    </div>
  );
}
