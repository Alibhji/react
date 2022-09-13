import { UserAuthContextProvider } from "./components/scripts/UserAuthContext";
import SignUp from "./pages/sign_up";


function App() {
  return (
    <UserAuthContextProvider>
      <div className="App">
        <SignUp />
      </div>
    </UserAuthContextProvider>
  );
}

export default App;
