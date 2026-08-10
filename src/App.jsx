import { Route, Routes } from "react-router";

import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import Concepts from "./pages/Concepts";
import ConceptDetail from "./pages/ConceptDetail";

function App() {
  return (
    <>
      <ScrollToTop />

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/concepts" element={<Concepts />} />
        <Route path="/concepts/:slug" element={<ConceptDetail />} />
      </Routes>
    </>
  );
}

export default App;