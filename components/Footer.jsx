import React from 'react';
import Image from "next/image";

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="justify-center text-gray-900 body-font bg-pu">
        <div className="object-center vertCtr container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <span className="mt-4 flex title-font font-medium items-center md:justify-start justify-center vertCtr text-gray-900">
            <Image src="/Logo.png" width={45} height={45} />
            <span className="ml-3 text-xl">
              Arnav Singh
            </span>
          </span>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2022 Arnav Singh - All Rights Reserved
          </p>
        </div>
      </footer>
      <br />
    </React.Fragment>
  )
}


export default Footer;