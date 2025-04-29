import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import img from "../../assets/image/img.png"

const NavbarMenu = [
  {
    id: 1,
    title: "Features",
    path: "/",
  },
  {
    id: 2,
    title: "About",
    path: "/",
  },
  {
    id: 3,
    title: "Contact",
    path: "/",
  },
  {
    id: 4,
    title: "Blog",
    path: "/",
  },
];

const Navbar = () => {

  return (
    <nav className=" bg-white shadow-sm ">
      <div className="container mx-auto py-4 px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img alt="logo" className="h-8 w-auto" src={img} />
        </div>

        {/* Navigation Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <ul className="flex items-center gap-3">
            {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                <a href={menu.path}
                className="inline-block py-2 px-3 hover:text-secondary relative group">
                  {menu.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Buttons */}
        <div className="flex items-center space-x-4">
          <button className="px-4 py-2 border border-gray-500 rounded-full text-gray-700 hover:bg-gray-100">
            Log in
          </button>
          <button className="px-4 py-2 bg-green-400 text-white rounded-full hover:bg-green-500">
            Get started now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
