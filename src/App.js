import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Quiz from './pages/Quiz';
import Stu_login from './pages/Stu_login/Stu_login';
import Adi_login from './pages/Adi_login/Adi_login';
import Home from './pages/Home/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Login />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/stu_login" element={<Stu_login />} />
          <Route path="/adi_login" element={<Adi_login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
