import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { NavLink, useNavigate } from 'react-router-dom';

export const Navbar = () => {
  const [text, SetText] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.length < 1) {
      alert('please search something...')
    }
    else {
      navigate(`/search/${text}`)
    }


  }

  return (

    <div className="flex justify-between items-center bg-zinc-900 md:px-20 px-2 h-16 py-3 sticky top-0 left-0 right-0">
      <NavLink to={'/'}>
        <div className="logo flex justify-center items-center">
          <img className='w-20 h-20' src="https://www.logo.wine/a/logo/YouTube/YouTube-Logo.wine.svg" alt="" />
        </div>
      </NavLink>

      <form className=" flex justify-between " onSubmit={handleSubmit}>
        <label className="relative flex items-center">
          <span className="sr-only">Search</span>
          <span className="absolute inset-y-0 left-0 flex items-center  text-2xl pl-2">
            {/* <svg class="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"><!-- ... --></svg> */}
          </span>
          <input onChange={e => SetText(e.target.value)} className="placeholder:italic placeholder:text-slate-400 block bg-gray-600 w-full border border-slate-300 py-1 pl-4 rounded-md md:py-2 md:pl-9 md:pr-3 shadow-sm focus:outline-none focus:border-slates-500 text-white focus:ring-slate-900 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search" />

        </label>
        <button type='submit' className="bg-gray-700 hover:bg-zinc-500 active:bg-zinc-700 focus:outline-none focus:ring rounded-full p-2  mx-2 focus:ring-violet-300 ...">
          <SearchIcon style={{ color: "white" }} />
        </button>
      </form>
    </div>
  )
}
