import React from 'react'
import Link from 'next/link'
import Image from "next/image";

export default function HeaderComponent() {
    return (
        <>
            <header className="sticky top-0 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-48 w-full bg-[#000814] border-b border-gray-700 text-sm py-2.5 lg:ps-65">
                <nav className="px-4 sm:px-6 flex basis-full items-center w-full mx-auto">
                    <div className="me-5 lg:me-0 lg:hidden">
                        {/* Logo */}
                        <Link  className="flex-none text-white rounded-md text-xl inline-block font-semibold focus:outline-hidden focus:opacity-80" href="/dashboard" aria-label="Preline">
                            LOGO
                        </Link>
                        {/* End Logo */}

                        <div className="lg:hidden ms-1">

                        </div>
                    </div>

                    <div className="w-full flex items-center justify-end ms-auto md:justify-between gap-x-1 md:gap-x-3">

                        <div className="hidden md:block">
                            {/* Search Input */}
                            <div className="relative border-2 border-gray-400 rounded-full ">
                                <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-3.5">
                                    <svg className="shrink-0 size-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                                </div>
                                <input type="text" className="py-2 ps-10 pe-16 block w-full bg-transparent border-gray-200 text-white font-bold rounded-lg text-sm focus:outline-hidden focus:border-blue-500 focus:ring-blue-500 checked:border-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Search" />
                                <div className=" absolute inset-y-0 end-0 flex items-center z-20 pe-1">
                                    <button type="button" className="inline-flex shrink-0 justify-center items-center size-6 rounded-full text-gray-500 hover:text-blue-600 focus:outline-hidden focus:text-blue-600" aria-label="Close">
                                        <span className="sr-only">Close</span>
                                        <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="m15 9-6 6" /><path d="m9 9 6 6" /></svg>
                                    </button>
                                </div>
                                <div className="absolute inset-y-0 end-0 flex items-center pointer-events-none z-20 pe-3 text-gray-400">
                                    <svg className="shrink-0 size-3 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" /></svg>
                                    <span className="mx-1">
                                        <svg className="shrink-0 size-3 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
                                    </span>
                                    <span className="text-xs">/</span>
                                </div>
                            </div>
                            {/* End Search Input */}
                        </div>

                        <div className="flex flex-row items-center justify-end gap-1">
                            <button type="button" className="md:hidden size-9.5 relative inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-200 hover:bg-gray-700 focus:outline-hidden disabled:opacity-50 disabled:pointer-events-none">
                                <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                                <span className="sr-only">Search</span>
                            </button>

                            <button type="button" className="size-9.5 relative inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-200 hover:bg-gray-700 focus:outline-hidden disabled:opacity-50 disabled:pointer-events-none">
                                <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" /><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" /></svg>
                                <span className="sr-only">Notifications</span>
                            </button>

                            <button type="button" className="size-9.5 relative inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-200 hover:bg-gray-700 focus:outline-hidden  disabled:opacity-50 disabled:pointer-events-none">
                                <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
                                <span className="sr-only">Activity</span>
                            </button>

                            {/* Dropdown */}
                            <div className="hs-dropdown [--placement:bottom-right] relative inline-flex">
                                <button id="hs-dropdown-account" type="button" className="size-9.5 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 focus:outline-hidden disabled:opacity-50 disabled:pointer-events-none" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                    <Image className="shrink-0 size-9.5 rounded-full" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Avatar" />
                                </button>

                                <div className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-60 bg-white shadow-md rounded-lg mt-2 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full" role="menu" aria-orientation="vertical" aria-labelledby="hs-dropdown-account">
                                    <div className="py-3 px-5 bg-gray-100 rounded-t-lg">
                                        <p className="text-sm text-gray-500">Signed in as</p>
                                        <p className="text-sm font-medium text-gray-800">james@site.com</p>
                                    </div>
                                    <div className="p-1.5 space-y-0.5">
                                        <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100" href="#">
                                            <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" /><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" /></svg>
                                            Newsletter
                                        </a>
                                        <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100" href="#">
                                            <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" /></svg>
                                            Purchases
                                        </a>
                                        <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100" href="#">
                                            <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" /><path d="M12 12v9" /><path d="m8 17 4 4 4-4" /></svg>
                                            Downloads
                                        </a>
                                        <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100" href="#">
                                            <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                                            Team Account
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* End Dropdown */}
                        </div>
                    </div>
                </nav>
            </header>
            {/* ========== END HEADER ========== */}

            {/* ========== MAIN CONTENT ========== */}
            <div className="-mt-px">
                {/* Breadcrumb */}
                <div className="sticky top-0 inset-x-0 z-20 bg-white border-y border-gray-200 px-4 sm:px-6 lg:px-8 lg:hidden">
                    <div className="flex items-center py-2">
                        {/* Navigation Toggle */}
                        <button type="button" className="size-8 flex justify-center items-center gap-x-2 border border-gray-200 text-gray-800 hover:text-gray-500 rounded-lg focus:outline-hidden focus:text-gray-500 disabled:opacity-50 disabled:pointer-events-none" aria-haspopup="dialog" aria-expanded="false" aria-controls="hs-application-sidebar" aria-label="Toggle navigation" data-hs-overlay="#hs-application-sidebar">
                            <span className="sr-only">Toggle Navigation</span>
                            <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" /><path d="M15 3v18" /><path d="m8 9 3 3-3 3" /></svg>
                        </button>
                        {/* End Navigation Toggle */}

                        {/* Breadcrumb */}
                        <ol className="ms-3 flex items-center whitespace-nowrap">
                            <li className="flex items-center text-sm text-gray-800">
                                Application Layout
                                <svg className="shrink-0 mx-3 overflow-visible size-2.5 text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            </li>
                            <li className="text-sm font-semibold text-gray-800 truncate" aria-current="page">
                                Dashboard
                            </li>
                        </ol>
                        {/* End Breadcrumb */}
                    </div>
                </div>
                {/* End Breadcrumb */}
            </div>

            {/* Sidebar */}
            <div id="hs-application-sidebar" className="hs-overlay  [--auto-close:lg]
  hs-overlay-open:translate-x-0
  -translate-x-full transition-all duration-300 transform
  w-65 h-full
  hidden
  fixed inset-y-0 start-0 z-60
  bg-[#000814] border-e border-gray-700
  lg:block lg:translate-x-0 lg:end-auto lg:bottom-0
 " role="dialog" tabIndex="-1" aria-label="Sidebar">
                <div className="relative flex flex-col h-full max-h-full">
                    <div className="px-6 pt-4 flex items-center">
                        {/* Logo */}
                        <Link className="flex-none text-white rounded-xl text-xl inline-block font-semibold focus:outline-hidden focus:opacity-80" href="/dashboard"  aria-label="Preline">
                            LOGO
                        </Link>
                        {/* End Logo */}

                        <div className="hidden lg:block ms-2">

                        </div>
                    </div>

                    {/* Content */}
                    <div className="h-full overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300">
                        <nav className="hs-accordion-group p-3 w-full flex flex-col flex-wrap" data-hs-accordion-always-open>
                            <ul className="flex flex-col space-y-1">
                                <li>
                                    <Link className="flex items-center gap-x-3.5 py-2 px-2.5 bg-gray-800 text-md text-white rounded-lg hover:bg-gray-700 focus:outline-hidden focus:bg-gray-700" href="/dashboard" >
                                        <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
                                        Dashboard
                                    </Link>
                                </li>


                                <li>
                                    <Link className="flex items-center gap-x-3.5 py-2 px-2.5 bg-gray-800 text-md text-white rounded-lg hover:bg-gray-700 focus:outline-hidden focus:bg-gray-700" href="/assets" >
                                        <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
                                        Assets
                                    </Link>
                                </li>


                                <li>
                                    <a className="flex items-center gap-x-3.5 py-2 px-2.5 bg-gray-800 text-md text-white rounded-lg hover:bg-gray-700 focus:outline-hidden focus:bg-gray-700" href="#">
                                        <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                                        Commuity
                                    </a>
                                </li>







                            </ul>
                        </nav>
                    </div>
                    {/* End Content */}
                </div>
            </div>
            {/* End Sidebar */}

        </>
    )
}
