import React from "react";
import Rate from "../components/Rate";
import img from "../assets/img/img.jpg";
import Button from "../components/Button";

function Create() {
  return (
    <>
      <h2 className="font-bold">기록하기</h2>
      <div className="border-2 p-4 flex gap-4 rounded h-[341px]">
        <div className="rounded overflow-hidden">
          <img src={img} alt="" />
        </div>
        <ul className="flex flex-col gap-4 text-sm">
          {" "}
          <li className="flex items-center gap-4">
            <h3 className="font-semibold">분류</h3>
            <select name="" id="">
              <option value=""></option>
            </select>
          </li>
          <li className="flex items-center gap-4">
            <h3 className="font-semibold">제목</h3>
            <input type="text" className="border-1 rounded" />
          </li>
          <li className="flex items-center gap-4">
            <h3 className="font-semibold">날짜</h3>
            <div>2024.12.25</div>
          </li>
          <li className="flex items-center gap-4">
            <h3 className="font-semibold">평점</h3>
            <Rate />
          </li>
          <li className="flex items-center gap-4">
            <h3 className="font-semibold">내용</h3>
            <textarea name="" id=""></textarea>
          </li>
        </ul>
      </div>
      <div className="btn-wrap flex justify-between">
        <Button isOutline>목록</Button>
        <div className="flex gap-2">
          {" "}
          <Button>등록</Button>
        </div>
      </div>
    </>
  );
}

export default Create;
