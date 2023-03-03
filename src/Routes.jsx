import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Kontakt = React.lazy(() => import("pages/Kontakt"));
const LadOne = React.lazy(() => import("pages/LadOne"));
const LandThree = React.lazy(() => import("pages/LandThree"));
const LandTwo = React.lazy(() => import("pages/LandTwo"));
const LandOne = React.lazy(() => import("pages/LandOne"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/landone" element={<LandOne />} />
          <Route path="/landtwo" element={<LandTwo />} />
          <Route path="/landthree" element={<LandThree />} />
          <Route path="/ladone" element={<LadOne />} />
          <Route path="/kontakt" element={<Kontakt />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
