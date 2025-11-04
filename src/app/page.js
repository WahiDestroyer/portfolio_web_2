import Image from "next/image";
import Navbar from "./Home/Navbar";
import Banner from "./Home/Banner";
import Footer from "./Home/Footer";
import Description from "./Home/Description";
import About from "./Home/About";

export default function Home() {
  return (
    <>
    <Navbar />
    <Banner />
    <Description />
    <About />
    <Footer />
    </>
  );
}
