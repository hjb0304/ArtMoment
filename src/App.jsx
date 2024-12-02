import "./assets/scss/style.scss";
// import { SvgIconComponent } from "@mui/icons-material";
import Main from "./pages/Main";
import Create from "./pages/Create";
import View from "./pages/View";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/view" element={<View />}></Route>
          <Route path="/create" element={<Create />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
