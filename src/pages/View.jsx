import React from "react";
import Rate from "../components/Rate";
import img from "../assets/img/img.jpg";
import Button from "../components/Button";

function View() {
  return (
    <>
      <h2 className="font-bold">기록 상세</h2>
      <div className="border-2 p-4 flex gap-4 rounded h-[341px]">
        <div className="rounded overflow-hidden">
          <img src={img} alt="" />
        </div>
        <div>
          <ul className="flex flex-col gap-4 text-sm">
            {" "}
            <li>
              <div className="flex items-center gap-2">
                <span className="text-xs">전시</span>
                <h3 className="font-semibold">전시 제목</h3>
              </div>
            </li>
            <li>
              <div>2024.12.25</div>
            </li>
            <li>
              <Rate />
            </li>
            <li>
              <p>내용</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="btn-wrap flex justify-between">
        <Button isOutline>목록</Button>
        <div className="flex gap-2">
          {" "}
          <Button>수정</Button>
          <Button color="primary">삭제</Button>
        </div>
      </div>
    </>
  );
}

export default View;
