import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import history from "../src/services/history";
import HeaderOff from "./components/Header/headerOff";

function App() {
  return (
      <Router history={history}>
        <HeaderOff/>
        <Routes />
      </Router>
  );
}

export default App;
