import "./assets/scss/style.scss";
import { useState } from "react";}
import Main from "./pages/Main";
import Create from "./pages/Create";
import View from "./pages/View";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
const [reviewState, setReviewState] = useState({
  review: []
})

  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="content px-24 py-6 flex flex-col gap-4">
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/view" element={<View />}></Route>
            <Route path="/create" element={<Create />}></Route>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
