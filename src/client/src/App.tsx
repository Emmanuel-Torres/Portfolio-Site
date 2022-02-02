import NavBar from "./components/UI/NavBar";
import { Route, Routes } from 'react-router-dom'
import StoryDetails from "./components/Story/StoryDetails";
import Home from "./views/Home";
import Stories from "./views/Stories";
import Projects from "./views/Projects"
import NotFound from "./views/NotFound";
import About from "./views/About";
import styles from "./App.module.css"
import Admin from "./views/Admin";

function App() {
  return (
    <>
      <NavBar />
      <div className={styles.container}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/stories' element={<Stories />} />
          <Route path='/stories/:storyid' element={<StoryDetails />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/about' element={<About />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

//Test comment
