"use client"
import "./globals.css";
import Image from "next/image";
import { CompareDemo } from "../../components/CompareDemo";
import { ThreeDMarqueeDemoSecond } from "../../components/ThreeDMarqueeDemoSecond";
import { Lato } from "next/font/google";
import { InfiniteMovingCardsDemo } from "../../components/InfiniteMovingCardsDemo";
import { BackgroundBeamsWithCollision } from "./components/ui/background-beams-with-collision";
import { BentoGridSecondDemo } from "../../components/BentoGridSecondDemo";
import { Spotlight } from "./components/ui/Spotlight";
import { SpotlightPreview } from "../../components/SpotlightPreview";
import { NavbarDemo } from "../../components/NavbarDemo";
import Footer from "../../components/Footer";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { Observer } from "gsap/Observer";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// ScrollSmoother requires ScrollTrigger
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { TextPlugin } from "gsap/TextPlugin";
import { HeroSectionOne } from "../../components/HeroSectionOne";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion"
import { StickyScrollRevealDemo } from "../../components/StickyScrollRevealDemo";
import { Goldman } from "next/font/google";

const LatoFont = Lato({
  weight: '400',
  subsets: ["latin"],
});

const GoldmanFont = Goldman({
  weight: '400',
  subsets: ["latin"],
});

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
// gsap.registerPlugin(ScrollSmoother);
// gsap.registerPlugin(ScrollToPlugin);
export default function Home() {

  const HighLightRef = useRef()

  useGSAP(() => {
    const features_content = gsap.utils.toArray('.features_content')
    const highlight = gsap.utils.toArray('.highlight')

    gsap.from('.highlight', {
      scrollTrigger: {
        trigger: ".highlight_holder",
        start: "40% top",
        // end:"bottom top",
        // markers: true,
        // pin:true,
        scrub: true,
        onEnter: () => {
          // console.log(element)
        },

      },

      y: 20,
      opacity: 0,
      stagger: 0.3,

    })


    gsap.from('.hero_img', {
      scrollTrigger: {
        trigger: ".hero_img",
        start: "top 40%",
        // end:"top bottom",
        // markers:true,
        // scrub:true
      },
      y: 40,
      opacity: 0,

    })


    gsap.to('.hero_overlay', {
      scrollTrigger: {
        trigger: ".hero_img",
        start: "5% 20%",
        pin: true,
        end: "bottom 60%",
        // markers: true,
        scrub: true,
        // snap:1
      },
      height: 0,


    })


    gsap.from(features_content, {
      scrollTrigger: {
        trigger: ".features_content_holder",
        // markers:true,
        start: "top 20%",

      },
      x: -20,
      opacity: 0,
      stagger: 0.5

    })

    gsap.to('.compare_overlay', {
      scrollTrigger: {
        trigger: '.compare',
        start: '-30% 10%',
        end: '60% 30%',
        // markers: true,
        scrub: true,


      },
      translateX: 0,
      //  ease:"expo.in"

    })

    gsap.from('.compare_desc', {
      scrollTrigger: {
        trigger: '.compare',
        start: '-30% top',
        end: '60% 30%',
        // markers: true,
        scrub: true,


      },
      
      opacity:0,
      x:-20,
      stagger:2,
      delay:2,
      //  ease:"expo.in"

    })

  })





  const framer_2_content = `Turns your ideas into gallery-worthy visuals. Explore concepts without limits`

  const framer_1_content = `We have made image generation as simple as typing a message.
              No loading, no lag — just lightning-fast output.
              Choose your style, write a prompt, and go.
              See results in seconds.
              Download in high resolution instantly.
              Use it on web, mobile, or tablet.
              Fast, powerful, and fun to use.
              This is creative freedom on demand`

  const framer_2 = useRef(null)
  const { scrollYProgress } = useScroll({
    target: framer_2,
    offset: ["start 0.6", "start 0.25"]
  })

  const framer_words = framer_2_content.split(" ")
  const framer_1_words = framer_1_content.split(" ")


  return (
    <div className="w-full min-h-[120vh] bg-[#000814] pt-0">

      <NavbarDemo>
        <div className="relative bg-linear-to-b mx-auto    [background:radial-gradient(105%_125%_at_50%_10%,#1b263b_35%,black_50%)] min-h-[120vh] flex flex-col header  ">
          {/* <div class="absolute inset-0 z-10 h-full w-full items-center px-5 py-24 "> */}


          <BackgroundBeamsWithCollision>
            <SpotlightPreview>
              <div className="w-full flex flex-col   space-y-8 px-4 sm:px-6 lg:px-8 z-20 md:translate-y-0 translate-y-[30%] ">
                {/* Announcement Banner */}
                <div className="flex justify-center">
                  <a className="group inline-flex items-center bg-white/10 hover:bg-white/10 border border-white/10 p-1 ps-4 rounded-full shadow-md focus:outline-hidden focus:bg-white/10" href="../figma.html">
                    <p className="me-2 text-white text-sm">
                      Watch Now
                    </p>
                    <span className="group-hover:bg-white/10 py-1.5 px-2.5 flex justify-center items-center gap-x-2 rounded-full bg-white/10 font-semibold text-white text-sm">
                      <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                    </span>
                  </a>
                </div>
                {/* End Announcement Banner */}

                {/* Title */}
                <div className="max-w-3xl text-center mx-auto  ">
                  <h1 className="block font-extrabold text-gray-200 text-5xl sm:text-5xl md:text-7xl lg:text-8xl">
                    Your Creativity Enhanced by AI, Your<span className="text-violet-600"> Visual Story</span>
                  </h1>
                </div>
                {/* End Title */}

                <div className="max-w-3xl text-center mx-auto ">
                  {/* <p className={`text-lg text-white `}>Turns your ideas into gallery-worthy visuals. <br />Explore concepts without limits — fast, flexible, and fun.</p> */}
                </div>






                {/* Input */}
                <div className="relative md:w-[60%] md:mx-auto focus:border-0">
                  <textarea className="p-3 sm:p-4 pb-12 sm:pb-12 block w-full  bg-transparent text-white border-gray-400 border-2 rounded-2xl sm:text-sm  focus:ring-blue-500" placeholder="Ask me anything..."></textarea>

                  {/* Toolbar */}
                  <div className="absolute bottom-px inset-x-px p-2 rounded-b-lg bg-transparent">
                    <div className="flex flex-wrap justify-between items-center gap-2">
                      {/* Button Group */}
                      <div className="flex items-center">
                        {/* Mic Button */}
                        <button type="button" className="inline-flex shrink-0 justify-center items-center size-8 rounded-lg text-gray-500 hover:bg-white focus:z-10 focus:outline-hidden focus:bg-white">
                          <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" /><line x1="9" x2="15" y1="15" y2="9" /></svg>
                        </button>
                        {/* End Mic Button */}

                        {/* Attach Button */}
                        <button type="button" className="inline-flex shrink-0 justify-center items-center size-8 rounded-lg text-gray-500 hover:bg-white focus:z-10 focus:outline-hidden focus:bg-white">
                          <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" /></svg>
                        </button>
                        {/* End Attach Button */}
                      </div>
                      {/* End Button Group */}

                      {/* Button Group */}
                      <div className="flex items-center gap-x-1">
                        {/* Mic Button */}
                        <button type="button" className="inline-flex shrink-0 justify-center items-center size-8 rounded-lg text-gray-500 hover:bg-white focus:z-10 focus:outline-hidden focus:bg-white">
                          <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /><line x1="12" x2="12" y1="19" y2="22" /></svg>
                        </button>
                        {/* End Mic Button */}

                        {/* Send Button */}
                        <button type="button" className="inline-flex shrink-0 justify-center items-center size-8 rounded-lg text-white bg-linear-to-tl from-[#054a91] to-violet-600 shadow-lg  hover:bg-blue-500 focus:z-10 focus:outline-hidden focus:bg-blue-500">

                          <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
                          </svg>
                        </button>
                        {/* End Send Button */}
                      </div>
                      {/* End Button Group */}
                    </div>
                  </div>
                  {/* End Toolbar */}
                </div>
                {/* End Input */}


              </div>


            </SpotlightPreview>


          </BackgroundBeamsWithCollision>

        </div>

        <HeroSectionOne />



        <div className="relative max-w-[85rem] w-full text-7xl  md:text-9xl space-y-16 px-14 py-10 sm:px-6 lg:px-44 lg:py-14 text-gray-100  x mx-auto text-center
        highlight_holder font-medium
        bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]">
          <p className="highlight relative md:text-left  md:text-white ">Make  </p>
          <p className="highlight md:text-center">Images That <span className="text-violet-600">Speak</span></p>
          <p className="highlight z-20 md:text-right md:text-white">Volumes</p>


          {/* <div className="highlight  text-left w-full  py-2">
            <p className="md:text-white left-0  ">Make Images </p>
          </div>

          <div className="highlight w-full relative right-0 py-2 text-center">
            <p> That <span className="text-violet-600 ">Speak</span></p>
          </div>


          <div className="highlight w-full py-2 text-right">
            <p className="md:text-white">Volumes</p>


          </div> */}


          {/* <div className="absolute bg-[whitesmoke]  top-8 left-0 md:h-[30%] md:w-[40%]"></div> */}

          {/* <div className="absolute bg-[whitesmoke]   bottom-10 right-0 md:h-[30%] md:w-[40%]"></div> */}

        </div>









        <InfiniteMovingCardsDemo />
        <div className="relative compare w-full h-[120vh] px-2 md:px-20 flex flex-col lg:flex-row md:flex-col text-[whitesmoke] items-center">
          <div className="lg:w-[60%]  " >
            <p className="font-semibold text-3xl lg:text-8xl md:text-7xl">Built for Speed and Simplicity</p><br />

            {
              framer_1_words.map((word, i) => {
                return <span className="font-extralight md:text-2xl  text-gray-300 compare_desc" key={i}> {word}</span>
              })
            }

          </div>

          <div className=" relative overflow-hidden ">

            {/* <div className=" w-full h-full "> */}
            <Image
              src={'https://res.cloudinary.com/dtt4nxboi/image/upload/v1753187232/srefhunt-image-to-prompt-768x480_fuabnr.png'}
              height={1000}
              width={1000}
              className="rounded-lg"
              alt="compare_prompt"
            />
            {/* </div> */}


            <div className="compare_overlay absolute top-0 right-0 w-full translate-x-[100%] h-full aspect-[4/3]">

              <Image
                src={'https://res.cloudinary.com/dtt4nxboi/image/upload/v1753396197/2151719581_qodysa.jpg'}
                height={1000}
                width={1000}
                className="rounded-lg w-full h-full object-fill inset-0"
                 alt="compare_generated_image"
              />
            </div>
          </div>

          {/* <CompareDemo /> */}
          {/* <svg className="absolute -bottom-[60%] left-0 z-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000814" fillOpacity="1" d="M0,256L720,128L1440,0L1440,0L720,0L0,0Z"></path></svg> */}

        </div>

        <div className="relative w-full min-h-[120vh] bg-transparent">



          <BentoGridSecondDemo />

          {/* Pricing */}
          <div className="max-w-[85rem] px-4 py-20 sm:px-6 lg:px-8 lg:py-14 mx-auto mt-36 text-white bg-[radial-gradient(100%_50%_at_50%_100%,rgba(0,163,255,0.13)_5%,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]">
            {/* Title */}
            <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-20">
              <h2 className="text-2xl font-bold md:text-4xl md:leading-tight">Pricing</h2>
              <p className="mt-1 text-gray-600">Whatever your status, our offers evolve according to your needs.</p>
            </div>
            {/* End Title */}


            {/* Grid */}
            <div className={["mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:items-center font-extrabold", GoldmanFont.className]}>
              {/* Card */}
              <div className="flex flex-col md:h-[70vh] border border-gray-200 text-center bg-[whitesmoke] rounded-xl p-8">
                <h4 className="font-extrabold text-lg text-gray-800">Free</h4>
                <span className="mt-7 font-extrabold text-5xl text-gray-800">Free</span>
                <p className="mt-2 text-sm font-extrabold text-gray-500">Forever free</p>

                <ul className="mt-7 space-y-2.5 text-sm">
                  <li className="flex gap-x-2">
                    <svg className="shrink-0 mt-0.5 size-4 text-blue-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                    <span className="text-gray-800">
                      1 user
                    </span>
                  </li>

                  <li className="flex gap-x-2">
                    <svg className="shrink-0 mt-0.5 size-4 text-blue-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                    <span className="text-gray-800">
                      Plan features
                    </span>
                  </li>

                  <li className="flex gap-x-2">
                    <svg className="shrink-0 mt-0.5 size-4 text-blue-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                    <span className="text-gray-800">
                      Product support
                    </span>
                  </li>
                </ul>

                <a className="mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-extrabold rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-50" href="#">
                  Sign up
                </a>
              </div>
              {/* End Card */}

              {/* Card */}
              <div className="flex flex-col md:h-[80vh] border-2 border-blue-600 text-center shadow-xl bg-[whitesmoke] rounded-xl p-8">
                <p className="mb-3"><span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-lg text-xs uppercase font-semibold bg-blue-100 text-blue-800">Most popular</span></p>
                <h4 className="font-medium text-lg text-gray-800">Startup</h4>
                <span className="mt-5 font-bold text-5xl text-gray-800">
                  <span className="font-bold text-2xl -me-2">$</span>
                  39
                </span>
                <p className="mt-2 text-sm text-gray-500">All the basics for starting a new business</p>

                <ul className="mt-7 space-y-2.5 text-sm">
                  <li className="flex gap-x-2">
                    <svg className="shrink-0 mt-0.5 size-4 text-blue-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                    <span className="text-gray-800">
                      2 users
                    </span>
                  </li>

                  <li className="flex gap-x-2">
                    <svg className="shrink-0 mt-0.5 size-4 text-blue-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                    <span className="text-gray-800">
                      Plan features
                    </span>
                  </li>

                  <li className="flex gap-x-2">
                    <svg className="shrink-0 mt-0.5 size-4 text-blue-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                    <span className="text-gray-800">
                      Product support
                    </span>
                  </li>
                </ul>

                <a className="mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-extrabold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" href="#">
                  Sign up
                </a>
              </div>
              {/* End Card */}

              {/* Card */}
              <div className="flex flex-col md:h-[70vh] border border-gray-200 text-center bg-[whitesmoke] rounded-xl p-8">
                <h4 className="font-medium text-lg text-gray-800">Team</h4>
                <span className="mt-5 font-bold text-5xl text-gray-800">
                  <span className="font-bold text-2xl -me-2">$</span>
                  89
                </span>
                <p className="mt-2 text-sm text-gray-500">Everything you need for a growing business</p>

                <ul className="mt-7 space-y-2.5 text-sm">
                  <li className="flex gap-x-2">
                    <svg className="shrink-0 mt-0.5 size-4 text-blue-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                    <span className="text-gray-800">
                      5 users
                    </span>
                  </li>

                  <li className="flex gap-x-2">
                    <svg className="shrink-0 mt-0.5 size-4 text-blue-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                    <span className="text-gray-800">
                      Plan features
                    </span>
                  </li>

                  <li className="flex gap-x-2">
                    <svg className="shrink-0 mt-0.5 size-4 text-blue-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                    <span className="text-gray-800">
                      Product support
                    </span>
                  </li>
                </ul>

                <a className="mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-extrabold rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-50" href="#">
                  Sign up
                </a>
              </div>
              {/* End Card */}


            </div>
            {/* End Grid */}


          </div>
          {/* End Pricing */}





          {/* Features */}
          <div className="max-w-[85rem]  px-4 py-10 sm:px-6 lg:px-14 lg:py-14 mx-auto bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]" ref={framer_2}>
            {/* <div class="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"></div> */}
            {/* Grid */}
            <div className="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
              <p className="font-extralight text-3xl lg:text-8xl text-gray-100 flex flex-wrap" >
                {
                  framer_words.map((word, i) => {

                    return (<FramerDesc key={i} word={word} framer_words={framer_words} i={i} scrollYProgress={scrollYProgress} />)
                  })
                }
              </p>

              {/* End Col */}

              <div className="mt-5 sm:mt-10 lg:mt-0">
                <div className="space-y-6 sm:space-y-8">
                  {/* Title */}
                  <div className=" relative space-y-2 md:space-y-4 features_content_holder">

                    <div className="features_content z-10 flex p-5 justify-center items-center rounded-xl md:absolute top-54 backdrop-blur-3xl bg-[#000814] md:h-[60vh]  md:w-[70%] float-right">
                      <p className="text-gray-100 ">
                        Besides working with start-up enterprises as a partner for digitalization, we have built enterprise products for common pain points that we have encountered in various products and projects.
                      </p>
                    </div>

                    <div className="features_content  md:h-[90vh] md:w-[70%] float-right
                    relative  w-full max-w-md rounded-3xl bg-white/5 backdrop-blur-sm p-2 shadow-2xl border border-white/10
                    ">
                      <Image className="rounded-xl md:h-[100%]  md:w-[100%]  " height={1000} width={1000} src={"https://res.cloudinary.com/dtt4nxboi/image/upload/v1753396179/2151719638_cgsfrf.jpg"} alt="Features Image" />
                      {/* <div className="absolute  rounded-xl h-[100%]
                        w-full 

                        "></div> */}
                    </div>


                  </div>
                  {/* End Title */}


                </div>
              </div>
              {/* End Col */}
            </div>
            {/* End Grid */}
          </div>
          {/* End Features */}




        </div>






        {/* FAQ */}
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          {/* Title */}
          <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
            <h2 className="text-2xl font-bold md:text-4xl text-white md:leading-tight">FAQ</h2>
            <p className="mt-1 text-gray-100">Answers to the most frequently asked questions.</p>
          </div>
          {/* End Title */}

          <div className="max-w-2xl mx-auto">
            {/* Accordion */}
            <div className="hs-accordion-group">
              <div className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 active" id="hs-basic-with-title-and-arrow-stretched-heading-one">
                <button className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-hidden focus:text-gray-500" aria-expanded="true" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one">
                  Can I cancel at anytime?
                  <svg className="hs-accordion-active:hidden block shrink-0 size-5 text-gray-100 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                  <svg className="hs-accordion-active:block hidden shrink-0 size-5 text-gray-100 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6" /></svg>
                </button>
                <div id="hs-basic-with-title-and-arrow-stretched-collapse-one" className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one">
                  <p className="text-gray-400">
                    Yes, you can cancel anytime no questions are asked while you cancel but we would highly appreciate if you will give us some feedback.
                  </p>
                </div>
              </div>

              <div className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6" id="hs-basic-with-title-and-arrow-stretched-heading-two">
                <button className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-hidden focus:text-gray-500" aria-expanded="false" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-two">
                  My team has credits. How do we use them?
                  <svg className="hs-accordion-active:hidden block shrink-0 size-5 text-gray-100 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                  <svg className="hs-accordion-active:block hidden shrink-0 size-5 text-gray-100 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6" /></svg>
                </button>
                <div id="hs-basic-with-title-and-arrow-stretched-collapse-two" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-two">
                  <p className="text-gray-400">
                    Once your team signs up for a subscription plan. This is where we sit down, grab a cup of coffee and dial in the details.
                  </p>
                </div>
              </div>

              <div className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6" id="hs-basic-with-title-and-arrow-stretched-heading-three">
                <button className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-hidden focus:text-gray-500" aria-expanded="false" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-three">
                  How does Preline's pricing work?
                  <svg className="hs-accordion-active:hidden block shrink-0 size-5 text-gray-100 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                  <svg className="hs-accordion-active:block hidden shrink-0 size-5 text-gray-100 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6" /></svg>
                </button>
                <div id="hs-basic-with-title-and-arrow-stretched-collapse-three" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-three">
                  <p className="text-gray-400">
                    Our subscriptions are tiered. Understanding the task at hand and ironing out the wrinkles is key.
                  </p>
                </div>
              </div>

              <div className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6" id="hs-basic-with-title-and-arrow-stretched-heading-four">
                <button className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-hidden focus:text-gray-500" aria-expanded="false" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-four">
                  How secure is Preline?
                  <svg className="hs-accordion-active:hidden block shrink-0 size-5 text-gray-100 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                  <svg className="hs-accordion-active:block hidden shrink-0 size-5 text-gray-100 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6" /></svg>
                </button>
                <div id="hs-basic-with-title-and-arrow-stretched-collapse-four" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-four">
                  <p className="text-gray-400">
                    Protecting the data you trust to Preline is our first priority. This part is really crucial in keeping the project in line to completion.
                  </p>
                </div>
              </div>

              <div className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6" id="hs-basic-with-title-and-arrow-stretched-heading-five">
                <button className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-hidden focus:text-gray-500" aria-expanded="false" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-five">
                  How do I get access to a theme I purchased?
                  <svg className="hs-accordion-active:hidden block shrink-0 size-5 text-gray-100 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                  <svg className="hs-accordion-active:block hidden shrink-0 size-5 text-gray-100 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6" /></svg>
                </button>
                <div id="hs-basic-with-title-and-arrow-stretched-collapse-five" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-five">
                  <p className="text-gray-400">
                    If you lose the link for a theme you purchased, don't panic! We've got you covered. You can login to your account, tap your avatar in the upper right corner, and tap Purchases. If you didn't create a login or can't remember the information, you can use our handy Redownload page, just remember to use the same email you originally made your purchases with.
                  </p>
                </div>
              </div>

              <div className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6" id="hs-basic-with-title-and-arrow-stretched-heading-six">
                <button className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-hidden focus:text-gray-500" aria-expanded="false" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-six">
                  Upgrade License Type
                  <svg className="hs-accordion-active:hidden block shrink-0 size-5 text-gray-100 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                  <svg className="hs-accordion-active:block hidden shrink-0 size-5 text-gray-100 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6" /></svg>
                </button>
                <div id="hs-basic-with-title-and-arrow-stretched-collapse-six" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-six">
                  <p className="text-gray-400">
                    There may be times when you need to upgrade your license from the original type you purchased and we have a solution that ensures you can apply your original purchase cost to the new license purchase.
                  </p>
                </div>
              </div>
            </div>
            {/* End Accordion */}
          </div>
        </div>
        {/* End FAQ */}


        <Footer />

      </NavbarDemo>

    </div>

  );
}


const FramerDesc = ({ word, framer_words, i, scrollYProgress }) => {

  const start = i / framer_words.length
  const end = start + (1 / framer_words.length)
  const opacity = useTransform(scrollYProgress, [start, end], [0, 1])

  return (
    <span className="relative mr-2 mt-2" key={i}>
      <span className="absolute opacity-[0.3]">{word}</span>
      <motion.span key={i} style={{ opacity: opacity }}>{word}</motion.span>

    </span>
  )

}
