import "./assets/scss/style.scss";
import img from "./assets/img/img.jpg";
import SvgIcon from "@mui/material/SvgIcon";
// import { SvgIconComponent } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import StarHalfRoundedIcon from "@mui/icons-material/StarHalfRounded";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";

function App() {
  return (
    <>
      <header className="header w-full h-20 flex justify-between items-center font-bold px-24 border-b-2 border-secondary">
        <h1 className="text-primary">ArtMoments</h1>
        <div className="search flex items-center h-11">
          <input type="text" className="input" />
          <button className="btn btn-icon w-11">
            <SvgIcon component={SearchIcon}></SvgIcon>
          </button>
        </div>
      </header>
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
      <footer className="footer h-20 flex items-center px-24 border-t-1 border-secondary border-dashed">
        copyright@heejung
      </footer>
    </>
  );
}

export default App;
