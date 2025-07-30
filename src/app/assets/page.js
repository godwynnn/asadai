"use client"
import React from 'react'
import Dropzone from 'react-dropzone'
import HeaderComponent from '../components/ui/Header'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'

export default function Dashboard() {
    return (
        <div className='bg-[#000814] min-h-[100vh]'>
            
            <HeaderComponent/>
            {/* Content */}
            <div className="w-full lg:ps-64">
              



              <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                <h3 className='text-white text-4xl font-extrabold'><FontAwesomeIcon icon={faBriefcase}/>Library</h3> <br />
  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
    <div className="space-y-2">
      <img className="w-full h-auto object-cover" src="https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80" alt="Gallery Masonry Image" />
      <img className="w-full h-auto object-cover" src="https://images.unsplash.com/photo-1668906093328-99601a1aa584?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80" alt="Gallery Masonry Image" />
      <img className="w-full h-auto object-cover" src="https://images.unsplash.com/photo-1567016526105-22da7c13161a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80" alt="Gallery Masonry Image" />
    </div>
    <div className="space-y-2">
      <img className="w-full h-auto object-cover" src="https://images.unsplash.com/photo-1668584054131-d5721c515211?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80" alt="Gallery Masonry Image" />
      <img className="w-full h-auto object-cover" src="https://images.unsplash.com/photo-1664574654529-b60630f33fdb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80" alt="Gallery Masonry Image" />
    </div>
    <div className="space-y-2">
      <img className="w-full h-auto object-cover" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80" alt="Gallery Masonry Image" />
      <img className="w-full h-auto object-cover" src="https://images.unsplash.com/photo-1586232702178-f044c5f4d4b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80" alt="Gallery Masonry Image" />
      <img className="w-full h-auto object-cover" src="https://images.unsplash.com/photo-1542125387-c71274d94f0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80" alt="Gallery Masonry Image" />
    </div>
    <div className="space-y-2">
      <img className="w-full h-auto object-cover" src="https://images.unsplash.com/photo-1668869713519-9bcbb0da7171?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80" alt="Gallery Masonry Image" />
      <img className="w-full h-auto object-cover" src="https://images.unsplash.com/photo-1668584054035-f5ba7d426401?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80" alt="Gallery Masonry Image" />
    </div>
  </div>
</div>







            </div>
        </div>
    )
}
