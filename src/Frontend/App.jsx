import { Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import FindAPet from "./pages/FindAPet";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="FindAPet" element={<FindAPet />} />
    </Routes>
  );
}
