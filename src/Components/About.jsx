import React, { useState, useEffect, useRef } from "react";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import { RxCrossCircled } from "react-icons/rx";
import main2 from "../Assert/main2.png";

const About = () => {
	const [isOverlayVisible, setOverlayVisible] = useState(false);
	const formContainerRef = useRef(null);

	const toggleOverlay = () => {
		setOverlayVisible(!isOverlayVisible);
	};
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (
				formContainerRef.current &&
				!formContainerRef.current.contains(event.target)
			) {
				setOverlayVisible(false);
			}
		};

		if (isOverlayVisible) {
			document.addEventListener("mousedown", handleClickOutside);
		} else {
			document.removeEventListener("mousedown", handleClickOutside);
		}

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [isOverlayVisible]);
	//
	//

	const form = useRef();
	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm("service_d8pcdcs", "template_u6ss9xb", form.current, {
				publicKey: "MPSGUwsps1r_YopKl",
			})
			.then(
				() => {
					const Toast = Swal.mixin({
						toast: true,
						position: "top-end",
						showConfirmButton: false,
						timer: 3000,
						timerProgressBar: true,
						didOpen: (toast) => {
							toast.onmouseenter = Swal.stopTimer;
							toast.onmouseleave = Swal.resumeTimer;
						},
					});
					Toast.fire({
						icon: "success",
						title: "Message sent successfully",
					});
				},
				(error) => {
					const Toast = Swal.mixin({
						toast: true,
						position: "top-end",
						showConfirmButton: false,
						timer: 3000,
						timerProgressBar: true,
						didOpen: (toast) => {
							toast.onmouseenter = Swal.stopTimer;
							toast.onmouseleave = Swal.resumeTimer;
						},
					});
					Toast.fire({
						icon: "error",
						title: "Error Occured",
					});
				}
			);
	};
	return (
		<section className="abt-cont">
			<div className="get_started">
				{isOverlayVisible && (
					<div className="overlay">
						<div className="form-container">
							<form action="" ref={form} onSubmit={sendEmail}>
								<div className="hire-head">
									<h3 className="title">Work with Mud Media</h3>
									<RxCrossCircled
										className="cross-icon"
										onClick={toggleOverlay}
									/>
								</div>
								<label>Enter your Name</label>
								<input name="name" type="text" placeholder="Your Name" />
								<label>Enter Email Address</label>
								<input
									name="email"
									type="email"
									placeholder="123@example.com"
								/>
								<label>Budget (USD)</label>
								<input type="number" name="budget" id="" placeholder="3400" />
								<label>Set Meeting (IST)</label>
								<div className="dt">
									<input type="date" name="date" id="" placeholder="Set Date" />
									<input type="time" name="time" id="" placeholder="Set Time" />
								</div>
								<label>Project Description</label>
								<textarea
									name="proj_des"
									placeholder="Enter Details Here"
								></textarea>
								<button type="submit">Send Proposal</button>
							</form>
						</div>
					</div>
				)}
			</div>
			<div className="about_container">
				<div className="child">
					<h1 className="title abt">About us</h1>
					<p className="abt-us">
						At Mud Media, we specialize in turning innovative ideas into
						impactful brand experiences. Our expert team combines creativity
						with strategic insight to deliver tailored solutions that engage and
						resonate. Partner with us to elevate your brand and achieve your
						goals with clarity and precision.
					</p>
					<div className="gt">
						<button className="get-started" onClick={toggleOverlay}>
							Get Started
						</button>
					</div>
				</div>
				<div className="child">
					<img src={main2} alt="" height={"450px"} />
				</div>
			</div>
			<div className="achievements">
				<div className="child">
					<div>
						<p>20+</p>
					</div>
					<div>
						<h2>Projects</h2>
						<h3>Completed</h3>
					</div>
				</div>
				<div className="child">
					<div>
						<p>20K+</p>
					</div>
					<div>
						<h2>Revenue</h2>
						<h3>Generated</h3>
					</div>
				</div>
				<div className="child">
					<div>
						<p>10+</p>
					</div>
					<div>
						<h2>Campaigns</h2>
						<h3>Completed</h3>
					</div>
				</div>
			</div>
			{/* </div> */}
		</section>
	);
};

export default About;
