import Image from "next/image";

function Header() {
  return (
    <header className="h-screen w-3/6 bg-royalBlue">
      <Image src="/logo.png" alt="Logotype" width="200" height="200" />
      <h1 className="font-BlackOpsOne text-5xl text-babyBlue">Local Gym</h1>
    </header>
  );
}

export default Header;
