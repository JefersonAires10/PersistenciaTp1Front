import { Routes, Route, Navigate } from "react-router-dom";
import PageClassification from "../pages/PageClassification";

export function Router() {
  return (
    <Routes>
        <Route path="/clasification" element={<PageClassification />} />
        <Route
            path="/"
            element={<Navigate to="/clasification" replace />}
        />
    </Routes>
  );
}