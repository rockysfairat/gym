import Image from "next/image";
import Header from "./Components/Header";
import Prices from "./Components/Prices";
import Equipment from "./Components/Equipment";
import Staff from "./Components/Staff";
import ContactUs from "./Components/ContactUS";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <div className="w-full">
      <Header />
      <main className="bg-navyBlue min-h-fit  flex flex-col items-center">
        <Prices />
        <Equipment />
        <Staff />
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
}
