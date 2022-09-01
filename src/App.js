import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Layout from './component/Layout';
import Home from './component/Home';
import About from './component/About';
import Portfolio from './component/Portfolio';
import Todo from './component/Todo';
import Skill from './component/Skill';

//route는 (첫화면)+메뉴갯수 
function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/portfolio" element={<Portfolio />}/>
          <Route path="/todo" element={<Todo />}/>
          <Route path="/skill" element={<Skill />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
