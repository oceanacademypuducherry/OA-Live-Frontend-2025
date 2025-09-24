"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import {
  AiOutlineHome,
  AiOutlineInfoCircle,
  AiOutlineBook,
  AiOutlineMail,
  AiOutlineLogin,
} from "react-icons/ai";
import { FaUsers, FaClipboardList, FaImages } from "react-icons/fa";
import { BsGear } from "react-icons/bs";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { OCEAN } from "@/assets/navbar";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Mobile sidebar
  const [servicesOpenMobile, setServicesOpenMobile] = useState(false); // Mobile dropdown
  const [openDropdown, setOpenDropdown] = useState(false); // Desktop/Tablet dropdown

  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();

  // Close desktop/tablet dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(false);
      }
    };
    if (openDropdown) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openDropdown]);

  // Top-level links
  const links = [
    { to: "/", label: "Home", icon: <AiOutlineHome /> },
    { to: "/about-us", label: "About Us", icon: <AiOutlineInfoCircle /> },
    { to: "/services", label: "Services", icon: <BsGear />, dropdown: true },
    { to: "/gallery", label: "Gallery", icon: <FaImages /> },
    { to: "/courses", label: "Courses", icon: <AiOutlineBook /> },
    { to: "/contact-us", label: "Contact Us", icon: <AiOutlineMail /> },
    { to: "/login", label: "Login", icon: <AiOutlineLogin /> },
  ];

  const servicesSubLinks = [
    { to: "/services", label: "Our Services", icon: <BsGear />, external: false },
    { to: "https://candidate.oceanacademy.co.in/", label: "Job Portal", icon: <FaUsers />, external: true },
    { to: "/editor", label: "Editor", icon: <AiOutlineBook />, external: false },
    { to: "https://placement.oceanacademy.co.in/", label: "Placement", icon: <FaClipboardList />, external: true },
  ];

  return (
    <header className="w-full bg-white text-black shadow-sm sticky top-0 z-50">
      <nav className="px-4 md:px-10 py-4">
        {/* ------------------- Desktop ≥1280px ------------------- */}
        <div className="hidden xl:flex items-center justify-between">
          <Image src={OCEAN} alt="Ocean Academy Logo" width={260} height={80} className="h-auto w-[200px] md:w-[260px]" priority />

          <div className="flex items-center gap-[38px] 2xl:gap-[60px]">
            {links.map((link) =>
              link.dropdown ? (
                <div key={link.to} className="relative" ref={dropdownRef}>
                  <span
                    onClick={() => setOpenDropdown(!openDropdown)}
                    className={`cursor-pointer text-[18px] font-medium transition flex items-center gap-1 ${
                      pathname.startsWith("/services")
                        ? "text-sky-500"
                        : "text-[#000000BE] hover:text-sky-500"
                    }`}
                  >
                    {link.label}
                    {openDropdown ? <BiChevronUp size={18} /> : <BiChevronDown size={18} />}
                  </span>

                  {openDropdown && (
                    <div className="absolute left-0 mt-3 w-48 bg-white shadow-lg rounded-md flex flex-col z-50">
                      {servicesSubLinks.map((sublink) =>
                        sublink.external ? (
                          <a
                            key={sublink.to}
                            href={sublink.to}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 text-[16px] transition hover:text-sky-500"
                          >
                            {sublink.label}
                          </a>
                        ) : (
                          <Link key={sublink.to} href={sublink.to} className="px-4 py-2 text-[16px] transition hover:text-sky-500">
                            {sublink.label}
                          </Link>
                        )
                      )}
                    </div>
                  )}
                </div>
              ) : link.label === "Login" ? (
                <Link
                  key={link.to}
                  href={link.to}
                  className="px-10 py-2 rounded-[14px] font-medium border-2 transition text-[18px] bg-sky-500 text-white hover:bg-white hover:text-sky-500 hover:border-sky-500"
                >
                  {link.label}
                </Link>
              ) : (
                <Link
                  key={link.to}
                  href={link.to}
                  className={`text-[18px] font-medium transition ${pathname === link.to ? "text-sky-500" : "text-[#000000BE] hover:text-sky-500"}`}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>
        </div>

        {/* ------------------- Tablet <1280px & ≥768px ------------------- */}
        <div className="hidden md:flex xl:hidden flex-col items-center gap-4">
          <Image src={OCEAN} alt="Ocean Academy Logo" width={260} height={80} className="h-auto w-[200px] md:w-[260px]" priority />
          <div className="flex flex-wrap justify-center items-center gap-[20px] md:gap-[30px]">
            {links.map((link) =>
              link.dropdown ? (
                <div key={link.to} className="relative" ref={dropdownRef}>
                  <span
                    onClick={() => setOpenDropdown(!openDropdown)}
                    className={`cursor-pointer text-[16px] font-medium transition flex items-center gap-1 ${
                      pathname.startsWith("/services")
                        ? "text-sky-500"
                        : "text-[#000000BE] hover:text-sky-500"
                    }`}
                  >
                    {link.label}
                    {openDropdown ? <BiChevronUp size={16} /> : <BiChevronDown size={16} />}
                  </span>

                  {openDropdown && (
                    <div className="absolute left-0 mt-3 w-48 bg-white shadow-lg rounded-md flex flex-col z-50">
                      {servicesSubLinks.map((sublink) =>
                        sublink.external ? (
                          <a key={sublink.to} href={sublink.to} target="_blank" rel="noopener noreferrer" className="px-4 py-2 text-[16px] transition hover:text-sky-500">
                            {sublink.label}
                          </a>
                        ) : (
                          <Link key={sublink.to} href={sublink.to} className="px-4 py-2 text-[16px] transition hover:text-sky-500">
                            {sublink.label}
                          </Link>
                        )
                      )}
                    </div>
                  )}
                </div>
              ) : link.label === "Login" ? (
                <Link key={link.to} href={link.to} className="flex items-center h-[42px] px-8 rounded-[14px] font-medium border-2 transition text-[16px] bg-sky-500 text-white hover:bg-white hover:text-sky-500 hover:border-sky-500">
                  {link.label}
                </Link>
              ) : (
                <Link key={link.to} href={link.to} className={`flex items-center h-[42px] text-[16px] font-medium transition ${pathname === link.to ? "text-sky-500" : "text-[#000000BE] hover:text-sky-500"}`}>
                  {link.label}
                </Link>
              )
            )}
          </div>
        </div>

        {/* ------------------- Mobile <768px ------------------- */}
        <div className="flex md:hidden items-center justify-between">
          <Image src={OCEAN} alt="Ocean Academy Logo" width={230} height={60} className="h-auto" priority />
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} className="text-sky-500" /> : <Menu size={28} className="text-sky-500" />}
          </button>
        </div>

        {/* ------------------- Mobile Sidebar ------------------- */}
        {isOpen && (
          <>
            <div className="fixed inset-0 bg-gray-700/50 z-40" onClick={() => setIsOpen(false)} />
            <div className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between px-5 py-6 shadow-md bg-white">
                  <Image src={OCEAN} alt="Ocean Academy Logo" width={170} height={50} />
                  <button onClick={() => setIsOpen(false)} className="p-1 border-2 border-red-500 rounded-full text-red-500">
                    <X size={15} />
                  </button>
                </div>

                <div className="flex flex-col px-4 py-6 gap-2 text-gray-600 text-sm">
                  {links.map((link) =>
                    link.dropdown ? (
                      <div key={link.to}>
                        <button
                          className={`group relative flex items-center justify-between gap-3 w-full px-4 py-3 rounded-lg border transition ${
                            pathname.startsWith("/services") ? "text-sky-600 bg-sky-50 border-sky-500" : "text-gray-600 border-transparent hover:text-sky-600 hover:bg-sky-50"
                          }`}
                          onClick={() => setServicesOpenMobile(!servicesOpenMobile)}
                        >
                          <span className="flex items-center gap-3">{link.icon} {link.label}</span>
                          {servicesOpenMobile ? <FiChevronUp /> : <FiChevronDown />}
                        </button>

                        {servicesOpenMobile && (
                          <div className="flex flex-col ml-4 mt-2 gap-2">
                            {servicesSubLinks.map((sublink) =>
                              sublink.external ? (
                                <a key={sublink.to} href={sublink.to} target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)} className="flex items-center gap-2 px-4 py-2 rounded-lg transition text-gray-600 hover:text-sky-600 hover:bg-sky-50">
                                  {sublink.icon} {sublink.label}
                                </a>
                              ) : (
                                <Link key={sublink.to} href={sublink.to} onClick={() => setIsOpen(false)} className="flex items-center gap-2 px-4 py-2 rounded-lg transition text-gray-600 hover:text-sky-600 hover:bg-sky-50">
                                  {sublink.icon} {sublink.label}
                                </Link>
                              )
                            )}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link key={link.to} href={link.to} onClick={() => setIsOpen(false)} className="flex items-center gap-3 px-4 py-3 rounded-lg transition text-gray-600 hover:text-sky-600 hover:bg-sky-50">
                        {link.icon} {link.label}
                      </Link>
                    )
                  )}
                </div>
              </div>
            </div>
          </>
        )}
      </nav>
    </header>
  );
};
