
import React from "react";
import { CiSquareCheck } from "react-icons/ci";
const Skills =()=>{
    return(
        <div id="Skills"><section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-5 ">
            {/* <h2 className="text-xs text-blue-500 tracking-widest font-medium title-font mb-1">
              Skills
            </h2> */}
            <h1 className="sm:text-3xl text-2xl font-medium title-font mt-3 text-gray-900">
              My Skills
            </h1>
          </div>
          <div className="flex flex-wrap -m-4">
            {/* Skills */}
            <div className="p-4  w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full bg-blue-100 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                  <CiSquareCheck />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    HTML
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative w-full h-1 bg-blue-500 rounded-xl">
                    <div className="absolute bg-red-600 w-full h-1"></div>
                  </div>
                  <p className="leading-relaxed font-bold text-right text-base text-blue-600">
                    100%
                  </p>
                
                </div>
              </div>
            </div>
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full bg-blue-100 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                  <CiSquareCheck />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    CSS
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative w-full h-1 bg-blue-500 rounded-xl">
                    <div className="absolute bg-red-600 w-[90%] h-1"></div>
                  </div>
                  <p className="leading-relaxed font-bold text-right text-base text-blue-600">
                    90%
                  </p>
                
                </div>
              </div>
            </div>
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full bg-blue-100 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                  <CiSquareCheck />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    Typescript
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative w-full h-1 bg-blue-500 rounded-xl">
                    <div className="absolute bg-red-600 w-[70%] h-1"></div>
                  </div>
                  <p className="leading-relaxed font-bold text-right text-base text-blue-600">
                    70%
                  </p>
                
                </div>
              </div>
            </div>
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full bg-blue-100 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                  <CiSquareCheck />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    NEXT JS
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative w-full h-1 bg-blue-500 rounded-xl">
                    <div className="absolute bg-red-600 w-[50%] h-1"></div>
                  </div>
                  <p className="leading-relaxed font-bold text-right text-base text-blue-600">
                    50%
                  </p>
                
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full bg-blue-100 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                  <CiSquareCheck />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    MS Office
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative w-full h-1 bg-blue-500 rounded-xl">
                    <div className="absolute bg-red-600 w-[95%] h-1"></div>
                  </div>
                  <p className="leading-relaxed font-bold text-right text-base text-blue-600">
                    95%
                  </p>
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    )
}
export default Skills
