import React, { useEffect, useState } from "react";
import data from "../api/eteu.json";

function SelectOption({ name }: { name: string }) {
  return <option value={name}>{name}</option>;
}

export default function Form() {
  const [countries, setCountries] = useState<Array<string>>([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  function handleChange(e: any) {
    setCountries(
      [...e.target.options]
        .filter(({ selected }) => selected)
        .map(({ value }) => value)
    );
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    localStorage.setItem(
      "you Markkus?",
      JSON.stringify({
        firstName,
        lastName,
        countries,
      })
    );
  }

  useEffect(() => {
    if (localStorage.getItem("you Markkus?")) {
      const data = JSON.parse(localStorage.getItem("you Markkus?") || "{}");
      setFirstName(data.firstName);
      setLastName(data.lastName);
      setCountries(data.countries);
    }
  }, []);

  return (
    <form
      onSubmit={handleSubmit}
      className='text-white mt-12 flex flex-col items-center justify-center'
    >
      <div className='text-xl text-left'>
        Please enter your name and pick the continents and countries you have
        visited.
      </div>
      <div className='flex space-x-12 mt-5'>
        <div className='flex flex-col space-y-1'>
          <div>Firstname</div>
          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            autoFocus
            type='text'
            className='bg-gray-800 rounded-md px-3 py-1 focus:outline-none'
            placeholder='Firstname'
          />
        </div>
        <div className='flex flex-col space-y-1'>
          <div>Lastname</div>
          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
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
            value={countries}
            onChange={(e) => handleChange(e)}
            required
            className='block appearance-none w-full bg-gray-800 border text-white py-3 px-4 pr-8 rounded leading-tight focus:outline-none outline-none'
            multiple
          >
            {data.map((countries: any, i) => (
              <SelectOption key={i} name={countries.name} />
            ))}
          </select>
        </div>
      </div>
      <div className='mt-12'>
        <label className='block text-gray-500 font-bold'>
          <input className='mr-2 leading-tight' type='checkbox' required />
          <span className='text-sm'>I agree with terms and conditions</span>
        </label>
      </div>
      <div className='mt-4 flex items-center justify-center'>
        <button
          type='submit'
          className='bg-teal-300 text-black italic text-xl px-5 py-2 font-bold rounded-md shadow focus:outline-none hover:bg-teal-600 transition duration-300'
        >
          Save
        </button>
      </div>
    </form>
  );
}
