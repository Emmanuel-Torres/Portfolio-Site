import NavBar from './components/UI/NavBar/NavBar';
import { Route, Routes } from 'react-router-dom'
import StoryDetails from "./components/StoryDetails/StoryDetails";
import Home from "./views/Home/Home";
import Stories from "./views/Stories/Stories";
import Projects from "./views/Projects/Projects"
import NotFound from "./views/NotFound";
import styles from "./App.module.css"

function App() {
  return (
    <>
      <NavBar />
      <div className={styles["app-container"]}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/blog' element={<Stories />} />
          <Route path='/blog/:storyid' element={<StoryDetails />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

//Test comment
