import React from "react";
import Title from "./Title";
import { Section, SectionInfo } from "../constants";

interface CustomSectionProps {
  id: Section;
  title: React.ReactElement;
  body: React.ReactElement;
}

const CustomSection = ({ id, title, body }: CustomSectionProps) => {
  const sectionInfo = SectionInfo[id];
  return (
    <section
      className="container p-4 mx-auto my-12 md:my-0 md:h-screen flex items-center justify-center"
      id={sectionInfo.title}>
      <div className="w-full">
        <Title title={sectionInfo.title} subtitle={title} />
        {body}
      </div>
    </section>
  );
};

export default CustomSection;
