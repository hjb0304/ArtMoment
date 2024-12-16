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
    selectedReviewId: undefined,
    review: [],
  });

  const handleAddReview = (reviewData) => {
    const newProject = { ...reviewData, id: parseInt(Math.random() * 100) };

    setReviewState((prevState) => {
      return { ...prevState, review: [...prevState.review, newProject] };
    });
    console.log(reviewState);
  };

  const handleSelectReview = (id) => {
    setReviewState((prevState) => {
      return { ...prevState, selectedReviewId: id };
    });
  };

  const selectedReview = reviewState.review.find((review) => {
    review.id === reviewState.selectedReviewId;
  });
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
              element={
                <Main
                  reviews={reviewState.review}
                  onSelectReview={handleSelectReview}
                />
              }
            ></Route>
            <Route
              path="/view/:id"
              element={<View review={selectedReview} />}
            ></Route>
            <Route
              path="/create"
              element={
                <Create
                  addReview={handleAddReview}
                  // addId={handleAddReview.newProject.id}
                />
              }
            ></Route>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
