import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Answer from "../pages/Answer";
import HomePage from "../pages/HomePage";
import Questions from "../pages/Questions";

function Router() {
  const questionRoutes = ["/easy", "/medium", "/hard"];
  const answerRoutes = ["/correct", "/incorrect"];
  const [route, setRoute] = useState("");

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {questionRoutes.map((path) => (
        <Route
          key={`${path}`}
          path={path}
          element={<Questions setRoute={setRoute} />}
        />
      ))}
      {answerRoutes.map((path) => (
        <Route key={`${path}`} path={path} element={<Answer route={route} />} />
      ))}
    </Routes>
  );
}

export default Router;
