import { Route, Routes } from "react-router-dom";
import NewUser from "./views/NewUser";
import Wireguard from "./views/Wireguard";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Wireguard />} />
        <Route path='/adduser' element={<NewUser />} />
      </Routes>
    </>
  );
}

export default App;
