import React from "react";
import { useState } from "react";

//create your first component
const Home = () => {
	const[selectedColor, setSelectedColor] = useState('red');

	return (
		<div className="container">
			<div class="semaforo-cable mx-auto" />
			<div className="semaforo align-items-center mx-auto">
				<div id="red-color-light" className={"luz red" + (selectedColor === "red" ? " glow" : "")} onClick={()=>setSelectedColor('red')}></div>
				<div id="yellow-color-light" className={"luz yellow" + (selectedColor === "yellow" ? " glow" : "")} onClick={()=>setSelectedColor('yellow')}></div>
				<div id="green-color-light" className={"luz green" + (selectedColor === "green" ? " glow" : "")} onClick={()=>setSelectedColor('green')}></div>
			</div>
		</div>
	);
};

export default Home;
