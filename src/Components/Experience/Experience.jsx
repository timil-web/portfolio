import React from "react";

import {
  FaCss3,
  FaHtml5,
  FaJs,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiBootstrap,
  SiGit,
  SiGithub,
  SiPostman,
  SiMysql,
  SiRedux,
  SiJsonwebtokens,
  SiCloudinary,
  SiVercel,
  SiRender,
  SiRazorpay,
  SiCplusplus,
} from "react-icons/si";

const Experience = () => {
  return (
    <div
      id="Experience"
      className="px-5 py-12 md:px-16 lg:px-24 xl:px-32"
    >
      {/* HEADING */}
      <h1 className="text-3xl md:text-5xl font-bold text-white mb-12">
        Experience (Personal Projects)
      </h1>

      <div className="flex flex-col lg:flex-row gap-12 items-start justify-between">

        {/* LEFT SIDE */}
        <div className="w-full lg:w-[60%] space-y-6">

          {/* CARD 1 */}
          <div className="bg-slate-950/50 border border-gray-800 rounded-2xl p-5 md:p-7 hover:scale-[1.02] transition-all duration-300">

            <h2 className="text-xl md:text-2xl font-semibold text-white">
              StudyNotion
            </h2>

            <p className="text-sm md:text-base text-gray-400 mt-1">
              MERN Stack EdTech Platform
            </p>

            <ul className="mt-4 space-y-2 text-sm md:text-base text-gray-300 list-disc pl-5">
              <li>
                Developed a full-stack EdTech platform enabling course
                creation, enrollment, video streaming, and progress tracking.
              </li>

              <li>
                Implemented secure authentication and role-based access
                control.
              </li>

              <li>
                Integrated Razorpay and Cloudinary for payments and media
                uploads.
              </li>

              <li>
                Built responsive dashboards using React.js, Redux, and
                Tailwind CSS.
              </li>

              <li>
                Designed and managed 20+ RESTful APIs.
              </li>
            </ul>
          </div>

          {/* CARD 2 */}
          <div className="bg-slate-950/50 border border-gray-800 rounded-2xl p-5 md:p-7 hover:scale-[1.02] transition-all duration-300">

            <h2 className="text-xl md:text-2xl font-semibold text-white">
              Yourbnb
            </h2>

            <p className="text-sm md:text-base text-gray-400 mt-1">
              Rental Listing Platform
            </p>

            <ul className="mt-4 space-y-2 text-sm md:text-base text-gray-300 list-disc pl-5">
              <li>
                Built a full-stack rental listing platform using Node.js,
                Express.js, MongoDB, and EJS.
              </li>

              <li>
                Followed MVC architecture for scalable code structure.
              </li>

              <li>
                Implemented authentication and session management.
              </li>

              <li>
                Added centralized error handling and RESTful routing.
              </li>
            </ul>
          </div>

          {/* CARD 3 */}
          <div className="bg-slate-950/50 border border-gray-800 rounded-2xl p-5 md:p-7 hover:scale-[1.02] transition-all duration-300">

            <h2 className="text-xl md:text-2xl font-semibold text-white">
              School Management System API
            </h2>

            <p className="text-sm md:text-base text-gray-400 mt-1">
              Backend API Developer
            </p>

            <ul className="mt-4 space-y-2 text-sm md:text-base text-gray-300 list-disc pl-5">
              <li>
                Designed and developed RESTful APIs using Node.js,
                Express.js, and MySQL.
              </li>

              <li>
                Implemented geolocation-based sorting using coordinates.
              </li>

              <li>
                Applied validation, secure data handling, and structured
                error management.
              </li>

              <li>
                Deployed APIs with high availability and optimized
                performance.
              </li>
            </ul>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full lg:w-[40%]">

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-3 gap-4">

            {/* HTML */}
            <span className="p-4 bg-[#191C1B] flex items-center justify-center rounded-2xl hover:scale-110 transition duration-300">
              <FaHtml5 color="#E34F26" size={45} />
            </span>

            {/* CSS */}
            <span className="p-4 bg-[#191C1B] flex items-center justify-center rounded-2xl hover:scale-110 transition duration-300">
              <FaCss3 color="#1572B6" size={45} />
            </span>

            {/* JavaScript */}
            <span className="p-4 bg-[#191C1B] flex items-center justify-center rounded-2xl hover:scale-110 transition duration-300">
              <FaJs color="#F7DF1E" size={45} />
            </span>

            {/* React */}
            <span className="p-4 bg-[#191C1B] flex items-center justify-center rounded-2xl hover:scale-110 transition duration-300">
              <FaReact color="#61DAFB" size={45} />
            </span>

            {/* Node.js */}
            <span className="p-4 bg-[#191C1B] flex items-center justify-center rounded-2xl hover:scale-110 transition duration-300">
              <FaNodeJs color="#339933" size={45} />
            </span>

            {/* Express */}
            <span className="p-4 bg-[#191C1B] flex items-center justify-center rounded-2xl hover:scale-110 transition duration-300">
              <SiExpress color="#FFFFFF" size={45} />
            </span>

            {/* MongoDB */}
            <span className="p-4 bg-[#191C1B] flex items-center justify-center rounded-2xl hover:scale-110 transition duration-300">
              <SiMongodb color="#47A248" size={45} />
            </span>

            {/* MySQL */}
            <span className="p-4 bg-[#191C1B] flex items-center justify-center rounded-2xl hover:scale-110 transition duration-300">
              <SiMysql color="#4479A1" size={45} />
            </span>

            {/* Tailwind */}
            <span className="p-4 bg-[#191C1B] flex items-center justify-center rounded-2xl hover:scale-110 transition duration-300">
              <SiTailwindcss color="#38BDF8" size={45} />
            </span>

            {/* Bootstrap */}
            <span className="p-4 bg-[#191C1B] flex items-center justify-center rounded-2xl hover:scale-110 transition duration-300">
              <SiBootstrap color="#7952B3" size={45} />
            </span>

            {/* Redux */}
            <span className="p-4 bg-[#191C1B] flex items-center justify-center rounded-2xl hover:scale-110 transition duration-300">
              <SiRedux color="#764ABC" size={45} />
            </span>

            {/* EJS */}
            <span className="p-4 bg-[#191C1B] flex items-center justify-center rounded-2xl text-white text-xl font-bold hover:scale-110 transition duration-300">
              EJS
            </span>

            {/* Git */}
            <span className="p-4 bg-[#191C1B] flex items-center justify-center rounded-2xl hover:scale-110 transition duration-300">
              <SiGit color="#F05032" size={45} />
            </span>

            {/* GitHub */}
            <span className="p-4 bg-[#191C1B] flex items-center justify-center rounded-2xl hover:scale-110 transition duration-300">
              <SiGithub color="#FFFFFF" size={45} />
            </span>

            {/* Postman */}
            <span className="p-4 bg-[#191C1B] flex items-center justify-center rounded-2xl hover:scale-110 transition duration-300">
              <SiPostman color="#FF6C37" size={45} />
            </span>

            {/* JWT */}
            <span className="p-4 bg-[#191C1B] flex items-center justify-center rounded-2xl hover:scale-110 transition duration-300">
              <SiJsonwebtokens color="#FFFFFF" size={45} />
            </span>

            {/* Cloudinary */}
            <span className="p-4 bg-[#191C1B] flex items-center justify-center rounded-2xl hover:scale-110 transition duration-300">
              <SiCloudinary color="#3448C5" size={45} />
            </span>

            {/* Razorpay */}
            <span className="p-4 bg-[#191C1B] flex items-center justify-center rounded-2xl hover:scale-110 transition duration-300">
              <SiRazorpay color="#0C2451" size={45} />
            </span>

            {/* Vercel */}
            <span className="p-4 bg-[#191C1B] flex items-center justify-center rounded-2xl hover:scale-110 transition duration-300">
              <SiVercel color="#FFFFFF" size={45} />
            </span>

            {/* Render */}
            <span className="p-4 bg-[#191C1B] flex items-center justify-center rounded-2xl hover:scale-110 transition duration-300">
              <SiRender color="#46E3B7" size={45} />
            </span>

            {/* C++ */}
            <span className="p-4 bg-[#191C1B] flex items-center justify-center rounded-2xl hover:scale-110 transition duration-300">
              <SiCplusplus color="#00599C" size={45} />
            </span>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;