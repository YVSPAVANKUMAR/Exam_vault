import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Exams from "./pages/Exams";
import Subjects from "./pages/Subjects";
import Resources from "./pages/Resources";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <Navbar />
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/"         element={<Home />} />
            <Route path="/exams"    element={<Exams />} />
            <Route path="/subjects" element={<Subjects />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/about"    element={<About />} />
            <Route path="*"         element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
