import UserProvider from "../providers/UserProvider/UserProvder";
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
