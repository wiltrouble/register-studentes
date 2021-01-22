import './App.css';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home';
import Reports from './pages/Reports';
import Products from './pages/Products';
import Register from './pages/Register';
import Login from './components/Login'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <div className="container h-75">
          <Route path='/' exact component={Home}/>
          <Route path='/login' exact component={Login}/>
          <Route path='/products' exact component={Products}/>
          <Route path='/register' exact component={Register}/>
          </div>
        </Switch>
      </Router>
    </>
  );
}

export default App;
