import "./styles/app.scss"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from "./pages/About";
import Labs1_4 from "./pages/Labs1_4";
import Navbar from "./components/Navbar";
import Labs5 from "./pages/Labs5_";

function App() {
  return (
      <BrowserRouter>
          <Navbar/>
        <Routes>
            <Route path="/about" element={<About/>}/>
            <Route path="/paint/1-4" element={<Labs1_4/>}/>
            <Route path="/paint/5" element={<Labs5/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;

/*TODO:
    0. Maybe make the project for its logical end from tutorial video
    1. Make the multiPage app
    2. Use ReactRouter & try to do it for yourself (https://reactrouter.com/en/main/start/tutorial)
    3. First page: Main (i) (greeting, brief instructions, brief information about the creator, the purpose of the work, etc.)
       Second page (labs 1 - 4)
       Third page  (labs 5...)
    4. U fcikng CAN DO IT mtherfcker! =) ~(& yes, I know, that it`s your problems, how u`ll do it) ;)
    5. Connect with my GitHub
*  */
