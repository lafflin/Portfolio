import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
	return (
		<div className="flex flex-col h-screen justify-between">
			<Header></Header>
			<Footer></Footer>
		</div>
	);
}

export default App;
