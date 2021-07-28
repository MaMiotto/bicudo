import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import history from "../src/services/history";
import HeaderOff from "./components/Header/headerOff";
import {ToastContainer} from 'react-toastify';
import GlobalStyles from "./utils/globalStyles";

function App() {
  return (
      <Router history={history}>
        <HeaderOff/>
        <ToastContainer autoClose={3000} />
        <GlobalStyles/>
        <Routes />
      </Router>
  );
}

export default App;
