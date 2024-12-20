import React from "react";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import StarHalfRoundedIcon from "@mui/icons-material/StarHalfRounded";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import SvgIcon from "@mui/material/SvgIcon";

function Rate({ ...props }) {
  return (
    <ul className="flex" {...props}>
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
  );
}

export default Rate;
