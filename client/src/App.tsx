import NavBar from "./components/UI/NavBar";
import { Route, Routes } from 'react-router-dom'
import Story from "./components/Story/Story";
import Home from "./views/Home";
import Stories from "./views/Stories";
import Projects from "./views/Projects"
import NotFound from "./views/NotFound";
import NewStory from "./views/NewStory";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/stories' element={<Stories />} />
        <Route path='/stories/:productid' element={<Story />}/>
        <Route path='/projects' element={<Projects />} />
        <Route path='/new-story' element={<NewStory />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;