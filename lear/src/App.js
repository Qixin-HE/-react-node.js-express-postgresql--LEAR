import logo from './logo.svg';
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
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div id="page-body">
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/litterclassification" component={LitterClassicationPage} />
            <Route path="/law/:name" component={LawPage} />
            <Route path="/contactus" component={ContactUsPage} />
            <Route path="/article-list" component={ArticlesListPage} />
            <Route component={NotFoundPage} />
          </Switch>

        </div>


      </div>
    </Router>

  );
}

export default App;
