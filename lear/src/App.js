import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import LitterClassicationPage from './pages/LitterClassificationPage';
import LawPage from './pages/LawPage';
import ContactUsPage from './pages/ContactUsPage';
import NavBar from './NavBar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NotFoundPage from './pages/NotFoundPage';
import SearchResult from './pages/SearchResult';
import EventsPage from './pages/EventsPage';
import LoginPage from './components/LoginPage';

import useToken from './components/useToken';


function App() {
  
const { token, setToken } = useToken();

//const { password } = useContext(Context);
if(!token){
    return <LoginPage setToken={setToken}/>
  }

  return (
    <Router>
      <div className="App">
      
        <NavBar />
        <div id="page-body">
        
          <Switch>
          <Route path="/login" component={LoginPage} exact />
            <Route path="/" component={HomePage} exact />
            <Route path="/litterclassification" component={LitterClassicationPage} />
            {/* <Route path="/law/:name" component={LawPage} /> */}
            <Route path="/contactus" component={ContactUsPage} />
            <Route path="/law" component={LawPage} />
            <Route path="/events" component={EventsPage} />
            <Route path="/search/:keyword" component={SearchResult} />

            <Route component={NotFoundPage} />
          </Switch>

        </div>


      </div>
    </Router>

  );
}

export default App;
