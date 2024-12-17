import React, { useRef, useState, useParams } from "react";
import Rate from "../components/Rate";
import img from "../assets/img/img.jpg";
import Button from "../components/Button";
import Select from "../components/Select";
import Textarea from "../components/Textarea";
import Input from "../components/Input";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";

function Create({ addReview, addId }) {
  const navigate = useNavigate();
  const params = useParams();

  const [startDate, setStartDate] = useState(new Date());

  const sort = useRef();
  const title = useRef();
  const date = useRef();
  const rate = useRef();
  const desc = useRef();

  const handleSave = () => {
    const enteredSort = sort.current.value;
    const enteredTitle = title.current.value;
    // const enteredDate = date.current.value;
    const enteredRate = rate.current.value;
    const enteredDesc = desc.current.value;

    if (
      enteredSort === "" ||
      enteredTitle === "" ||
      startDate === "" ||
      enteredRate === "" ||
      enteredDesc === ""
    ) {
      return;
    }
    addReview({
      sort: enteredSort,
      title: enteredTitle,
      date: startDate.toLocaleDateString(),
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
              <option value="cc">공연</option>
            </Select>
          </li>
          <li className="flex items-center gap-4">
            <h3 className="font-semibold">제목</h3>
            <Input ref={title} />
          </li>
          <li className="flex items-center gap-4">
            <h3 className="font-semibold">날짜</h3>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              dateFormat="yyyy/MM/dd"
              className="input"
              ref={date}
            />
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
              // navigate(`/`);
              // handleSave();
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
