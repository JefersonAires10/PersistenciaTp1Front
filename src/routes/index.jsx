import { Routes, Route, Navigate } from "react-router-dom";
import TableComponent from "../shared/components/Table";

export function Router() {
  return (
    <Routes>
        <Route path="/clasification" element={<TableComponent />} />
        <Route
            path="/"
            element={<Navigate to="/clasification" replace />}
        />
    </Routes>
  );
}