import './App.css';
import AddStartForm from './features/AddStartForm';
import Home from './pages/Home.js';
import Custom from './pages/Custom'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <AddStartForm/> */}
        {/* <Home/> */}
        <Custom/>
      </header>
    </div>
  );
}

export default App;
