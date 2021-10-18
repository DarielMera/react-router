
import {BrowserRouter as Router, 
  Switch,
  Route,
  NavLink} from 'react-router-dom'
  import About from './components/About'
  import Home from './components/home'
import './App.css'

function App() {
  return (
    <Router>
          
      <header>
          <nav style ={{
              paddin: '1em', 
              backgroundColor: 'darksalmon',
              display: "flex",
              justifyContent: 'space-between'}}>

                <NavLink exact to="/">Home</NavLink>
                <NavLink exact to="/about">about</NavLink>
                <NavLink exact to="/contact">contact</NavLink>

          </nav>
          </header>

            <Switch>

              <Route path='/contact'>
                <h1>Contact Us</h1>
              </Route>

              <Route path='/about'>
                <About />
              </Route>

              <Route path='/' component={Home} />

          </Switch>

      </Router>
      
      )
      
      }

export default App;
