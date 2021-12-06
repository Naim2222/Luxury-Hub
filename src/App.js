
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import ErrorPage from './components/CommonComponents/ErrorPage/ErrorPage';

import Home from './components/home/Home';

function App() {
  return (
    <BrowserRouter>

      <div className="App">
        <Switch>
          <Route path="/error">
            <ErrorPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

      </div>
    </BrowserRouter>
  );
}

export default App;
