import { Route, Routes } from "react-router";

import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import Concepts from "./pages/Concepts";
import ConceptDetail from "./pages/ConceptDetail";
import Services from "./pages/Services";
import Work from "./pages/Work";
import Media from "./pages/Media";

function App() {
  return (
    <>
      <ScrollToTop />

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/concepts" element={<Concepts />} />
        <Route path="/concepts/:slug" element={<ConceptDetail />} />
        <Route path="/services" element={<Services />} />
        <Route path="/work" element={<Work />} />
        <Route path="/media" element={<Media />} />
      </Routes>
    </>
  );
}

export default App;