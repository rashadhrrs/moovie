import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import Navbar from './component/Navbar/Navbar';
import Home from './pages/Home'

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={Home}/>
      </Router>
    </div>
  );
}

export default App;
