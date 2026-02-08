import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import FindAPet from "./pages/findAPet";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/find" element={<FindAPet/>} />
    </Routes>
  );
}
