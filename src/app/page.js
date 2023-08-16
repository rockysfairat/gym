import Image from "next/image";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Prices from "./Components/Prices";
import Equipment from "./Components/Equipment";
import Staff from "./Components/Staff";
import ContactUs from "./Components/ContactUS";

export default function Home() {
  return (
    <main className="bg-navyBlue min-h-fit">
      <Header />
      <Nav />
      <Prices />
      <Equipment />
      <Staff />
      <ContactUs />
    </main>
  );
}
