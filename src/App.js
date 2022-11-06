import "./App.css";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar.js";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
