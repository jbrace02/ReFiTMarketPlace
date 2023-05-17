import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Colors = React.lazy(() => import("pages/Colors"));
const More = React.lazy(() => import("pages/More"));

const ProjectRoutes = () => {
    return (
        <React.Suspense fallback={<>Loading...</>}>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/more" element={<More />} />
                    <Route path="/colors" element={<Colors />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Router>
        </React.Suspense>
    );
};

export default ProjectRoutes;
