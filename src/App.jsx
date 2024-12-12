import "./assets/scss/style.scss";
import { useState } from "react";
import Main from "./pages/Main";
import Create from "./pages/Create";
import View from "./pages/View";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";

function App() {
  const [reviewState, setReviewState] = useState({
    review: [],
  });

  const handleAddReview = (reviewData) => {
    setReviewState((prevState) => {
      return { ...prevState, review: [...prevState.review, reviewData] };
    });
    console.log(reviewState);
  };

  return (
    <>
      <BrowserRouter>
        <Header />
        <div
          className="content px-24 py-6 flex flex-col gap-4"
          style={{ minHeight: "calc(100vh - 160px)" }}
        >
          <Routes>
            <Route
              path="/"
              element={<Main reviews={reviewState.review} />}
            ></Route>
            <Route path="/view" element={<View />}></Route>
            <Route
              path="/create"
              element={<Create addReview={handleAddReview} />}
            ></Route>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
