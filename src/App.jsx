import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useAuth, AuthProvider } from "./contextapi/AuthContext";

import NavBar from "./components/Navbar";
import AdminNavBar from "./admin/AdminNavbar";
import OrganizerNavBar from "./Organizier/OrganizierNavbar" // <-- added
import UserNavBar from "./components/Navbar"// <-- added

import Concerts from "./mainpages/Concerts";
import Events from "./mainpages/Events";
import Movies from "./mainpages/Movies";
import UserLogin from "./authentication/UserLogin";
import Register from "./authentication/Register";
import Contact from "./mainpages/Contact";
import Home from "./mainpages/Home";
import Footer from "./components/Footer";
import AdminDashboard from "./admin/AdminDashboard";
import OrganizerDashboard from "./Organizier/OrganizierDashBoard"; // <-- added
//import UserDashboard from "./user/UserDashboard"; // <-- added

function AppContent() {
  const { role } = useAuth(); // assuming you have role in auth context

  return (
    <Router>
      {/* Navbar based on Role */}
      {
        role === "admin" ? <AdminNavBar /> :
        role === "organizer" ? <OrganizerNavBar /> :
        role === "user" ? <UserNavBar /> :
        <NavBar />
      }

      <div className="pt-4 px-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/concerts" element={<Concerts />} />
          <Route path="/events" element={<Events />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/register" element={<Register />} />
          <Route path="/userlogin" element={<UserLogin />} />
          <Route path="/contact" element={<Contact />} />

          {/* Dashboards */}
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/organizer/dashboard" element={<OrganizerDashboard />} />
        { /* <Route path="/user/dashboard" element={<UserDashboard />} /> */} {/* Uncomment when UserDashboard is available */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
