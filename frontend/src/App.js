import {BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import history from '../src/services/history';


function App() {
  return (
    <Router history={history}>
      <Routes />
    </Router>
  );
}

export default App;
