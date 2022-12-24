import { QuestionProvider } from "../providers/QuestionProvider";
import UserProvider from "../providers/UserProvider";
import Router from "./Routes";

function App() {
  return (
    <>
      <QuestionProvider>
        <UserProvider>
          <Router />
        </UserProvider>
      </QuestionProvider>
    </>
  );
}

export default App;
