import React, { useState } from 'react';

import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className='shadow-3xl fixed w-full top-0 bg-white z-50'>
            <div className="px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start h-full">
                        <div className="flex flex-shrink-0 items-center">
                            <NavLink to="/"><img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" /></NavLink>
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex gap-5 items-center h-full">
                                <NavLink to="/je-suis-practicient" className={({ isActive }) => (isActive ? "border-b-solid border-b-[#6366f1] border-b" : "") + " text-slate-600 text-sm font-medium h-full flex items-center transition-all"}>Je suis practicient</NavLink>
                                <NavLink to="/je-suis-patient" className={({ isActive }) => (isActive ? "border-b-solid border-b-[#6366f1] border-b" : "") + " text-slate-600 text-sm font-medium h-full flex items-center transition-all"}  >Chercher un practicient</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-5 items-center pr-2">
                        <NavLink to="/sign-in" className="text-sm font-medium hover:text-indigo-600 transition-all">Se connecter</NavLink>
                        <NavLink to="/sign-up" className="text-sm bg-indigo-600 text-white px-5 py-2.5 rounded-md font-medium transition-all hover:opacity-90">S'enregistrer</NavLink>
                    </div>
                </div>
            </div>

            <div className="sm:hidden" id="mobile-menu">
                <div className="space-y-1 px-2 pb-3 pt-2">
                    <a href="#" className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Dashboard</a>
                    <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Team</a>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;