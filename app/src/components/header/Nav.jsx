"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";

import RomsLogo from "../../../../public/roms.svg";
export default function Nav() {
  const navLinks = [
    {
      title: "Accueil",
      url: "",
    },
    {
      title: "Projets",
      url: "#project-page",
    },
    {
      title: "Skills",
      url: "#skills",
    },
    {
      title: "Parcours",
      url: "#timeline",
    },
    {
      title: "Contact",
      url: "mailto:romsher.dev@gmail.com",
    },
    {
      title: "About",
      url: "#about",
    },
  ];

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky z-50 flex px-8 sm:px-8 py-6 lg:py-12 items-center justify-between gap-10">
      <Link href="/">
        <Image
          src={RomsLogo}
          alt="Logo de The House Of Art"
          width={500}
          height={500}
          className="w-auto"
        />
      </Link>
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="lg:hidden p-2 rounded-m transition-all"
      >
        <IoMenu className="h-10 w-10" />
      </button>
      <ul
        className={`lg:hidden fixed z-10 flex flex-col justify-center gap-8 h-lvh top-0 right-0 w-4/6 sm:w-3/6 bg-solid p-6 sm:p-20 sm:text-lg transition-all  ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="fixed top-8 right-8"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <IoClose className="h-10 w-10 text-white" />
        </button>

        {navLinks.map((link, index) => (
          <li
            key={index}
            className="relative flex flex-col w-full"
          >
            <div className="flex items-center gap-5 mb-4 sm:mb-6">
              <Link
                href={link.url}
                className="flex items-center transition gap-6 uppercase"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {link.title}
              </Link>
            </div>
          </li>
        ))}
      </ul>

      <ul className="hidden lg:flex gap-2">
        {navLinks.map((link, index) => (
          <li key={index} className="relative flex items-center">
            <Link
              href={link.url}
              className="flex items-center py-2 px-6 gap-4 hover:text-solid transition uppercase"
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
