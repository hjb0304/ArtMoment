import "./assets/scss/style.scss";

function App() {
  return (
    <>
      <header className="header w-full h-20 flex justify-between items-center font-bold px-24 border-b-2 border-secondary">
        <h1 className="text-primary">ArtMoments</h1>
        <div className="search w-full flex align-middle h-">
          <input type="text" />
          <button></button>
        </div>
      </header>
      <div className="content px-24 py-6 flex flex-col gap-6">
        <div className="btn-wrap flex justify-items-end">
          <button className="btn">기록하기</button>
        </div>
        <div className="art-list">
          <ul className="flex gap-4">
            <li className="w-1/5 rounded-lg border p-4">
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
            <li className="w-1/5 rounded-lg border p-4">
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
      <footer className="footer h-20 px-24 border-t-1 border-secondary border-dashed"></footer>
    </>
  );
}

export default App;
