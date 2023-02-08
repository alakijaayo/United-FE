import UserProvider from "../providers/UserProvider/UserProvider";
import Router from "./Router";

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
