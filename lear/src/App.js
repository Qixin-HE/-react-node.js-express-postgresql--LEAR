import React, { useState, useContext} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import LitterClassicationPage from './pages/LitterClassificationPage';
import LawPage from './pages/LawPage';
import ContactUsPage from './pages/ContactUsPage';
import ArticlesListPage from './pages/ArticleListPage';
import NavBar from './NavBar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NotFoundPage from './pages/NotFoundPage';
import SearchResult from './pages/SearchResult';
import EventsPage from './pages/EventsPage';
import LoginPage from './components/LoginPage';
import { Context } from "./components/Provider";


function App() {
  //const [user, setUser] = useState(false);
  //const [token, setToken] = useState();
  // const handleLogin = e => {
  //   e.preventDefault();
  //   setUser(true);
  // }
// if(!token){
//   return <LoginPage setToken={setToken} />
// }
// const [token, setToken] = useToken();

// const { password } = useContext(Context);
// if(!token){
//     return <LoginPage setToken={setToken}/>
//   }

  return (
    <Router>
      <div className="App">
      
        <NavBar />
        <div id="page-body">
        
          <Switch>
          <Route path="/login" component={LoginPage} exact />
            <Route path="/" component={HomePage} exact />
            <Route path="/litterclassification" component={LitterClassicationPage} />
            <Route path="/law/:name" component={LawPage} />
            <Route path="/contactus" component={ContactUsPage} />
            <Route path="/article-list" component={ArticlesListPage} />
            <Route path="/events" component={EventsPage} />

            <Route component={NotFoundPage} />
          </Switch>

        </div>


      </div>
    </Router>

  );
}

export default App;
