"use client";


import { motion } from "motion/react";

export function HeroSectionOne() {
  
  return (
    <div
      className="relative mx-auto my-0 flex max-w-7xl flex-col items-center justify-center">
      {/* <Navbar /> */}

      <div className=" absolute bottom-0 h-[40vh] z-50 hidden md:block bg-[radial-gradient(100%_50%_at_50%_90%,rgba(0,163,255,0.13)_5%,rgba(0,163,255,0)_60%,rgba(0,163,255,0)_90%)] w-full">
               
              </div>
      
      <div className="relative px-4 py-0 md:py-20">
       
        <motion.div
          // initial={{
          //   opacity: 0,
          //   y: 10,
          // }}
          // animate={{
          //   opacity: 1,
          //   y: 0,
          // }}
          transition={{
            duration: 0.3,
            delay: 1.2,
          }}
          className="relative -top-14 md:-top-32 h-[80vh] md:h-full z-20 mt-0 rounded-3xl border  bg-neutral-800 p-4 shadow-md dark:border-neutral-100 dark:bg-neutral-900 hero_img">
          <div
            className="w-full overflow-hidden rounded-xl border h-[100%] border-gray-600 dark:border-gray-700">
            <img
              src="https://res.cloudinary.com/dtt4nxboi/image/upload/v1753462059/b6a682c698aa6fcfee6411cb9b187f10_ihnetg.png"
              alt="Landing page preview"
              className="aspect-[16/9] h-[100%] md:h-auto w-full object-cover"
              height={1000}
              width={1000} />
          </div>

          <div className="absolute  rounded-3xl h-[100%]
           w-full 
         
            bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border 
           z-30 bottom-0 left-0 hero_overlay"></div>
        </motion.div>
      
      
      </div>
    </div>
  );
}

const Navbar = () => {
  return (
    <nav
      className="flex w-full items-center justify-between border-t border-b border-neutral-200 px-4 py-4 dark:border-neutral-800">
      <div className="flex items-center gap-2">
        <div
          className="size-7 rounded-full bg-gradient-to-br from-violet-500 to-pink-500" />
        <h1 className="text-base font-bold md:text-2xl">Aceternity UI</h1>
      </div>
      <button
        className="w-24 transform rounded-lg bg-black px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 md:w-32 dark:bg-white dark:text-black dark:hover:bg-gray-200">
        Login
      </button>
    </nav>
  );
};
