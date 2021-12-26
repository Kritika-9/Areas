import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Topbar from './components/topbar/Topbar';
import SideBar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import DataTable from './components/areas/DataTable';
function App() {
  return (
    <Router>
      <Topbar/>

      <div className="container">
         <SideBar/>

         <Switch>
         <Route exact path="/">
           <Home/>
         </Route>

         <Route path="/Areas">
           <DataTable/>
         </Route>

        </Switch>


      </div>

    </Router>
  );
}

export default App;
