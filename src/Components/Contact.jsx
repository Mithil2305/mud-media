import React, { useRef } from "react";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";

const Contact = () => {
	const form = useRef();
	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm("service_1lmniba", "template_xjkb8ul", form.current, {
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
		<section className="contact">
			<div className="contact-cont">
				<div id="c1">
					<form
						action=""
						className="contact-form"
						ref={form}
						onSubmit={sendEmail}
					>
						<h2>Contact</h2>
						<div>
							<input
								type="text"
								placeholder="First name"
								name="fname"
								required
							/>
							<br />
							<p class="error_txt">FirstName can't be empty</p>
						</div>
						<div>
							<input
								type="text"
								placeholder="Last name"
								name="lname"
								required
							/>
							<br />
							<p class="error_txt">Last Name can't be empty</p>
						</div>
						<div>
							<input
								type="email"
								placeholder="Email address"
								name="email"
								required
							/>
							<br />
							<p class="error_txt">E-Mail can't be empty</p>
						</div>
						<div>
							<textarea
								placeholder="Your message"
								name="message"
								required
							></textarea>
							<br />
							<p class="error_txt">Message can't be empty</p>
						</div>
						<button type="submit">Send Message</button>
					</form>
				</div>
				<div id="c2">
					<h3 className="ctag-1">Let's get</h3>
					<br />
					<h2 className="ctag-2">Connected!</h2>
				</div>
			</div>
		</section>
	);
};

export default Contact;
