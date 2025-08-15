"use client"
import React, { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import HeaderComponent from '../../components/ui/Header'
import Dropzone from 'react-dropzone'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Urls } from '../../utils/urls'

const urls = Urls()
export default function QueryEntry() {
    const params = useParams()
    const [data, setData] = useState({
        prompt_data: '',
        image_1: null,
        image_2: null,
        url_path: null
    })


    const sendPrompt = async () => {
        const response = await fetch(urls.text_to_image, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({'prompt':data.prompt_data})
        });

        const responseData = await response.json();
        console.log(responseData)
        if (!response.ok) {

            return responseData

        } else {
            if (response.status == 200) {

                console.log(responseData)
            }

        }

    }



    return (
        <div className='bg-[#000814] min-h-[100vh]'>

            <HeaderComponent />
            {/* Content */}
            <div className="w-full lg:ps-64">






                <div className="p-4 sm:p-6 space-y-4 space-x-3 sm:space-y-6 grid md:grid-cols-2">
                    {/* your content goes here ... */}
                    <div className='space-y-10 flex  items-center flex-col'>




                        {['text-to-image', 'style-transfer'].includes(params.query) ?


                            <div className="relative border border-gray-400 rounded-full w-full">
                                <input onChange={e => { setData({ ...data, 'prompt_data': e.target.value }) }} type="text" className="p-3 sm:p-4 block w-full border-gray-200 text-white outline-none rounded-full sm:text-md focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Enter a prompt..." />
                                <div className="absolute top-1/2 end-2 -translate-y-1/2">
                                    {/* <button type="button" className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:text-gray-800 focus:outline-hidden focus:text-gray-800 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-white dark:focus:text-white">
                                        <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path><path d="M12 12v9"></path><path d="m16 16-4-4-4 4"></path></svg>
                                    </button> */}
                                    <button type="button" onClick={sendPrompt} className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-100 hover:text-gray-300 focus:outline-hidden focus:text-gray-300 bg-violet-700 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 dark:bg-violet-700 dark:hover:text-white dark:focus:text-white">
                                        <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z"></path>
                                        </svg>                                </button>
                                </div>
                            </div>

                            :
                            ''

                        }







                        {['face-swap', 'style-transfer'].includes(params.query) ?


                            <FileDropzone />


                            :

                            ''

                        }


                        {params.query === 'face-swap' &&

                            <FileDropzone />
                        }





                    </div>


                    <div className='border-2 rounded-lg border-gray-600 h-[80vh] flex justify-center items-center'>
                        <p className='text-gray-300 font-extrabold text-2xl'>No generated content</p>



                    </div>

                </div>






            </div>
        </div>
    )
}



const FileDropzone = () => (
    <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
        {({ getRootProps, getInputProps }) => (
            <section className='md:w-[80%]'>
                <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    <div className="cursor-pointer p-12 h-[50vh] w-[100%] flex justify-center bg-gray-800 border shadow-2xl border-none border-gray-300 rounded-xl dark:bg-neutral-800 dark:border-neutral-600 dz-clickable">
                        <div className="text-center h-full">
                            <span className="inline-flex justify-center items-center size-16">
                                <svg className="shrink-0 w-16 h-auto" width="71" height="51" viewBox="0 0 71 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.55172 8.74547L17.7131 6.88524V40.7377L12.8018 41.7717C9.51306 42.464 6.29705 40.3203 5.67081 37.0184L1.64319 15.7818C1.01599 12.4748 3.23148 9.29884 6.55172 8.74547Z" stroke="#2563EB" strokeWidth="2"></path>
                                    <path d="M64.4483 8.74547L53.2869 6.88524V40.7377L58.1982 41.7717C61.4869 42.464 64.703 40.3203 65.3292 37.0184L69.3568 15.7818C69.984 12.4748 67.7685 9.29884 64.4483 8.74547Z" stroke="#2563EB" strokeWidth="2"></path>
                                    <g filter="url(#filter1)">
                                        <rect x="17.5656" y="1" width="35.8689" height="42.7541" rx="5" stroke="#2563EB" strokeWidth="2" shapeRendering="crispEdges"></rect>
                                    </g>
                                    <path d="M39.4826 33.0893C40.2331 33.9529 41.5385 34.0028 42.3537 33.2426L42.5099 33.0796L47.7453 26.976L53.4347 33.0981V38.7544C53.4346 41.5156 51.1959 43.7542 48.4347 43.7544H22.5656C19.8043 43.7544 17.5657 41.5157 17.5656 38.7544V35.2934L29.9728 22.145L39.4826 33.0893Z" className="fill-blue-50 dark:fill-blue-900/50" fill="currentColor" stroke="#2563EB" strokeWidth="2"></path>
                                    <circle cx="40.0902" cy="14.3443" r="4.16393" className="fill-blue-50 dark:fill-blue-900/50" fill="currentColor" stroke="#2563EB" strokeWidth="2"></circle>
                                    <defs>
                                        <filter id="filter1" x="13.5656" y="0" width="43.8689" height="50.7541" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                                            <feOffset dy="3"></feOffset>
                                            <feGaussianBlur stdDeviation="1.5"></feGaussianBlur>
                                            <feComposite in2="hardAlpha" operator="out"></feComposite>
                                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"></feColorMatrix>
                                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1"></feBlend>
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1" result="shape"></feBlend>
                                        </filter>
                                    </defs>
                                </svg>
                            </span>
                            <div className="mt-4 flex flex-wrap justify-center text-sm/6 text-gray-600">
                                <span className="pe-1 font-medium text-gray-100 dark:text-neutral-200">Drop your file here or</span>
                                <span className="bg-white font-semibold text-blue-600 hover:text-blue-700 rounded-lg decoration-2 hover:underline focus-within:outline-hidden focus-within:ring-2 focus-within:ring-blue-600 focus-within:ring-offset-2 dark:bg-neutral-800 dark:text-blue-500 dark:hover:text-blue-600">
                                    browse
                                </span>
                            </div>
                            <p className="mt-1 text-xs text-gray-200 dark:text-neutral-400">Pick a file up to 2MB.</p>
                        </div>
                    </div>
                </div>
            </section>
        )}
    </Dropzone>
)
