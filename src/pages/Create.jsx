import React, { useRef } from "react";
import Rate from "../components/Rate";
import img from "../assets/img/img.jpg";
import Button from "../components/Button";
import Select from "../components/Select";
import Textarea from "../components/Textarea";
import Input from "../components/Input";
import { useNavigate } from "react-router-dom";

function Create({ addReview }) {
  const navigate = useNavigate();

  const sort = useRef("");
  const title = useRef("");
  const date = useRef("");
  const rate = useRef("");
  const desc = useRef("");

  const enteredSort = sort.current.value;
  const enteredTitle = title.current.value;
  const enteredDate = date.current.value;
  const enteredRate = rate.current.value;
  const enteredDesc = desc.current.value;

  const handleSave = () => {
    if (
      enteredSort === "" ||
      enteredTitle === "" ||
      enteredDate === "" ||
      enteredRate === "" ||
      enteredDesc === ""
    ) {
      return;
    }
    addReview({
      sort: enteredSort,
      title: enteredTitle,
      date: enteredDate,
      rate: enteredRate,
      desc: enteredDesc,
    });
  };

  return (
    <>
      <h2 className="font-bold">기록하기</h2>
      <div className="border-2 p-4 flex gap-4 rounded h-[341px]">
        <div className="rounded overflow-hidden">
          <img src={img} alt="" />
        </div>
        <ul className="flex flex-col flex-1 gap-4 text-sm">
          {" "}
          <li className="flex items-center gap-4">
            <h3 className="font-semibold">분류</h3>
            <Select ref={sort}>
              <option value="ex">전시</option>
            </Select>
          </li>
          <li className="flex items-center gap-4">
            <h3 className="font-semibold">제목</h3>
            <Input ref={title} />
          </li>
          <li className="flex items-center gap-4">
            <h3 className="font-semibold">날짜</h3>
            <Input ref={date}>2024.12.25</Input>
          </li>
          <li className="flex items-center gap-4">
            <h3 className="font-semibold">평점</h3>
            <Input ref={rate} />
          </li>
          <li className="flex items-center gap-4">
            <h3 className="font-semibold">내용</h3>
            <Textarea ref={desc} />
          </li>
        </ul>
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
              navigate("/view");
              handleSave();
            }}
          >
            등록
          </Button>
        </div>
      </div>
    </>
  );
}

export default Create;
