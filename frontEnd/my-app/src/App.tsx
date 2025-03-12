import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Home/Header.js";
import LandingPage from "./Home/LandingPage.js";
import Login from "./Home/Login.js";

const About = () => <h2 className="text-center text-2xl mt-10">About Page</h2>;
const Services = () => <h2 className="text-center text-2xl mt-10">Services Page</h2>;
const Contact = () => <h2 className="text-center text-2xl mt-10">Contact Page</h2>;

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;