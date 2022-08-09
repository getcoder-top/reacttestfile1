import './App.css';
import Sidebar from './components/sidebar';
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import Home from './pages/home';
import Invoicegenerator from './pages/invoicegenerator';

function App() {
  return (
    <div>
      <Router>
        <Invoicegenerator />
        {/* <Sidebar /> */}
        <Route path='/home' component={Home}/>
        <Route path='/invoicegenerator' component={Invoicegenerator}/>
      </Router>
    </div>
  )
}

export default App;
