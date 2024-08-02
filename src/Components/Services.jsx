import React from "react";
import assert1 from "../Assert/assert1.png";
import assert2 from "../Assert/assert2.png";
import assert3 from "../Assert/assert3.png";
import assert4 from "../Assert/assert4.png";
import assert5 from "../Assert/assert5.png";
const Services = () => {
	return (
		<div>
			<h2 className="title">What we Provide</h2>
			<div className="service_container">
				<div className="box">
					<img src={assert3} alt="" />
					<h3>Ad Campaigns</h3>
					<p>This is a example for service</p>
				</div>
				<div className="box">
					<img src={assert4} alt="" />
					<h3>Branding</h3>
					<p>This is a example for service</p>
				</div>
				<div className="box">
					<img src={assert1} alt="" />
					<h3>
						Digital <br /> Marketing
					</h3>
					<p>This is a example for service</p>
				</div>
			</div>
			<div className="service_container">
				<div className="box">
					<img src={assert2} alt="" />
					<h3>
						Video/Photo <br />
						Editing
					</h3>
					<p>This is a example for service</p>
				</div>
				<div className="box">
					<img src={assert5} alt="" />
					<h3>
						Web <br />
						Development
					</h3>
					<p>This is a example for service</p>
				</div>
			</div>
		</div>
	);
};

export default Services;
