import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'


const SidebarContent = [
    {
        id: 1,
        name: "Home",
    }, {
        id: 3,
        name: "Music",
    }, {
        id: 4,
        name: "Movies",
    }, {
        id: 5,
        name: "News",
    },
    {
        id: 2,
        name: "Game",
    },
    {
        id: 6,
        name: "Podcasts",
    }, {
        id: 7,
        name: "Live",
    },
]
export const Sidebar = () => {
    const param = useLocation();
    const location = param.pathname.split('/')[2];
    return (
        <div className='w-2/12 h-screen sticky top-16 font-mono hidden sm:flex bg-zinc-900'>
            <ul className='w-full text-zinc-50 text-2xl m-2'>
                {SidebarContent.map((item, id) => {
                    return (
                        <NavLink to={`/search/${item.name}`}>
                            <li id={id} className={location === item.name ?
                                "rounded-md bg-zinc-600  py-2  pl-10 my-2 text-left hover:bg-zinc-700" :
                                " rounded-md py-2 my-2 text-left pl-10 cursor-pointer hover:bg-zinc-700"}>
                                {/* */}
                                <a href={`/search/${item.name}`}>{item.name}</a>
                            </li>
                        </NavLink>
                    )
                })}
            </ul>


        </div>
    )
}
