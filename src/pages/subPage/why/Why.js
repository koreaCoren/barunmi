import React from "react";
import { Link } from "react-router-dom";

import "../../../sass/subPage/why.scss";

function Why() {
  return (
    <>
      <div className="whyBanner">
        <img className="pcimg" style={{ width: "100%", }} src="/img/subPage/why/pc_banner.jpg" alt="" />

        <div className="whyBarunmi">
          <div className="wrap">
            <h2>왜 바른미인가?</h2>
            <h3>
              쉽지않은 걸음이 헛되지 않도록 <br />
              바르게 진료 할 수 있는 것들만 담았습니다.
            </h3>
            <ul>
              <li>
                <h4>DEVELOP</h4>
                <p>혁신과 발전</p>
              </li>
              <li>
                <h4>TRUST</h4>
                <p>공감과 신뢰</p>
              </li>
              <li>
                <h4>SERVICE</h4>
                <p>많은 의료 서비스</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="digital">
          <div className="wrap">
            <h2>Digital System</h2>
            <h3>바른미 <b>디지털진료</b></h3>
            <ul>
              <li>
                <h4>코성형</h4>
                <p>
                  비주 절개 없이 <b>코막힘 개선(코 안)+ <br />
                    예쁜 코 라인 완성(콧대, 코끝)</b> 이 <br />
                  가능한 수술방입니다.
                </p>
                <Link>바로가기 → </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Why;