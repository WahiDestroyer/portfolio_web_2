import Image from "next/image";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Description from "./components/Description";

export default function Home() {
  return (
    <>
    <Navbar />
    <Banner />
    <Description />
    <Footer />
    </>
  );
}
