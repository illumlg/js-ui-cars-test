import './App.css';
import Create from './components/create';
import Read from './components/read';
import Update from './components/update';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

//main page, here all routes are being rendered
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
            <Route exact path='/create' element={<Create />} />
            <Route exact path='/read' element={<Read />} />
            <Route exact path='/update' element={<Update />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
