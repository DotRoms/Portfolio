"use client";
import projects from "../../../../../data/projects";
import { LineArt } from "../../../../UI/Icon";
import ProjectMotiondiv from "./Project-Motiondiv";
import ProjectOpen from "./Project-Open";
export default function Index({
  modalVisible,
  setModalVisible,
  selectedProject,
  setSelectedProject,
}) {
  return (
    <section
      id="project-page"
      className="relative flex flex-col items-center gap-10 justify-center px-8 text-white min-h-lvh"
    >
      <div className="relative z-10 flex flex-col  flex-wrap gap-14 lg:w-5/6 2xl:w-4/6 sm:flex-row justify-center mb-10">
        {projects.map((project, index) => (
          <ProjectMotiondiv
            key={index}
            project={project}
            index={index}
            setModalVisible={setModalVisible}
            setSelectedProject={setSelectedProject}
          />
        ))}
      </div>

      <div
        className={`fixed z-10 justify-center gap-8 h-full sm:h-[70%] border bottom-0 w-full md:w-4/6 2xl:w-3/6 bg-[#ffffff] items-center shadow-2xl transition-all ${
          modalVisible ? "translate-y-0" : "translate-y-full"
        }`}
      >
        {modalVisible && selectedProject && (
          <ProjectOpen
            project={selectedProject}
            setModalVisible={setModalVisible}
          />
        )}
      </div>

      <div className="xl:absolute xl:bottom-0 m-auto">
        <LineArt />
      </div>
    </section>
  );
}
