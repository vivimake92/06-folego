import { BrowserRouter, Routes, Route } from "react-router";

import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Modalities from "./pages/Modalities";
import About from "./pages/about";
import NotFound from "./pages/NotFound";
import Plans from "./pages/Plans";
import Assessments from "./pages/Assessments";
import Contact from "./pages/Contact";
import ModalityDetail from "./pages/ModalityDetail";
import Login from "./pages/Login";
import StudentArea from "./pages/StudentArea";

import AuthProvider from "./contexts/AuthProvide";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />

        <main className="page">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/modalidades" element={<Modalities />} />
            <Route path="/modalidades/:slug" element={<ModalityDetail />} />
            <Route path="sobre" element={<About />} />

            <Route path="/planos" element={<Plans />} />
            <Route path="/avaliacoes" element={<Assessments />} />
            <Route path="/contato" element={<Contact />} />

            <Route path="/login" element={<Login />} />
            <Route
              path="/area-do-aluno"
              element={
                <PrivateRoute>
                  <StudentArea />
                </PrivateRoute>
              }
            />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
