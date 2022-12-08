import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import Questions from "../pages/Questions";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="easy" element={<Questions />} />
      <Route path="medium" element={<Questions />} />
      <Route path="hard" element={<Questions />} />
    </Routes>
  );
}

export default Router;
