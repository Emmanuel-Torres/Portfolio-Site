import NavBar from './components/UI/NavBar/NavBar';
import { Route, Routes } from 'react-router-dom'
import StoryDetails from "./components/Story/StoryDetails";
import Home from "./views/Home/Home";
import Stories from "./views/Stories/Stories";
import Projects from "./views/Projects"
import NotFound from "./views/NotFound";
import About from "./views/About/About";
import styles from "./App.module.css"
import Admin from "./views/Admin";
import Login from "./views/Login";
import Secure from "./views/Secure";

function App() {
  return (
    <>
      <NavBar />
      <div className={styles["app-container"]}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/stories' element={<Stories />} />
          <Route path='/stories/:storyid' element={<StoryDetails />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/about' element={<About />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/login' element={<Login />}/>
          <Route path='/secure' element={<Secure />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

//Test comment
