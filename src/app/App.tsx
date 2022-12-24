import UserProviderV2 from "../providers/UserProvider/UserProvder";
import Router from "./Routes";

function App() {
  return (
    <>
      <UserProviderV2>
        <Router />
      </UserProviderV2>
    </>
  );
}

export default App;
