"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
function SearchBar() {
  const router = useRouter();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    if (name) {
      router.push(`/list?name=${name}`);
    }
  };
  return (
    <div>
      <form
        className="flex  bg-gray-100 rounded-md items-center gap-4 p-2 flex-1"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="name"
          placeholder="Search item"
          className="flex flex-1 outline-none bg-transparent "
        />
        <button className="cursor-pointer">
          <Image src="/images/search.png" alt="search" width={15} height={15} />
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
