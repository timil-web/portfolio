import React from 'react'
import { FaCss3, FaHtml5, FaJs, FaReact, FaNodeJs  } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiAirbnb } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaAmazon } from "react-icons/fa";
import { WiRain } from "react-icons/wi";
import { SiTailwindcss } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";
import { SiGit } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiPostman } from "react-icons/si";

const Experience = () => {
  return (
	<div id="Experience" className="p-10 md:p-24">
	  <h1 className="text-2xl md:text-4xl text-white font-bold">Experience</h1>
      <div className="flex flex-wrap items-center justify-around">
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
          <span className="p-3 bg-[#191C1B] flex items-center rounded-2xl">
            <FaHtml5 color="#E34F26" size={50} />
          </span>
          <span className="p-3 bg-[#191C1B] flex items-center rounded-2xl">
            <FaCss3 color="#1572B6" size={50} />
          </span>
          <span className="p-3 bg-[#191C1B] flex items-center rounded-2xl">
            <FaJs color="#F7DF1E" size={50} />
          </span>
          <span className="p-3 bg-[#191C1B] flex items-center rounded-2xl">
            <SiTailwindcss color="#38BDF8" size={50} />
          </span>
          <span className="p-3 bg-[#191C1B] flex items-center rounded-2xl">
            <SiBootstrap color="#7952B3" size={50} />
          </span>
          <span className="p-3 bg-[#191C1B] flex items-center rounded-2xl">
            <FaReact color="#61DAFB" size={50} />
          </span>
          <span className="p-3 bg-[#191C1B] flex items-center justify-center rounded-2xl text-white text-2xl font-bold">
            EJS
          </span>
          <span className="p-3 bg-[#191C1B] flex items-center rounded-2xl">
            <FaNodeJs color="#339933" size={50} />
          </span>
          <span className="p-3 bg-[#191C1B] flex items-center rounded-2xl">
            <SiMongodb color="#47A248" size={50} />
          </span>
          <span className="p-3 bg-[#191C1B] flex items-center rounded-2xl">
            <SiExpress color="#fff" size={50} />
          </span>
          <span className="p-3 bg-[#191C1B] flex items-center rounded-2xl">
            <SiGit color="#F05032" size={50} />
          </span>
          <span className="p-3 bg-[#191C1B] flex items-center rounded-2xl">
            <SiGithub color="#ffffff" size={50} />
          </span>
          <span className="p-3 bg-[#191C1B] flex items-center rounded-2xl">
            <SiPostman color="#FF6C37" size={50} />
          </span>

        </div>
        <div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            <SiAirbnb color="#FF5A5F" size={50} />
            <span className="text-white">
              <h2 className="leading-tight">Software Engineer , Google</h2>
              <p className="text-sm leading-tight font-thin">
                Sept 2023 - Present
              </p>
              <ul className="text-sm p-2">
                <li>- Work as software developer</li>
                <li>- Senior SDE-developer</li>
              </ul>
            </span>
          </div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg  p-4 items-center">
            <WiRain color="#fff" size={50} />
            <span className="text-white">
              <h2 className="leading-tight">Software Engineer, Google</h2>
              <p className="text-sm leading-tight font-thin">
                Sept 2023 - Present
              </p>
              <ul className="text-sm p-2">
                <li>- Work as software developer.</li>
                <li>- Senior SDE-developer</li>
              </ul>
            </span>
          </div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg  p-4 items-center">
            <FaAmazon color="#FF9900" size={50} />
            <span className="text-white">
              <h2 className="leading-tight">Software Engineer, Google</h2>
              <p className="text-sm leading-tight font-thin">
                Sept 2023 - Present
              </p>
              <ul className="text-sm p-2">
                <li>- Work as software developer.</li>
                <li>- Senior SDE-developer</li>
              </ul>
            </span>
          </div>
        </div>
      </div>	
	</div>
  )
}

export default Experience
