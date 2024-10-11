import { CVLink } from "../../../../UI/Icon";
export default function MoreInformationtext({ orbitron }) {
  return (
    <div className="flex flex-col md:text-lg justify-center w-ful md:w-3/4">
      <h2
        className={`text-3xl mb-10 uppercase font-bold ${orbitron.className}`}
      >
        Quelques mots ={">"}
      </h2>

      <p className="mb-8 text-sm md:text-base text-justify">
        Je m&apos;appelle <strong>Romain Hernandez</strong>, mais mon nom de dev
        est <strong>DotRoms</strong>, d&apos;où le &quot;.R&quot;. Passionné par
        les technologies et la programmation, je me définis volontiers comme un{" "}
        <span className="font-bold">geek</span>. Après plusieurs années dans
        divers domaines, j&apos;ai décidé de suivre ma passion pour les{" "}
        <span className="font-bold">nouvelles technologies</span> en entamant
        une reconversion professionnelle. Aujourd&apos;hui, je suis{" "}
        <strong>développeur fullstack</strong>, capable de travailler à la fois
        sur le front-end et le back-end. Ma polyvalence est un atout : grâce à
        mon parcours, je maîtrise aussi bien la gestion de projet que le design,
        tout en restant profondément ancré dans le développement web.
      </p>

      <p className="text-justify text-sm md:text-base mb-12">
        Je suis particulièrement motivé à contribuer à des{" "}
        <span className="font-bold">
          projets innovants qui allient technologie et créativité
        </span>
        , où je peux mettre à profit mon expertise en développement tout en
        collaborant avec des équipes multidisciplinaires pour atteindre des
        objectifs ambitieux.
      </p>

      <CVLink />
    </div>
  );
}
