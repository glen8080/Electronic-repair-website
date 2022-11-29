
import './App.css';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Services from './pages/Services/Services';
import News from './pages/News/News';
import {
  BrowserRouter,
  Routes,
  Route,
  
} from "react-router-dom";

function App() {
  return (
    <div className="App">
         <BrowserRouter>
       
        <Routes>
        <Route path="/" element={
          <Home/> } />
         <Route path='About' element={<About/>}/>
         <Route path='Services' element={<Services/>}/>
         <Route path='News' element={<News/>}/>
        
      </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
