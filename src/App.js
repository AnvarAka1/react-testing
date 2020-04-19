import React from "react";
import "./app.scss";
import Header from "./components/header";
import Headline from "./components/headline";
const tempArr = [
	{
		fName: "Anvar",
		lName: "Abdulsatarov",
		email: "anvar-abd_97@mail.ru",
		age: 22,
		onlineStatus: true
	}
];

function App() {
	return (
		<div className="App">
			<Header />
			<section className="main">
				<Headline header="Posts" desc="Click the button to render posts" tempArr={tempArr} />
			</section>
		</div>
	);
}

export default App;
