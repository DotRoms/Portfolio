import Image from "next/image";
import Link from "next/link";
export default function SoftSkills({ skill }) {
  return (
    <figure className="flex flex-col items-center justify-center gap-4">
      <Link href={skill.doc} target="_blank">
        <Image
          className="w-16 h-16 p-4 backdrop-blur-lg bg-backgroundLigth hover:bg-orange-500 shadow-xl rounded-3xl"
          src={skill.logo}
          alt={skill.alt}
        />
      </Link>
      <figcaption>{skill.description}</figcaption>
    </figure>
  );
}
