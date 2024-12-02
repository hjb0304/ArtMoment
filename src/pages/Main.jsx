import React from "react";
import img from "../assets/img/img.jpg";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import StarHalfRoundedIcon from "@mui/icons-material/StarHalfRounded";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import SvgIcon from "@mui/material/SvgIcon";

function Main() {
  return (
    <div className="content px-24 py-6 flex flex-col gap-6">
      <div className="btn-wrap flex justify-items-end">
        <button className="btn">기록하기</button>
      </div>
      <div className="art-list">
        <ul className="grid grid-cols-5 gap-4">
          <li className="rounded-lg border-2">
            <div className="art-img">
              <img src={img} alt="" />
            </div>
            <div className="art-info p-4">
              <ul className="flex flex-wrap">
                <li className="w-1/2 mb-2">
                  <h2 className="text-primary font-semibold text-xs mb-1">
                    분류
                  </h2>
                  <p>공연</p>
                </li>
                <li className="w-1/2 mb-2">
                  <h2 className="text-primary font-semibold text-xs mb-1">
                    제목
                  </h2>
                  <p>리지</p>
                </li>
                <li className="w-1/2">
                  <h2 className="text-primary font-semibold text-xs mb-1">
                    날짜
                  </h2>
                  <p>2024.11.01</p>
                </li>
                <li className="w-1/2">
                  <h2 className="text-primary font-semibold text-xs mb-1">
                    별점
                  </h2>
                  <ul className="flex">
                    <li>
                      <SvgIcon component={StarRoundedIcon} />
                    </li>
                    <li>
                      <SvgIcon component={StarBorderRoundedIcon} />
                    </li>
                    <li>
                      <SvgIcon component={StarBorderRoundedIcon} />
                    </li>
                    <li>
                      <SvgIcon component={StarBorderRoundedIcon} />
                    </li>
                    <li>
                      <SvgIcon component={StarBorderRoundedIcon} />
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Main;
