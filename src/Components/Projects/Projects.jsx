import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div
      id="Projects"
      className="px-5 py-12 md:px-16 lg:px-24 xl:px-32 text-white"
    >
      {/* HEADING */}
      <h1 className="text-3xl md:text-5xl font-bold mb-12">
        Projects
      </h1>

      {/* PROJECTS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

        {/* PROJECT 1 */}
        <ProjectCard
          title="StudyNotion"
          main="A full-stack MERN EdTech platform with course creation, student enrollment, authentication, video streaming, Razorpay payment integration, progress tracking, and instructor dashboards."
          demoLink="https://studynotion-frontend-seven-lime.vercel.app/"
          githubLink="https://github.com/timil-web/StudyNotion"
        />

        {/* PROJECT 2 */}
        <ProjectCard
          title="Yourbnb"
          main="A full-stack rental listing platform built using Node.js, Express.js, MongoDB, and EJS with authentication, MVC architecture, REST APIs, flash messaging, and session management."
          demoLink="https://yourbnb.onrender.com/"
          githubLink="https://github.com/timil-web/yourbnb"
        />

        {/* PROJECT 3 */}
        <ProjectCard
          title="School Management System API"
          main="RESTful API project developed using Node.js, Express.js, and MySQL featuring geolocation-based sorting, validation, structured error handling, and scalable backend architecture."
          demoLink="https://school-mana-frontend-7iuv.onrender.com/"
          githubLink="https://github.com/timil-web/School_Management-"
        />

      </div>
    </div>
  );
};

export default Projects;