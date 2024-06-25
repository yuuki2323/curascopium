import React from "react";
import Title from "./Title";
import { SectionInfo } from "../constants";

interface CustomSectionProps {
  id: string;
  title: any;
  body: React.ReactNode;
}

const CustomSection = ({ id, title, body }: CustomSectionProps) => {
  const sectionInfo = SectionInfo[id as keyof typeof SectionInfo];
  return (
    <section
      className="container p-4 mx-auto my-12 md:my-0 md:h-screen flex items-center justify-center"
      id={id}>
      <div className="w-full">
        <Title en={sectionInfo.title} ja={title} />
        {body}
      </div>
    </section>
  );
};

export default CustomSection;
