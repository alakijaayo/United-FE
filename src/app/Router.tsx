import { useContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Answer from "../pages/Answer";
import HomePage from "../pages/HomePage";
import Questions from "../pages/Questions";
import Result from "../pages/Result";
import { UserContext } from "../providers/UserProvider";

function Router() {
  const questionRoutes = ["easy", "medium", "hard"];
  const answerRoutes = ["/correct", "/incorrect"];
  const [route, setRoute] = useState("");
  const { state } = useContext(UserContext);
  const { questionCount } = state;
  const isFinished = questionCount === 25;

  return (
    <Routes>
      <Route
        path="/"
        element={<HomePage levels={questionRoutes} setRoute={setRoute} />}
      />
      {questionRoutes.map((path) => (
        <Route key={`${path}`} path={path} element={<Questions />} />
      ))}
      {answerRoutes.map((path) => (
        <Route key={`${path}`} path={path} element={<Answer route={route} />} />
      ))}
      {isFinished && <Route path="/result" element={<Result />} />}
    </Routes>
  );
}

export default Router;
