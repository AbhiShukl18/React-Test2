import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import MovieList from './Movieapp/MovieList';
import Moviess from './Moviess/Moviess';
import MovieSearch from './Movieapp/MovieSearch';

function App() {
 
return(
  <div clas="app">
    <Routes>
      
      <Route path='/' element={<Moviess/>} />

      </Routes>
    </div>
  );
  
}

export default App;
