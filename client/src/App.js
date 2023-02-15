import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Header from "./Components/Header";

function App() {
	const [message, setMessage] = useState("");
	const [response, setResponse] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		fetch("/", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ message }),
		})
			.then((res) => res.json())
			.then((data) => setResponse(data.message));
	};

	return (
		<div className="App">
			<Header />

			<form onSubmit={handleSubmit}>
				<textarea
					value={message}
					onChange={(e) => setMessage(e.target.value)}
				></textarea>
				<button type="submit">Submit</button>
			</form>

			<div className="d-flex bg-light mx-5 my-3 px-4 py-1">
				<h5>Response:</h5>
				<p className="">{response}</p>
			</div>
		</div>
	);
}

export default App;
