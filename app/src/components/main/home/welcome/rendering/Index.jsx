"use client";

import { Orbitron } from "next/font/google";

import links from "../../../../../site/socialLinks";
import { IllustatrionImage } from "../../../../UI/Icon";
import ButtonLinks from "../../../../UX/ButtonLinks";

const orbitron = Orbitron({ subsets: ["latin"], weight: "400" });

export default function Index() {
  return (
    <section className="flex flex-col items-center justify-center  2xl:py-10 text-newBlack min-h-home">
      <div className="flex p-8 gap-10 md:gap-0 flex-col w-full lg:w-5/6 2xl:w-4/6 mb-16 md:mb-20 lg:flex-row-reverse ">
        <div className="flex w-60 bg-cover justify-center mb-8 m-auto md:mb-12 md:w-96  ">
          <IllustatrionImage width={500} height={200} />
        </div>
        <div className="md:pr-8">
          <p className="mb-2 text-lg md:mb-4 md:text-xl 2xl:text-2xl">
            Bonjour je suis{" "}
            <strong className="text-orange-500">Romain Hernandez</strong> alias <strong className="text-orange-500">DotRoms</strong>,
          </p>
          <h1
            className={` mb-8 leading-none max-w-xl 2xl:max-w-2xl font-bold  text-5xl md:text-6xl lg:text-7xl ${orbitron.className}`}
          >
            Bienvenue sur mon{" "}
            <span className="text-orange-500 font-bold">portfolio</span> !
          </h1>
          <p className="mb-6 text-lg md:mb-8 md:text-xl ">
            Développeur fullstack créatif et passionné.
          </p>
          <ul className="flex gap-2 flex-wrap md:gap-4 xl:gap-4">
            {links.map((link, index) => (
              <li className="flex items-center justify-center" key={index}>
                <ButtonLinks name={link.name} href={link.url} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
