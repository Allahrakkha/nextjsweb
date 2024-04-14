import react from "react";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
    return (
        <div>
            <footer className="text-gray-600 body-font">
                <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                        <Image src={require("../../../public/assesst/pictures/WhatsApp Image 2024-04-14 at 8.08.07 PM.jpeg")} alt="flickedu" width={50} height={50}
       />
                        <span className="ml-3 text-xl">flickeducation</span>
                    </a>
                    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
                     
                        <a
                            href="https://twitter.com/knyttneve"
                            className="text-gray-600 ml-1"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            @allahrakkha37
                        </a>
                    </p>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                        <Link target="blank" href={"https://web.facebook.com/home.php"} className="text-gray-500">
                        <AiFillFacebook className="text-xl hover:bg-blue-500 hover:text-green-100"/>
                        </Link>
                                                
                        <Link target="blank" href= {"https://www.linkedin.com/in/allah-rakkha-qadri-5592b0117/"}className="ml-3 text-gray-500">
                        <AiFillLinkedin className="text-xl "/>
                        </Link>
                    </span>
                </div>
            </footer>

        </div>
    )
}
export default Footer