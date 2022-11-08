import "./App.css";

import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar.js";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import About from "./pages/About";
import Detail from "./pages/Detail";
import PrivateRouter from "./pages/PrivateRouter";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/example-webSite-via-react" element={<Home />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/:id" element={<PrivateRouter />}>
          <Route path="" element={<Detail />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
