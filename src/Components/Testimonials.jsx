import React from "react";
import { FaStar } from "react-icons/fa";
import prof1 from "../Assert/prof1.jpg";

const Testimonials = () => {
	return (
		<section>
			<h2 className="title">Testimonials</h2>
			<div className="review-cont">
				<div className="rev-child">
					<img src={prof1} alt="profile" height={"45px"} width={"45px"} />
					<h5>Name</h5>
					<div>
						<FaStar className="star" />
						<FaStar className="star" />
						<FaStar className="star" />
						<FaStar className="star" />
					</div>
					<p>
						I was so impressed with the customer service I received at this
						company. The team was very friendly and helpful, and they went above
						and beyond to make sure I was satisfied.
					</p>
				</div>

				<div className="rev-child">
					<img src={prof1} alt="profile" height={"45px"} width={"45px"} />
					<h5>Name</h5>
					<div>
						<FaStar className="star" />
						<FaStar className="star" />
						<FaStar className="star" />
						<FaStar className="star" />
					</div>
					<p>
						I was so impressed with the customer service I received at this
						company. The team was very friendly and helpful, and they went above
						and beyond to make sure I was satisfied.
					</p>
				</div>

				<div className="rev-child">
					<img src={prof1} alt="profile" height={"45px"} width={"45px"} />
					<h5>Name</h5>
					<div>
						<FaStar className="star" />
						<FaStar className="star" />
						<FaStar className="star" />
						<FaStar className="star" />
					</div>
					<p>
						I was so impressed with the customer service I received at this
						company. The team was very friendly and helpful, and they went above
						and beyond to make sure I was satisfied.
					</p>
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
