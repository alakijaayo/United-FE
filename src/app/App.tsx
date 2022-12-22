import UserProvider from "../providers/UserProvider";
import Router from "./Routes";

function App() {
  return (
    <>
      <UserProvider>
        <Router />
      </UserProvider>
    </>
  );
}

export default App;
