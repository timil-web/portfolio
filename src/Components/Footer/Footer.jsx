import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      id="Footer"
      className="flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center"
    >
      <div>
        <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
        <h3 className="text-sm md:text-2xl font-normal">
          Feel Free To reach out!
        </h3>
      </div>

      <ul className="text-sm md:text-xl space-y-3">

        <li className="flex gap-2 items-center text-white">
          <MdOutlineEmail size={20} />

          <a
            href="mailto:timilvaishnav@gmail.com"
            className="hover:text-cyan-400 transition duration-300 break-all"
          >
            timilvaishnav@gmail.com
          </a>
        </li>

        <li className="flex gap-2 items-center text-white">
          <CiLinkedin size={20} />

          <a
            href="https://www.linkedin.com/in/timil-vaishnav-4b379128a"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition duration-300 break-all"
          >
            LinkedIn Profile
          </a>
        </li>

        <li className="flex gap-2 items-center text-white">
          <FaGithub size={20} />

          <a
            href="https://github.com/timil-web"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition duration-300 break-all"
          >
            GitHub Profile
          </a>
        </li>

      </ul>
    </div>
  )
}

export default Footer
