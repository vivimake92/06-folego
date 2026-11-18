import { BrowserRouter, Routes, Route } from "react-router";

import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Modalities from "./pages/Modalities";
import About from "./pages/about";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <main className="page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/modalidades" element={<Modalities />} />
          <Route path="sobre" element={<About />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
