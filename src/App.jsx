import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Concerts from "./mainpages/Concerts";
import Events from "./mainpages/Events";
import Movies from "./mainpages/Movies";
import UserLogin from "./authentication/UserLogin";
import Register from "./authentication/Register";
import Contact from "./mainpages/Contact";
import Home from "./mainpages/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
     
      <div className="pt-4 px-4"> {/* Optional padding below navbar */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* Optional Home route */}
          <Route path="/concerts" element={<Concerts />} />
          <Route path="/events" element={<Events />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<UserLogin />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer/>
      </div>
    </Router>


  );
}

export default App;
