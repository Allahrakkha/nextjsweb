import React from "react";
import Link from "next/link";
import Image from "next/image";

const Project=()=>{
    return(
        <div id="projects">
<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
       My Projects
      </h1>
          </div>
    <div className="flex flex-wrap -m-4">
        {/* Projects */}
      <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../../public/assesst/projects/calculator.png")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
            Typescript
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              <ul>
                <li>CL Calculator</li>
                
              </ul>
            </h1>
            <p className="leading-relaxed line-clamp-2">
              This projects were created as assignments given by sir Hamza in Typescript.
            </p>
            
            <Link target="_blank" 
            href={"https://www.npmjs.com/package/cmd_calculator"}>
            
            <p className="leading-relaxed text-blue-500 hover:underline">
              View Project
            </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../../public/assesst/projects/calculator.png")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
            Typescript
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              <ul>
                <li>CL Calculator</li>
                
              </ul>
            </h1>
            <p className="leading-relaxed line-clamp-2">
              This projects were created as assignments given by sir Hamza in Typescript.
            </p>
            
            <Link target="_blank" 
            href={"https://www.npmjs.com/package/cmd_calculator"}>
            
            <p className="leading-relaxed text-blue-500 hover:underline">
              View Project
            </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../../public/assesst/projects/number game.png")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
            Typescript
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              <ul>
              
                <li>CL Number Guessing Game</li>
                
              </ul>
            </h1>
            <p className="leading-relaxed">
              This projects were created as assignments given by sir Hamza in Typescript.
            </p>
            
            <Link target="_blank" 
            href={"https://www.npmjs.com/package/cmd02-number-game"}>
            
            <p className="leading-relaxed text-blue-500 hover:underline">
              View Project
            </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

        </div>
    )
}
export default Project