import "./App.css";
import { useState } from "react";

function App() {
	const [type, setType] = useState("password");
	const [error, setError] = useState(false);

	const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

	const handleChange = (e) => {
		// return e.target.value.length === 1
		// 	? numbers.includes(e.target.value)
		// 		? setError(false)
		// 		: setError(true)
		// 	: error === false
		// 	? null
		// 	: numbers.includes(e.target.value[e.target.value.length - 1])
		// 	? setError(false)
		// 	: null;

		e.target.value
			.split("")
			.map((element) => numbers.includes(element))
			.includes(true)
			? setError(false)
			: setError(true);
		// console.log(e.target.value.split(""));
	};

	return (
		<div className="App">
			<input onChange={(e) => handleChange(e)} type={type} />
			<button
				onClick={() =>
					type === "password" ? setType("text") : setType("password")
				}
			>
				Show Password
			</button>
			{error ? <p>Password has to contain a number</p> : null}
		</div>
	);
}

export default App;
