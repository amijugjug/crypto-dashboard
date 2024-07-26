"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import debounce from "lodash.debounce";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleSearch = debounce((term: string) => {
    router.push(`/search?query=${term}`);
  }, 300);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
    handleSearch(term);
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    router.push(`/`);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div
          className="text-white text-lg font-bold cursor-pointer"
          onClick={handleLogoClick}
        >
          Crypto Dashboard
        </div>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleChange}
          className="px-4 py-2 rounded bg-white text-black"
        />
      </div>
    </nav>
  );
};

export default Navbar;
