import React, { useEffect, useState } from "react";
import data from "../api/eteu.json";

function SelectOption({ countries }: any) {
  return <option>hu</option>;
}

export default function Form() {
  const [countries, setCountries] = useState<{} | null>(null);
  useEffect(() => {
    data.map((temp) => {
      setCountries(temp);
    });
  });

  return (
    <div className='text-white mt-12 flex flex-col items-center justify-center'>
      <div className='text-xl text-left'>
        Please enter your name and pick the continents and countries you have
        visited.
      </div>
      <div className='flex space-x-12 mt-5'>
        <div className='flex flex-col space-y-1'>
          <div>Firstname</div>
          <input
            autoFocus
            type='text'
            className='bg-gray-800 rounded-md px-3 py-1 focus:outline-none'
            placeholder='Firstname'
          />
        </div>
        <div className='flex flex-col space-y-1'>
          <div>Lastname</div>
          <input
            type='text'
            className='bg-gray-800 rounded-md px-3 py-1 focus:outline-none'
            placeholder='Lastname'
          />
        </div>
      </div>
      <div className='flex items-center mt-12 space-x-8'>
        <div>Continents and countries</div>
        <div>
          <select
            className='block appearance-none w-full bg-gray-800 border text-white py-3 px-4 pr-8 rounded leading-tight focus:outline-none outline-none'
            multiple
          >
            <SelectOption countries={countries} />
          </select>
        </div>
      </div>
      <div className='mt-12'>
        <label className='block text-gray-500 font-bold'>
          <input className='mr-2 leading-tight' type='checkbox' />
          <span className='text-sm'>I agree with terms and conditions</span>
        </label>
      </div>
      <div className='mt-4 flex items-center justify-center'>
        <button className='bg-teal-300 text-black italic text-xl px-5 py-2 font-bold rounded-md shadow focus:outline-none hover:bg-teal-600 transition duration-300'>
          Save
        </button>
      </div>
    </div>
  );
}
