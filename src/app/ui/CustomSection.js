import React from "react";
import Title from "./Title";
import { SectionInfo } from "../constants";

const CustomSection = ({ id, title, body }) => {
  const sectionInfo = SectionInfo[id];
  return (
    <section
      className="container p-4 mx-auto my-12 md:my-0 md:h-screen flex items-center justify-center"
      id={id}>
      <div className="w-full">
        <Title en={sectionInfo} ja={title} />
        {body}
      </div>
    </section>
  );
};

export default CustomSection;
