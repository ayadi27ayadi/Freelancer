import './App.css';
import {BrowserRouter, Routes, Route,} from "react-router-dom";

import Signup from './pages/Signup/Signup'; 
import Login from './pages/Login/Login'
import Logout from './pages/Logout/Logout';

function App() {
  const user = localStorage.getItem("token");
  return (
    <div className="App">
      <BrowserRouter>
    <Routes>
    {user && <Route path="/" element={<Logout />} /> }
      <Route path="signup" element={<Signup />} />
      <Route path="singin" element={<Login />} /> 
    </Routes>
  </BrowserRouter>,
    </div>
  );
}

export default App;
