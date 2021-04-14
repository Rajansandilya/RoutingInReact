import React from 'react'
import About from './About'
import Home from './Home'
import Forms from './Forms'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
class App extends React.Component{
    render(){
        return (
            <div>
               <Router>
               <Link to="">Home</Link>
               <br></br>
               <Link to="/About">About</Link>
               <Link to="/Forms">Forms</Link>

               <Route exact path="/" component={Home}/>
               <Route path="/about" component={About}/>
               <Route path="/forms" component={Forms}/>
               </Router> 
            </div>
        )
    }
}
export default App