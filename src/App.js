import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Read from './Component/Read';
import Signin from './Component/Signin';
import Signup from './Component/Signup';
import ContextEx from './Component/ContextEx';
import UserContext from './UserContext';
import About from './Component/About';

function App() {
  return (
    <div className="main">
      <h2 className="main-header">React Crud Operations</h2>
      <BrowserRouter>
        <Routes>
          <UserContext.Provider value="Hello">
            <Route exact path="/" element={<Read />} />
            <Route exact path="/Signin" element={<Signin />} />
            <Route exact path="/Signup" element={<Signup />} />
          </UserContext.Provider>
        </Routes>
      </BrowserRouter>
      <ContextEx />
      <About />
    </div>
  );
}

export default App;
