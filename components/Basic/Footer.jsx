import Image from "next/image";
import React from 'react';

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="justify-center text-gray-900 body-font bg-pu">
        <div className="object-center vertCtr container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <span className="mt-4 flex title-font font-medium items-center md:justify-start justify-center vertCtr text-gray-900">
            <Image alt="Logo" src="/logo.png" width={35} height={35} />
            <span className="ml-3 text-xl">
              Arnav Singh
            </span>
          </span>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 mt-4 sm:mt-0 ">
            © 2022 Arnav Singh - All Rights Reserved
          </p>
        </div>
      </footer>
    </React.Fragment>
  )
}


export default Footer;