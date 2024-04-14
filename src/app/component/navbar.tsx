import React from "react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineCloudDownload } from "react-icons/ai";
const NavBar =()=>{
    return(
        <div className="bg-blue-900 sticky z-50 top-0 text-white"><header className="text-gray-600 body-font">
        <div className="container mx-5 flex flex-wrap p-2 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
       <Image src={require("../../../public/assesst/pictures/WhatsApp Image 2024-04-14 at 8.08.07 PM.jpeg")} alt="Allahrakkha" width={100} height={100}
       className='w-10 h-10 rounded-full'/>
            <span className="ml-3 text-xl text-white">Allah Rakkha Portfolio Web</span>
          </a>
          <nav className=" text-white md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link href={"/"} className="mr-5 hover:text-gray-900">Home</Link>
            <Link href="#About" className="mr-5 hover:text-gray-900">About</Link>
            <Link href="#Skills" className="mr-5 hover:text-gray-900">Skills</Link>
            <Link href="#contact" className="mr-5 hover:text-gray-900">Contact</Link>
            <Link href="#projects" className="mr-5 hover:text-gray-900">Projects</Link>
          </nav>
      
          <Link target="blank"
          href={"/assesst/Cv/AR.pdf"}>
          
          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
           
            Download CV
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
            <AiOutlineCloudDownload className="text-2xl ml-2 mx-2"/>
          </button>
          </Link>
  
        </div>
      </header>
      </div>
    )
}
export default NavBar