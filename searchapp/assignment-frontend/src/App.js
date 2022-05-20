import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import ShowBook from './pages/ShowBook';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<SearchBar  />} />
        <Route path="/book/:bookid" element={<ShowBook/>} />
      </Routes>
    </Router>
  );

}

export default App;
