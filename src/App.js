import "./App.css";

import { Nav } from "./components/Nav/Nav";
import { Hero } from "./components/Hero/Hero";
import { About } from "./components/About/About";
import { Services } from "./components/Services/Services";
import { Tours } from "./components/Tours/Tours";
import { Footer } from "./components/Footer/Footer";

function App() {
    return (
        <>
            <Nav></Nav>
            <Hero></Hero>
            <About></About>
            <Services></Services>
            <Tours></Tours>
            <Footer></Footer>
        </>
    );
}

export default App;
