import Image from "next/image";
import { IoIosCloseCircle } from "react-icons/io";
import LinkButton from "../../../LinkButton"; // Assuming you have a LinkButton component
export default function ProjectCard({ project, setModalVisible }) {
  const technosSplit = project.technos.split(", ")
  let technosArray = [];
  technosArray.push(...technosSplit);

  return (
    <div id="modal" className="flex flex-col h-full w-full ">
      <button
        className="absolute z-50 flex justify-center w-10 top-4 right-4 cursor-pointer text-solid hover:text-orange-500 transition-all"
        onClick={() => setModalVisible(false)}
      >
        <IoIosCloseCircle className="text-5xl" />
      </button>

      <figure className="relative h-2/5 flex rounded-3xl">
        <Image
          className="flex w-full rounded-t-3xl object-cover"
          src={project.picture}
          width={1920}
          height={950}
          quality={100}
          alt={project.alt}
        />
      </figure>

      <div className="flex flex-col gap-4 items-center justify-around p-8 overflow-y-auto h-full">
        <h3 className="text-center mb-4 font-bold text-2xl text-accessible">
          {project.name}
        </h3>
        <div className="flex flex-col gap-4 sm:w-3/4 text-accessible text-sm md:text-base">
          <p className="text-center">
            <span className="font-bold">Poste:</span> {project.role}
          </p>
          <p className="text-justify md:text-center">{project.text}</p>
          <p className="text-justify md:text-center mb-4">{project.text2}</p>
        </div>
        <div className="flex flex-col items-center justify-center sm:w-3/4">
          <h4 className="text-center font-bold text-accessible mb-4">
            Technos utilisées:
          </h4>
          <p className="flex flex-wrap gap-2 mb-6 md:justify-center">
            {technosArray.map((techno, index) => (
              <span className="badge badge-outline badge-lg text-bold text-center text-orange-500" key={index}>{techno}</span>
            ))}
          </p>
        </div>
          {project.link && (
            <LinkButton  href={project.link} name={"Visiter le site web"} />
          )}
      </div>
    </div>
  );
}
