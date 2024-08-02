import React, { useState } from "react";
import Data from "./Data";

//password = "MudMedia@2024!."

const storedSalt = process.env.REACT_APP_STORED_SALT;
const storedHash = process.env.REACT_APP_STORED_HASH;

async function hashPassword(password, saltHex) {
	const encoder = new TextEncoder();
	const passwordBuffer = encoder.encode(password);
	const saltBuffer = Uint8Array.from(
		saltHex.match(/.{1,2}/g).map((byte) => parseInt(byte, 16))
	);
	const saltedPasswordBuffer = new Uint8Array([
		...saltBuffer,
		...passwordBuffer,
	]);
	const hashBuffer = await crypto.subtle.digest(
		"SHA-256",
		saltedPasswordBuffer
	);
	return Array.from(new Uint8Array(hashBuffer))
		.map((b) => b.toString(16).padStart(2, "0"))
		.join("");
}

const ProtectedPage = () => {
	const [password, setPassword] = useState("");
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	const checkPassword = async () => {
		const hashHex = await hashPassword(password, storedSalt);
		if (hashHex === storedHash) {
			setIsAuthenticated(true);
		} else {
			alert("Incorrect password, please try again.");
		}
	};

	return (
		<div style={{ textAlign: "center", marginTop: "20%" }}>
			{!isAuthenticated ? (
				<div>
					<h2>Enter Password</h2>
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						placeholder="Password"
					/>
					<button onClick={checkPassword}>Submit</button>
				</div>
			) : (
				<div>
					<Data />
				</div>
			)}
		</div>
	);
};

export default ProtectedPage;
