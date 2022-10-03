import './App.css';
import CardListing from './component/CardListing';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from './component/Header';

function App() {
  return (
    <div className=''>
        <Router>
          <Header />
          <Routes>
            <Route exact path="/"  element={<CardListing />} />
            <Route>404 Not Found</Route>
          </Routes>
        </Router>
      </div>
  );
}

export default App;
