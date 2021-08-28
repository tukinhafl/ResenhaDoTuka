import { Home } from './pages/Home'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Register } from './pages/Register'
import { Login } from './pages/Login'
import { Wellcome } from './pages/Wellcome'
import { Fireworks } from './components/Fireworks'
import { Community } from './pages/Community'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Home />
          <Fireworks/>
        </Route>
        <Route path='/register'>
          <Register />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/wellcome/:id'>
          <Wellcome />
        </Route>
        <Route path='/community'>
          <Community />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
