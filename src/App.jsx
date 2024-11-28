import "./assets/scss/style.scss";

function App() {
  return (
    <>
      <header className="header w-full">
        <h1>ArtMoments</h1>
      </header>
      <div className="contents">
        <div className="search w-full flex align-middle">
          <input type="text" />
          <button></button>
        </div>
        <div className="btn-wrap flex justify-items-end">
          <button className="btn">기록하기</button>
        </div>
        <div className="art-list">
          <ul className="flex gap-4">
            <li className="w-1/5 rounded-lg border- border-gray-300 p-4">
              <div className="art-img">
                <img src="" alt="" />
              </div>
              <div className="art-info">
                <ul>
                  <li>
                    <h2>분류</h2>
                    <p></p>
                  </li>
                  <li>
                    <h2>제목</h2>
                    <p></p>
                  </li>
                  <li>
                    <h2>날짜</h2>
                    <p></p>
                  </li>
                  <li>
                    <h2>별점</h2>
                    <ul className="rate">
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </li>
            <li className="w-1/5 rounded-lg border- border-gray-300 p-4">
              <div className="art-img">
                <img src="" alt="" />
              </div>
              <div className="art-info">
                <ul className="flex flex-wrap">
                  <li className="w-1/2">
                    <h2>분류</h2>
                    <p>공연</p>
                  </li>
                  <li className="w-1/2">
                    <h2>제목</h2>
                    <p>리지</p>
                  </li>
                  <li className="w-1/2">
                    <h2>날짜</h2>
                    <p>2024.11.01</p>
                  </li>
                  <li className="w-1/2">
                    <h2>별점</h2>
                    <ul className="rate">
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <footer className="footer"></footer>
    </>
  );
}

export default App;
