import { Routes, Route } from "react-router-dom";
import Home from "./Frontend/pages/home";
import FindAPet from "./Frontend/pages/FindAPet";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/find" element={<FindAPet/>} />
    </Routes>
  );
}
