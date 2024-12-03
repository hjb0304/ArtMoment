import React from "react";
import Rate from "../components/Rate";
import img from "../assets/img/img.jpg";
import Button from "../components/Button";

function View() {
  return (
    <>
      <h2 className="font-semibold">기록 상세</h2>
      <div className="border-2 p-4 flex gap-4 rounded h-[341px]">
        <div className="rounded overflow-hidden">
          <img src={img} alt="" />
        </div>
        <div className="text-sm">
          {" "}
          <div className="flex">
            <span>전시</span>
            <h3>전시 제목</h3>
          </div>
          <div>2024.12.25</div>
          <Rate />
          <p>내용</p>
        </div>
      </div>
      <div className="btn-wrap flex justify-between">
        <Button>목록</Button>
        <div className="flex gap-2">
          {" "}
          <Button>수정</Button>
          <Button> 삭제</Button>
        </div>
      </div>
    </>
  );
}

export default View;
