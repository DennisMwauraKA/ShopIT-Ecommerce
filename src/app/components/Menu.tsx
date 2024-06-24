"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
function Menu() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Image
        src="/images/menu.png"
        alt="My menu"
        width={30}
        height={30}
        className="cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      />
     {open && (
        <div className="flex flex-col absolute left-0 top-20 bg-black text-white w-full items-center h-[calc(100vh-80px)]">
            <Link href='/'>Home</Link>
            <Link href='/'>Shop</Link>
            <Link href='/'>Cart</Link>
            <Link href='/'>Orders</Link>
        </div>
     )}
    </div>
  );
}

export default Menu;
