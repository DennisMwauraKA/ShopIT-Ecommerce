import Link from "next/link";
import React from "react";
import Menu from "./Menu";
import Image from "next/image";
import SearchBar from "./SearchBar";
import NavIcons from "./NavIcons";
function Navbar() {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      {/*MOBILE */}
      <div className="h-full flex justify-between items-center md:hidden">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/images/logo.png" alt="image" width={20} height={20} />
          <div>
            <h1 className="text-lg tracking-widest">ShopIT</h1>
          </div>
        </Link>
        <Menu />
      </div>

      {/*BIGGER DEVICE */}
      <div className="hidden md:flex items-center justify-between gap-8 h-full">
        {/*left */}
        <div className="w-1/3 ">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/images/logo.png" alt="image" width={20} height={20} />
            <div>
              <h1 className="text-lg tracking-widest">ShopIT</h1>
            </div>
          </Link>
        </div>
        {/*right */}
        <div className="w-2/3 flex items-center justify-between gap-4">
          <SearchBar />
          <NavIcons />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
