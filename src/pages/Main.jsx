import React from "react";
import img from "../assets/img/img.jpg";
import Rate from "../components/Rate";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

function Main({ reviews }) {
  const navigate = useNavigate();

  return (
    <>
      {" "}
      <div className="btn-wrap flex">
        <Button
          onClick={() => {
            navigate("/create");
          }}
        >
          기록하기
        </Button>
      </div>
      <div className="art-list">
        <ul className="grid grid-cols-5 gap-4">
          {reviews.map((review, index) => {
            return (
              <li className="rounded-lg border-2" key={index}>
                <div className="art-img">
                  <img src={img} alt="" />
                </div>
                <div className="art-info p-4">
                  <ul className="flex flex-wrap">
                    <li
                      className="w-1/2 mb-2"
                      onClick={() => {
                        navigate("/view");
                      }}
                    >
                      <h2 className="text-primary font-semibold text-xs mb-1">
                        분류
                      </h2>
                      <p>{review.sort}</p>
                    </li>
                    <li className="w-1/2 mb-2">
                      <h2 className="text-primary font-semibold text-xs mb-1">
                        제목
                      </h2>
                      <p>{review.title}</p>
                    </li>
                    <li className="w-1/2">
                      <h2 className="text-primary font-semibold text-xs mb-1">
                        날짜
                      </h2>
                      <p>{review.date}</p>
                    </li>
                    <li className="w-1/2">
                      <h2 className="text-primary font-semibold text-xs mb-1">
                        별점
                      </h2>
                      <Rate />
                    </li>
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Main;
