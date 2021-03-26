import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import LitterClassicationPage from './pages/LitterClassificationPage';
import LawPage from './pages/LawPage';
import ContactUsPage from './pages/ContactUsPage';
import ArticlesListPage from './pages/ArticleListPage';
import NavBar from './NavBar';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div id="page-body">
        <Route path="/" component={HomePage} exact />
        <Route path="/litterclassification" component={LitterClassicationPage} />
        <Route path="/law/:name" component={LawPage} />
        <Route path="/contactus" component={ContactUsPage} />
        <Route path="/article-list" component={ArticlesListPage} />
        </div>
        

      </div>
    </Router>

  );
}

export default App;
