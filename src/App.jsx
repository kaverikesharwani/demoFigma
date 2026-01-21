import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Test from "./pages/test";
import Mcq from "./pages/mcq";
import TestHome from "./pages/TestHome";
import Profile from "./pages/Profile";
import Subscription from "./pages/Subscription";
import Testboardlayout from "./layout/Testboardlayout";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/test" element={<Test />} />

      <Route path="/app" element={<Testboardlayout />}>
        <Route path="testhome" element={<TestHome />} />
        <Route path="mcq" element={<Mcq />} />
        <Route path="profile" element={<Profile />} />
        <Route path="subscription" element={<Subscription />} />
      </Route>
    </Routes>
  );
}
