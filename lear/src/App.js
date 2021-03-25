import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import LitterClassicationPage from './pages/LitterClassificationPage';
import LawPage from './pages/LawPage';
import ContactUsPage from './pages/ContactUsPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" component={HomePage} exact />
        <Route path="/litterclassification" component={LitterClassicationPage} />
        <Route path="/law" component={LawPage} />
        <Route path="/contactus" component={ContactUsPage} />

      </div>
    </Router>

  );
}

export default App;
