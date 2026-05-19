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
									I build complete web applications using technologies like React.js, Node.js, Express.js, MongoDB, and MySQL. My focus is on creating secure, scalable, and high-performance applications with clean architecture and seamless user experience.
									<br />
									I have worked on projects including an EdTech platform with Razorpay integration, a rental listing platform following MVC architecture, and REST APIs with geolocation-based features. I enjoy solving real-world problems, optimizing application performance, and continuously learning modern technologies.
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
									<b>Backend</b>: Node.js, Express.js,REST APIs ,MVC Architecture , EJS templating <br />
									<b>Database</b>: MongoDB, MySQL <br />
									<b>Tools</b>: Git, GitHub, Postman, Render, vercel <br />
								</p>
							</div>
						</div>

						<div className="flex gap-3 py-4">
							<IoArrowForward size={30} className="mt-1" />
							<div className="w-108">
								<h1 className="text-xl md:text-2xl font-semibold leading-normal">
									Problem Solving
								</h1>
								<p className="text-sm md:text-md leading-tight text-gray-300">
									<b>500+ DSA Problems Solved</b><br />
									<b>LeetCode Rating: 1700+</b><br />
									<b>CodeChef 2⭐</b><br />
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
