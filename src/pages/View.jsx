import React from "react";
import Rate from "../components/Rate";
import img from "../assets/img/img.jpg";
import Button from "../components/Button";
import { useNavigate, useParams } from "react-router-dom";

function View({}) {
  const navigate = useNavigate();
  const params = useParams();

  return (
    <>
      <h2 className="font-bold">{params.id}기록 상세</h2>
      <div className="border-2 p-4 flex gap-4 rounded h-[341px]">
        <div className="rounded overflow-hidden">
          <img src={img} alt="" />
        </div>
        <div>
          <ul className="flex flex-col gap-4 text-sm">
            {" "}
            <li>
              <div className="flex items-center gap-2">
                <span className="text-xs">{/* {review.sort} */}</span>
                <h3 className="font-semibold">{/* {review.title} */}</h3>
              </div>
            </li>
            <li>
              <div>{/* {review.date} */}</div>
            </li>
            <li>
              <Rate />
            </li>
            <li>
              <p>{/* {review.desc} */}</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="btn-wrap flex justify-between">
        <Button
          isOutline
          onClick={() => {
            navigate("/");
          }}
        >
          목록
        </Button>
        <div className="flex gap-2">
          {" "}
          <Button
            onClick={() => {
              navigate("/create");
            }}
          >
            수정
          </Button>
          <Button
            color="primary"
            onClick={() => {
              navigate("/");
            }}
          >
            삭제
          </Button>
        </div>
      </div>
    </>
  );
}

export default View;
