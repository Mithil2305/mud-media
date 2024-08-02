import React, { useState, useEffect, useRef } from "react";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import { RxCrossCircled } from "react-icons/rx";
import "../index.css";
import main from "../Assert/main.png";

const Header = () => {
	const service_id = process.env.REACT_APP_SERVICE_ID;
	const template_id = process.env.REACT_APP_TEMPLATE_ID;
	const public_api = process.env.REACT_APP_PUBLIC_API;

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
			.sendForm(service_id, template_id, form.current, {
				publicKey: public_api,
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
		<section>
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
			<div>
				<div className="main-container">
					<div id="a1">
						<h2 className="tag1">
							Let's Build
							<h2 className="tag2">Something</h2>
						</h2>
						<div className="gt">
							<button className="get-started" onClick={toggleOverlay}>
								Get Started
							</button>
						</div>
					</div>
					<div id="a2">
						<img src={main} alt="" height={"250px"} />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Header;
