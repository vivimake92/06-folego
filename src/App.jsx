import { BrowserRouter, Routes, Route } from "react-router";

import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Modalities from "./pages/Modalities";
import About from "./pages/about";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <main className="page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/modalidades" element={<Modalities />} />
          <Route path="sobre" element={<About />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
