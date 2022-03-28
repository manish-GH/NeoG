import "./App.css";

function App() {
	const myList = [
		{ id: 1, item: "item 1" },
		{ id: 2, item: "item 2" },
		{ id: 3, item: "item 3" },
	];
	return (
		<div className="App">
			<button onClick={(e) => console.log(e.target.innerHTML)}>CLICK ME</button>
			{myList.map((element) => (
				<button key={element.id} onClick={() => console.log(element)}>
					Show Info {element.id}
				</button>
			))}
		</div>
	);
}

export default App;
