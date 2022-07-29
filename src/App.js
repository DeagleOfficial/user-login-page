import './App.css';
import Nav from './components/Nav';
import Login from './components/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={
          <>
          <Nav loggedIn = {false}/>
          <Login loggedIn = {false}/>
          </>
        }></Route>

        <Route exact path="/:token" element = {
          <>
          <Nav loggedIn = {true} />
          <Login loggedIn = {true} />
          </>
        }></Route>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
