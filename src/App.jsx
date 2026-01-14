import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
{/* import Navbar from "./components/Navbar"; */}
import Home from "./pages/Home"
import Login from "./pages/Login";
import TestHome from "./pages/TestHome";


import Profile from "./pages/Profile";
import Subscription from "./pages/Subscription";
import Testboardlayout from "./layout/Testboardlayout";


export default function App() {
  return (
    <>

      {/* Page routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        
        <Route path="/app" element={<Testboardlayout />}>
          <Route path="TestHome" element={<TestHome />} />
          <Route path="profile" element={<Profile />} />
          <Route path="subscription" element={<Subscription />} />
        </Route>
      </Routes>
    </>
  );
}
