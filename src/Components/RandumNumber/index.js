import React, { useState } from "react";
import "./index.css";
const App = () => {
	const [num, setNum] = useState(0);

	const randomNumberInRange = (min, max) => {
		return Math.floor(Math.random()
				* (max - min + 1)) + min;
	};

	const handleClick = () => {
		setNum(randomNumberInRange(0, 100));
	};

	return (
		<div className="wrapper">
			<h2>RandomNumber</h2>

            <h3>Generate a randomNumberInRange 0 to 100</h3>
			<button onClick={handleClick}>
				Click Me Generate
			</button>
            <p>{num}</p>
		</div>
	);
};

export default App;
