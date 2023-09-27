import Image from "next/image";

// Data:
import { headerImgs } from "../../../data";

function Header() {
  return (
    <header className="h-screen w-full bg-royalBlue mt-20">
      <Image src="/logo.png" alt="Logotype" width="200" height="200" />
      <h1 className="font-BlackOpsOne text-5xl text-babyBlue">Local Gym</h1>
      <div className="w-full flex overflow-hidden">
        {headerImgs.map(({ url, alt }) => (
          <Image src={url} alt={alt} key={alt} width="500" height="500" />
        ))}
      </div>
    </header>
  );
}

export default Header;
