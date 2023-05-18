import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import SideBar from "./components/SideBar/SideBar";
import PlayList from "./pages/PlayList/PlayList";
import Music from "./pages/Music/Music";
import LoginPage from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SideBar />}>
          <Route index element={<Home />} />
          <Route path="playlist" element={<PlayList />} />
          <Route path="musics" element={<Music />} />
        </Route>
        <Route path="register" element={<SignUp />} />
        <Route path="login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
