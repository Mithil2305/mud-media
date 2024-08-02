import React from "react";
import web_dev1 from "../Assert/webdev1.png";
import { FaSearch } from "react-icons/fa";

const Projects = () => {
	return (
		<section className="projects_container">
			<h1 className="title ">Featured Projects</h1>
			<div className="project-cont">
				<div className="pr1">
					<a href="https://www.wildlifevalparai.com " target="_blank">
						<img src={web_dev1} alt="" height={"400px"} />
					</a>
					<div className="middle">
						<FaSearch />
						<p>View Site</p>
					</div>
					<h2>Wildlife Valparai</h2>
				</div>
				<div className="pr1">
					<a href="https://www.wildlifevalparai.com" target="_blank">
						<img src={web_dev1} alt="" height={"400px"} />
					</a>
					<div className="middle">
						<FaSearch />
						<p>View Site</p>
					</div>
					<h2>Wildlife Valparai</h2>
				</div>
			</div>
		</section>
	);
};

export default Projects;
