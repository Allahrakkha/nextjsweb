import Image from "next/image";
import NavBar from "./component/navbar";
import Hero from "./component/hero";

export default function Home() {
  return (
    <div>
     <Hero/>
      <NavBar/>
    </div>
  );
}
