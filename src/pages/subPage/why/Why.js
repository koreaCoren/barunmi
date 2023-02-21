import React from "react";
import { Route, Switch, useParams } from "react-router-dom";
import "../../../sass/subPage/why.scss";

function Why() {
  let { id } = useParams();
  return (
    <>
      <div className="wrap">
        {
          id == '1' &&
          <div>
            <div className="whyDTS">
              <div className="logo"></div>
              <div className="top">왜 바른미인가?</div>
              <div className="mid">
                <div>쉽지 않은 걸음이 헛되지 않도록</div>
                <div>바르게 진료할 수 있는 것들만 담았습니다.</div>
              </div>
              <div className="bot">
                <div>
                  <div className="head">DEVELOP</div>
                  <div className="tail">혁신과 발전</div>
                </div>
                <div>
                  <div className="head">TRUST</div>
                  <div className="tail">공감과 신뢰</div>
                </div>
                <div>
                  <div className="head">SERVICE</div>
                  <div className="tail">많은 의료 서비스</div>
                </div>
              </div>
            </div>
            <div className="whyDigital">
              <div className="head">Digital System</div>
              <div className="tail">바른미&nbsp;<b>디지털진료</b></div>
              <div className="box">
                <div>
                  <bold>코성형</bold>
                  <div>
                    <div><light>비주 절개 없이</light><medium>&nbsp;코막힘 개선(코 안) +</medium></div>
                    <div><medium>예쁜 코 라인 완성(콧대,코끝)</medium> <light>이</light></div>
                    <div><light>가능한 수술방법입니다.</light></div>



                  </div>
                </div>
                <div>

                </div>
                <div>

                </div>
              </div>
            </div>
          </div>
        }
        {
          id == '2' &&
          <div>
            test2
          </div>
        }

      </div>
    </>
  )
}

export default Why;