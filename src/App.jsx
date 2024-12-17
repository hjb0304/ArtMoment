import "./assets/scss/style.scss";
import { useState, useReducer, useRef, createContext } from "react";
import Main from "./pages/Main";
import Create from "./pages/Create";
import View from "./pages/View";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route, data } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";

const mockData = [
  {
    id: 1,
    sort: "ex",
    title: "리지",
    date: new Date().toLocaleDateString(),
    rate: 4,
    desc: "꿀잼",
  },
];

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];

    case "UPDATE":
      return state.map((i) =>
        String(i.id) === String(action.data.id) ? action.data : i
      );

    case "DELETE":
      return state.filter((i) => String(i.id) !== String(action.id));

    default:
      return state;
  }
}

export const ReviewStateContext = createContext();
export const ReviewDispatchContext = createContext();

function App() {
  const [data, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  const handleAddReview = (sort, title, date, rate, desc) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        sort,
        title,
        date,
        rate,
        desc,
      },
    });
  };

  const handleUpdateReview = (id, sort, title, date, rate, desc) => {
    dispatch({
      type: "UPDATE",
      data: {
        id,
        sort,
        title,
        date,
        rate,
        desc,
      },
    });
  };

  const handleDeleteReview = (id) => {
    dispatch({ type: "DELETE", id });
  };

  return (
    <>
      <BrowserRouter>
        <Header />
        <div
          className="content px-24 py-6 flex flex-col gap-4"
          style={{ minHeight: "calc(100vh - 160px)" }}
        >
          <ReviewStateContext.Provider value={data}>
            <ReviewDispatchContext.Provider
              value={{
                handleAddReview,
                handleUpdateReview,
                handleDeleteReview,
              }}
            >
              <Routes>
                <Route path="/" element={<Main />}></Route>
                <Route path="/view/:id" element={<View />}></Route>
                <Route path="/create" element={<Create />}></Route>
              </Routes>
            </ReviewDispatchContext.Provider>
          </ReviewStateContext.Provider>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
