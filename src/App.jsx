import "./styles/app.scss"
import Toolbar from "./components/Toolbar";
import SettingBar from "./components/SettingBar";
import Canvas from "./components/Canvas";
function App() {
  return (
    <div className="app">
      <Toolbar/>
      <SettingBar/>
      <Canvas/>
    </div>
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
