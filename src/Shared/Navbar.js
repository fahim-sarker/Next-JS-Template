"use client"
import React, { useState, useEffect, useRef } from "react";

const Navbar = () => {
    const menuRef = useRef(null);
    const [open, setOpen] = useState(false);
    const [serviceOpen, setServiceOpen] = useState(false);

    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        if (open) document.addEventListener("mousedown", handleOutsideClick);
        return () => document.removeEventListener("mousedown", handleOutsideClick);
    }, [open]);

    return (
        <nav className="w-full bg-white shadow sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
                <h1 className="text-2xl font-bold">MyLogo</h1>
                <div className="hidden lg:flex items-center gap-8">
                    <ul className="flex items-center gap-8 text-lg font-medium">
                        <li className="cursor-pointer hover:text-blue-600 transition">Home</li>
                        <li className="cursor-pointer hover:text-blue-600 transition">About</li>
                        <li className="relative group cursor-pointer">
                            <div className="flex items-center gap-1">
                                <span className="hover:text-blue-600 transition">Services</span>
                                <span className="text-sm transition-transform duration-300">
                                    <span className="group-hover:hidden">▼</span>
                                    <span className="hidden group-hover:inline">▲</span>
                                </span>
                            </div>
                            <div
                                className="absolute top-full left-0 mt-2 w-44 bg-white shadow-md rounded-md p-3
                                opacity-0 invisible group-hover:opacity-100 group-hover:visible
                                translate-y-2 group-hover:translate-y-0 transition-all duration-300 z-50"
                            >
                                <ul className="flex flex-col gap-2 text-base">
                                    <li className="hover:text-blue-600 cursor-pointer transition">Web Development</li>
                                    <li className="hover:text-blue-600 cursor-pointer transition">UI/UX Design</li>
                                    <li className="hover:text-blue-600 cursor-pointer transition">SEO Optimization</li>
                                </ul>
                            </div>
                        </li>
                        <li className="cursor-pointer hover:text-blue-600 transition">Blog</li>
                    </ul>
                    <div className="flex items-center gap-4">
                        <button className="px-4 py-2 rounded-md border border-blue-600 text-blue-600 font-medium hover:bg-blue-50 transition">Contact</button>
                        <button className="px-4 py-2 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition">Login</button>
                    </div>
                </div>
                <button onClick={() => setOpen(true)} className="lg:hidden text-2xl">☰</button>
            </div>
            {open && <div className="fixed inset-0 bg-black/40 lg:hidden"></div>}
            <div ref={menuRef} className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg
        transform ${open ? "translate-x-0" : "-translate-x-full"}
        transition-all duration-300 ease-in-out z-50`}>
                <div className="p-4 flex items-center justify-between border-b">
                    <h2 className="text-xl font-semibold">Menu</h2>
                    <button onClick={() => setOpen(false)} className="text-2xl">✕</button>
                </div>

                <ul className="p-4 flex flex-col gap-6 text-lg font-medium">
                    <li className="cursor-pointer hover:text-blue-600 transition">Home</li>
                    <li className="cursor-pointer hover:text-blue-600 transition">About</li>
                    <li>
                        <div onClick={() => setServiceOpen(!serviceOpen)} className="flex items-center justify-between cursor-pointer hover:text-blue-600 transition">
                            <span>Services</span>
                            <span>{serviceOpen ? "▲" : "▼"}</span>
                        </div>
                        <div className={`overflow-hidden transition-all duration-300 ${serviceOpen ? "max-h-40 mt-2" : "max-h-0"}`}>
                            <ul className="flex flex-col gap-2 pl-4 text-base">
                                <li className="cursor-pointer hover:text-blue-600 transition">Web Development</li>
                                <li className="cursor-pointer hover:text-blue-600 transition">UI/UX Design</li>
                                <li className="cursor-pointer hover:text-blue-600 transition">SEO Optimization</li>
                            </ul>
                        </div>
                    </li>
                    <li className="cursor-pointer hover:text-blue-600 transition">Blog</li>
                </ul>
                <div className="px-4 mt-6 flex flex-col gap-3">
                    <button className="px-4 py-2 rounded-md border border-blue-600 text-blue-600 font-medium hover:bg-blue-50 transition">Contact</button>
                    <button className="px-4 py-2 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition">Login</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
