import React, { useState } from 'react'
import listApps from '../../models/listApps';

function Menu() {
    
    const [open, setOpen] = useState(false);
    
    return (
        
        // ****************** Start Menu **********************
        <div className='shadow w-full '>
            <div className='md:flex items-center bg-[#f1eee9] py-2 md:px-10 px-7'>

                {/* ********* Start Logo *********** */}

                <div className='font-bold text-2xl cursor-pointer flex items-center font-[Questrial]  text-[#15133C] '>
                    
                    <span className='text-3xl text-[#EC994B] mr-1 pt-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
                        </svg>
                    </span>

                    <span>Farhat</span>
                    
                </div>
                {/* ********* Fin Logo *********** */}

                {/* ********* Start Button open and close menu mobile *********** */}

                <div onClick={() => setOpen(!open)} className='text-3xl absolute right-7 top-3 cursor-pointer md:hidden'>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>

                </div>

                {/* ********* Fin Button open and close menu mobile *********** */}

                {/* ********* Start App navigation menu *********** */}

                <ul className={` bg-[#f1eee9] md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[1] left-0  w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-19 ' : 'top-[-490px]'}`}>
                    {
                        listApps.map((link) => (
                            <li key={link.name} className='md:ml-8 text-lg md:my-0 my-7 '>
                                <a href={link.link} className='text-[#15133C] hover:text-gray-400 duration-500' >{link.name}</a>
                            </li>
                        ))}
                </ul>

                {/* ********* Fin App navigation menu *********** */}
            </div>
        </div>
        // ****************** Fin Menu **********************
    )
}

export default Menu