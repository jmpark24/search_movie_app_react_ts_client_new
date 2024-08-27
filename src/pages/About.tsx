import React from 'react';
import aboutMe from '../assets/constant/about';
const About = () => {
  return (
    <div
      className="
  max-w-container 
  mx-auto 
  my-0 
  px-5
  py-10 
  sm:px-10
  sm:py-10 
  lg:px-0
  lg:py-10 
"
    >
      <div
        style={{ backgroundImage: `url(${aboutMe.photo})` }}
        className="bg-cover bg-center w-[230px] h-[230px] rounded-full mt-0 mx-auto mb-5 border-color-primary border-2"
      />
      <p className="mb-5 font-oswald text-[40px] text-center">{aboutMe.name}</p>
      <p className="text-center mb-1 leading-normal text-color-primary">
        <a
          href={`https://mail.google.com/mail/?view=cm&fs=1&to=${aboutMe.email}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {aboutMe.email}
        </a>
      </p>
      <p className="text-center mb-1 leading-normal text-color-primary">
        <a href={aboutMe.github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </p>
      <p className="text-center mb-1 leading-normal text-color-primary">
        <a href={aboutMe.blog} target="_blank" rel="noopener noreferrer">
          Blog
        </a>
      </p>
    </div>
  );
};

export default About;
