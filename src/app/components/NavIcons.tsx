"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import CartModal from "./CartModal";
function NavIcons() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const router = useRouter();
  const isLoggedIn = false;
  const handleProfileChange = () => {
    if (!isLoggedIn) {
      router.push("/login");
    }
    setIsProfileOpen((prev) => !prev);
  };

  return (
    <div>
      <div className="flex items-center gap-4 xl:gap-6 relative">
        <Image
          src="/images/profile.png"
          alt=""
          width={20}
          height={20}
          className="cursor-pointer"
          onClick={handleProfileChange}
        />
        {isProfileOpen && (
          <div className="absolute rounded-md top-12 left-0 bg-gray-300 w-full flex flex-col items-center h-auto z-20">
            <Link href="/">Profile</Link>
            <div className=" cursor-pointer">Logout</div>
          </div>
        )}
        <Image
          src="/images/notification.png"
          alt=""
          width={20}
          height={20}
          className="cursor-pointer"
        />

        <Image
          src="/images/cart.png"
          alt=""
          width={20}
          height={20}
          className="cursor-pointer"
          onClick={() => setIsCartOpen((prev) => !prev)}
        />
        {isCartOpen && <CartModal />}
      </div>
    </div>
  );
}

export default NavIcons;
