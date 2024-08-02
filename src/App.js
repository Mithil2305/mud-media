import "./index.css";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import About from "./Components/About";
import Services from "./Components/Services";
import Projects from "./Components/Projects";
import Testimonials from "./Components/Testimonials";
import Contact from "./Components/Contact";
import ClientDB from "./Components/ClientDB";
import Footer from "./Components/Footer";
import Data from "./Components/Data";

function App() {
	return (
		<>
			<Header />
			<Services />
			<About />
			<Projects />
			<Testimonials />
			<Contact />
			<Footer />
		</>
	);
}
export default App;
