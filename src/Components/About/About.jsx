import React from 'react'
import AboutImg from "../../assets/image.png";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
	<div id='About' className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-[#191C1B] shadow-xl mx-0 md:mx-20 rounded-lg p-12">
		<div>
			<h2 className="text-2xl md:text-4xl font-bold">About</h2>
            <div className="md:flex flex-wrap flex-col md:flex-row items-center gap-30">
              <img className="md:h-80" src={AboutImg} alt="About img" />
			  <ul>
				<div className="flex gap-3 py-4">
				  <IoArrowForward size={30} className="mt-1" />

				  <span className="w-108">
					<h1 className="text-xl md:text-2xl font-semibold leading-normal">
					Introduction
					</h1>
					<p className="text-sm md:text-md leading-tight">
					  I'm a passionate Full Stack Developer currently pursuing my degree at IIIT Bhubaneswar. 
					  With a strong foundation in both front-end and back-end technologies. <br />
					  I'm currently open to internships, freelance projects, and full-time opportunities in software development.
					</p>
				  </span>
				</div>

				<div className="flex gap-3 py-4">
					<IoArrowForward size={30} className="mt-1" />
					<div className="w-108">
						<h1 className="text-xl md:text-2xl font-semibold leading-normal">
						Full Stack Developer
						</h1>
						<p className="text-sm md:text-md leading-tight text-gray-300">
						I design and develop complete web applications using technologies like React, Node.js, Express, and MongoDB. From responsive UI/UX to scalable backend architecture, I focus on creating seamless, user-friendly digital experiences. My work emphasizes clean code, strong logic, and performance optimization.
						</p>
					</div>
					</div>

					<div className="flex gap-3 py-4">
					<IoArrowForward size={30} className="mt-1" />
					<div className="w-108">
						<h1 className="text-xl md:text-2xl font-semibold leading-normal">
						  Skills
						</h1>
						<p className="text-sm md:text-md leading-tight text-gray-300">
						  <b>Frontend</b>: HTML, CSS, JavaScript, React.js, Tailwind CSS, Bootstrap <br />
						  <b>Backend</b>: Node.js, Express.js, EJS templating <br />
                          <b>Database</b>: MongoDB <br />
                          <b>Tools</b>: Git, GitHub, Postman, Render <br />
						</p>
					</div>
				</div>

			  </ul>	
			</div>
		</div>
	</div>
  )
}

export default About
