import React from "react";

var year = new Date().getFullYear();
const Footer = () => {
	return (
		<section>
			<div className="copyrights">
				<p>
					&copy; {year} <strong>Mud Media</strong>. All rights reserved.{" "}
				</p>
			</div>
		</section>
	);
};

export default Footer;
