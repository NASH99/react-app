import './App.css';
import { Link,Route, Routes } from "react-router-dom";
import { Home } from "./views/Home/index"


const About = () => <h1>About</h1>;


function App() {
  return (

    <div className='App'>
      <header>
        <h1>Titulo</h1>
        <nav>
          <li><Link to='/'> Home</Link></li>
          <li><Link to='/About'> About</Link></li>
        </nav>
      </header>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>

    </div>
  );
}

export default App;
