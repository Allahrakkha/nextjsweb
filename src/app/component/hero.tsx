"use client"
import react from "react"
import Typewriter from 'typewriter-effect';
import Image from "next/image"
import Link from "next/link";

const Hero =()=>{
    return(
        <div className="bg-blue-200">
<section className="text-gray-600 body-font bg-center bg-fixed bg-cover custom-image">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        I am;
        <br className="hidden lg:inline-block" />
        <Typewriter
  options={{
    strings: ['Full Stack Web Developer'],
    autoStart: true,
    loop: true,
  }}
/>
      </h1>
      <div className="w-[300px] h-[2px] bg-blue-700"></div>
      <p className="mb-8 leading-relaxed">
        Having vast experience in education field, but fresh in IT world. I just started Artificial Intelligence Course in governor house.
        I just jumped into the IT Ocean and learning Typescript. My some of the projects are;
        CL Calculator.
        Cl Number Gussing Game;
        Cl ATM Machine;
        Cl Todos List;
      </p>
      <div className="flex justify-center">
        <Link href="#contact">
        <button className="inline-flex text-white bg-blue-900 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Contact
        </button>
        </Link>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full px-20 md:w-1/2 w-5/6">
      <Image
        className="object-cover object-center rounded-full w-72 h-72 "
        alt="hero"
        width={800}
        height={800}
        src={require('../../../public/assesst/pictures/Allah Rakkha Pic.png')}
      />
    </div>
  </div>
</section>

        </div>
    )
}
export default Hero