import './App.css';
import AddStartForm from './features/AddStartForm';
import FinalForm from './features/FinalForm';
import Home from './pages/Home.js';
import Custom from './pages/Custom'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}></Route>

      <Route path="chestionar">
        <Route index element={<FinalForm />} />
          <Route path="custom">
            <Route index element={<Custom />} />
          </Route>
      </Route>

      
    </Routes>
  );
}

export default App;
