import React from "react";
import Link from "next/link";
import Image from "next/image";
const About =()=>{
return(
    <div id="About"><section className="text-gray-600 body-font">
    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
        <Image 
          className="object-cover object-center rounded w-full h-full"
          alt="hero"
          src={require("../../../public/assesst/pictures/Allah Rakkha Pic.png")}
        />
      </div>
      <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          About me
          
        </h1>
        <p className="mb-8 leading-relaxed">
          I am having 12 years experience in the field of education but a young learner in IT field. I have just started my journey form PIAIC and GIAIC as a Generative Artificial Intelligence and Web.03 and Metaverse student.<br/>
          <p>I complete Master in English from Nation University of Modern Languages Karachi.</p>
          <p><ol>
            <li>Phone Number: +923158484279</li>
            <li>WhatsApp: +923158484279</li>
            <li>Email: mabdulqadir37@gmail.com</li>
            </ol></p>
        </p>
        
        <div className="flex justify-center">
          <Link  
          target="_blank"
          href={"/assesst/Cv/AR.pdf"}>
            
          <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            View CV
          </button>
          </Link>
       
        </div>
      </div>
    </div>
  </section>
  </div>
)
}
export default About