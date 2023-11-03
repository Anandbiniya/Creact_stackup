import { useState } from 'react';
;
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import SignUp from './components/SignUp';
import Login from './components/LogIn';
import Posts from './components/Posts';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <div>
          <Switch>
            <Route path="/signup" component={SignUp} />
            <Route path="/login" component={Login} />
            <Route path="/" component={Posts} />
          </Switch>
        </div>
      </Router>
      anand
    </>
  );
}

export default App;
