import './App.css';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Form from './Components/Form/Form';
import Read from './Components/Read/Read';
import Update from './Components/Update/Update';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
          <Route exact path='/' element={<Form/>}></Route>
          <Route exact path='/read' element={<Read/>}></Route>
          <Route exact path='/update/:id' element={<Update/>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
