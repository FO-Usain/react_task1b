import { BrowserRouter as Router } from "react-router-dom";
import Main from "./main";
import AuthProvider from "./stateManagement/contexts/AuthContext";
import GlobalProvider from "./stateManagement/contexts/GlobalContext";

function App() {
  return (
    <AuthProvider>
      <GlobalProvider>
        <Router>
          <Main />
        </Router>
      </GlobalProvider>
    </AuthProvider>
  );
}

export default App;
