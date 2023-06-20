import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './components/Login';
import Home from './components/Home';
import Detail from './components/Detail';
import Header from './components/Header';

function App() {
  return (
    <div className="app">
       <BrowserRouter>
      <Routes>
        
          <Route  path="/" element={<Login />}>
            
          </Route>
          <Route  path="/home" element={<Home />}>
            
          </Route>
          <Route path="/Detail/:id" element={<>
            <Header />
            <Detail />
          </>
        }>
            
          </Route>
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
