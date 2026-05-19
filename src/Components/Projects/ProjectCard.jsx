import React from "react";
import bannerImg from "../../assets/banner.png";

const ProjectCard = ({
  title,
  main,
  demoLink,
  githubLink,
}) => {
  return (
    <div
      className="
        bg-[#0c0e19]
        border border-gray-800
        rounded-2xl
        overflow-hidden
        shadow-lg shadow-slate-900
        hover:scale-[1.02]
        hover:shadow-2xl
        transition-all
        duration-300
        flex
        flex-col
        justify-between
      "
    >
      {/* IMAGE */}
      <div className="overflow-hidden">
        <img
          className="
            w-full
            h-52
            object-cover
            hover:scale-105
            transition duration-500
          "
          src={bannerImg}
          alt={title}
        />
      </div>

      {/* CONTENT */}
      <div className="p-5 flex flex-col flex-grow">

        <h3
          className="
            text-xl
            md:text-2xl
            font-bold
            text-white
          "
        >
          {title}
        </h3>

        <p
          className="
            text-sm
            md:text-base
            text-gray-300
            leading-relaxed
            mt-3
            flex-grow
          "
        >
          {main}
        </p>

        {/* BUTTONS */}
        <div className="flex gap-4 mt-6">

          {/* DEMO BUTTON */}
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex-1
              text-center
              bg-[#465697]
              hover:bg-[#5d72c9]
              text-white
              py-2.5
              rounded-xl
              font-semibold
              transition
              duration-300
              hover:scale-105
            "
          >
            Demo
          </a>

          {/* GITHUB BUTTON */}
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex-1
              text-center
              border
              border-[#465697]
              text-white
              py-2.5
              rounded-xl
              font-semibold
              transition
              duration-300
              hover:bg-[#465697]
              hover:scale-105
            "
          >
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;