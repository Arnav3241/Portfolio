import Link from 'next/link';
import React from 'react'

const NotFound = () => {
  return (
    <div className="-mt-10" >
      <div className="min-w-screen min-h-screen bg-blue-100 flex items-center p-5 lg:p-20 overflow-hidden relative">
        <div className="flex-1 min-h-full min-w-full rounded-3xl bg-white shadow-xl p-10 lg:p-20 text-gray-800 relative md:flex items-center text-center md:text-left">
          <div className="w-full md:w-1/2">
            <div className="mb-4 text-blue-300 text-9xl font-bold">
              404
            </div>
            <div className="text-gray-600 font-light">
              <h1 className="font-black uppercase text-3xl lg:text-5xl text-yellow-500 mb-10">You seem to be lost!</h1>
              <p>The page you're looking for isn't available.</p>
              <p>Try searching again or use the Go Back button below.</p>
            </div>
              <Link href="/" >
                <h3 className="mt-2 text-xl cursor-pointer" > Go Back </h3> 
              </Link>
          </div>
          <div className="w-full md:w-1/2 text-center">
            <img alt="Error" src="/Error.jpg" />
          </div>
        </div>
        <div className="w-64 md:w-96 h-96 md:h-full bg-blue-200 bg-opacity-30 absolute -top-64 md:-top-96 right-20 md:right-32 rounded-full pointer-events-none -rotate-45 transform"></div>
        <div className="w-96 h-full bg-yellow-200 bg-opacity-20 absolute -bottom-96 right-64 rounded-full pointer-events-none -rotate-45 transform"></div>
      </div>
    </div>
  )
}

export default NotFound;