import React from 'react'
import Link from 'next/link'
import HeaderComponent from '../components/ui/Header'


export default function Generate() {
    const Items=[
        {
            title:'Text To Image',
            path:'/generate/text-to-image',
        },
        {
            title:'Face Swap',
            path:'/generate/face-swap',
        },
        {
            title:'Style Transfer',
            path:'/generate/style-transfer',
        }
    ]
  return (
    <div className='bg-[#000814] min-h-[100vh]'>
                {/* <HeaderComponent/> */}
                {/* Content */}
                <div className="w-full p-10">
    
    
    
                  
    
    
    
                    <div className="p-4 sm:p-6  font-semibold space-y-4 space-x-3 sm:space-y-6 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
                        {/* your content goes here ... */}
                        
    
                        {Items.map((val,idx)=>{
                           return <div key={idx} className='border-none rounded-lg p-4 text-gray-300 bg-gray-800 h-[60vh] flex flex-col justify-evenly items-center'>
                            <p className='text-gray-200 font-extrabold text-2xl'>{val.title}</p>
                            <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati et modi corrupti nulla, perspiciatis eaque ex quasi molestiae quae illum ad eveniet amet, ipsam eum ea fuga excepturi exercitationem quo.</p>
                            <Link href={val.path} className='bg-violet-800 w-full flex justify-center items-center font-extrabold text-white h-16 rounded-2xl cursor-pointer hover:bg-violet-900 '>Generate</Link>
    
                        </div>
                        })}
                        

                        
    
                    </div>
    
    
    
    
    
    
                </div>
            </div>
  )
}
