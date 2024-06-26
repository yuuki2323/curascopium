import Image from "next/image";
import React from "react";
import CustomSection from "../ui/CustomSection";
import { Section, projects } from "../constants";
import { useTranslations } from "next-intl";
import { tProps } from "@/middleware";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
}

const Project = () => {
  const t = useTranslations("project");
  return (
    <CustomSection
      id={Section.project}
      title={t.rich("title", { br: () => <br /> }) as React.ReactElement}
      body={<ProjectBody t={t} />}
    />
  );
};

const ProjectBody = ({ t }: tProps) => {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-12 text-white text-sm md:text-lg">
      {projects.map((project) => {
        return (
          <ProjectCard
            key={project}
            id={project}
            title={t(`${project}.title`)}
            description={t(`${project}.body`)}
          />
        );
      })}
    </div>
  );
};

const ProjectCard = ({ id, title, description }: ProjectCardProps) => {
  return (
    <div className="md:w-2/3">
      <div className="relative">
        <Image
          src={`/project/${id}.jpg`}
          alt={id}
          width={1920}
          height={1080}
          className=" aspect-video mb-4"
        />
        <p className="absolute bottom-0 left-0 py-2 px-4 text-center bg-black bg-opacity-70">
          {title}
        </p>
      </div>

      <p>{description}</p>
    </div>
  );
};

export default Project;
