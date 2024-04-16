import Image from 'next/image';
import React from 'react';
import Title from '../ui/Title';
import CustomSection from '../ui/CustomSection';
import { ProjectInfo } from '../constants';

const Project = () => {
  return (
    <CustomSection
      id='project'
      body={<ProjectBody />}
    />
  );
};

const ProjectBody = () => {
  const projects = Object.entries(ProjectInfo);
  return (
    <div className='flex flex-col md:flex-row justify-between gap-8 md:gap-12 text-white text-sm md:text-lg'>
      {projects.map((project) => {
        return (
          <ProjectCard
            key={project[0]}
            id={project[0]}
            title={project[1].title}
            description={project[1].description}
          />
        );
      })}
    </div>
  );
};

const ProjectCard = ({ id, title, description }) => {
  return (
    <div>
      <div className='relative'>
        <Image
          src={`/project/${id}.jpg`}
          alt={id}
          width={1920}
          height={1080}
          className=' aspect-video mb-4'
        />
        <p className='absolute bottom-0 left-0 py-2 px-4 text-center bg-black bg-opacity-70'>
          {title}
        </p>
      </div>
      <p>{description}</p>
    </div>
  );
};

export default Project;
