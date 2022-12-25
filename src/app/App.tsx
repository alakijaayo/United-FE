import UserProvider from "../providers/UserProvider/UserProvder";
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
