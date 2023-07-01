import './App.css';


import {Contact} from './Component/Contact';
import {Footer} from './Component/Footer';
import Home from './Component/Home';
import Skill from './Component/Skill';
// import { Project } from './Component/Project';
function App() {
  return (
    <div>
      
     <Home/>
    <Skill/>
{/* <Project/> */}
<Contact/>
<Footer/>
    </div>
  );
}

export default App;
