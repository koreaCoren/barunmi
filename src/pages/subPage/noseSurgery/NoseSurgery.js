import React, { useState } from "react";
import { Route, Switch, useParams } from "react-router-dom";

import "../../../sass/subPage/noseSurgery.scss";
import { nose } from "./data";
function NoseSurgery() {
  let { id } = useParams();
  const [tap, setTap] = useState(1);
  const imageUrl = "/img/subPage/noseSurgery";

  return (
    id === "2"
      ? <>
        <img style={{ marginTop: '50px', width: "100%" }} src={`/img/subPage/noseSurgery/noseSurgery0${id}_content.jpg`} alt="" className="subpcimg" />
        <img style={{ marginTop: '50px', width: "100%" }} src={`/img/subPage/noseSurgery/800/noseSurgery0${id}_content.jpg`} alt="" className="submoimg800" />
      </>
      :
      <div className="noseSurgery">
        <img style={{ marginTop: '50px', width: "100%" }} src={`/img/subPage/noseSurgery/noseSurgery0${id}-1_content.jpg`} alt="" className="subpcimg" />
        <img style={{ marginTop: '50px', width: "100%" }} src={`/img/subPage/noseSurgery/800/noseSurgery0${id}-1_content.jpg`} alt="" className="submoimg800" />

        <div className="container">
          <div className="top">
            <h3>기능 + 코성형</h3>
            <p>어디서 받아야 할까?</p>
            <div></div>
          </div>
          <div className="bottom">
            <div className="wrap">
              <h3>
                바른미에서는 비개방 절개로 외관의 흉터와 부작용을 최소화 하고 <br />
                <b>내시경을 사용</b> 하여 <b>코막힘의 근본적인 해결이 가능</b>합니다.
              </h3>

              <ul className="tap">
                <li onClick={() => { setTap(1) }} className={tap === 1 ? "on" : ""}>비중격 만곡중</li>
                <li onClick={() => { setTap(2) }} className={tap === 2 ? "on" : ""}>비밸브 협착</li>
                <li onClick={() => { setTap(3) }} className={tap === 3 ? "on" : ""}>비후성 비염</li>
              </ul>

              <div className="view">
                {
                  tap === 3
                    ? <div className="box"></div>
                    : <img src={`${imageUrl}/nose0${tap}.jpg`} alt="" />
                }

                <div>
                  <h4>{nose[tap - 1].h2}</h4>
                  <p dangerouslySetInnerHTML={{ __html: nose[tap - 1].p }}></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <img style={{ width: "100%" }} src={`/img/subPage/noseSurgery/noseSurgery0${id}-2_content.jpg`} alt="" className="subpcimg" />
        <img style={{ width: "100%" }} src={`/img/subPage/noseSurgery/800/noseSurgery0${id}-2_content.jpg`} alt="" className="submoimg800" />

        {/* <div className="title">
          <h2>비개방 내시경 기능코성형</h2>
          <div className="bar"></div>
        </div>

        <div className="wrap">
          <ul className="content">
            <li>
              <h3>
                바른미 <b>비개방 내시경 </b><br />
                <b>기능코성형이란? </b>
              </h3>
              <p>
                바른미 비개방 내시경 기능 코 성형은 내시경을 <br />
                사용하여 비주 절개 없이 <b>코막힘 개선(코 안) + <br />
                  예쁜 코 라인 완성(콧대, 코끝)이 가능한 수술 방법</b> 입니다.
              </p>
            </li>
            <li><img src={`${imageUrl}/기능코성형.jpg`} alt="" /></li>
          </ul>
        </div>

        <div className="noseLine">
          <div className="wrap">
            <h3>
              바른기능, 아름다운 코라인을 위한 <br />
              <b>#바른미 비개방 내시경 기능코성형</b>
            </h3>

            <ul>
              <li>
                <img src={`${imageUrl}/코라인01.jpg`} alt="" />
                <img src={`${imageUrl}/코라인텍스트01.png`} alt="" />
              </li>
              <li>
                <img src={`${imageUrl}/코라인02.jpg`} alt="" />
                <img src={`${imageUrl}/코라인텍스트02.png`} alt="" />
              </li>
            </ul>
          </div>
        </div>

        <div className="title">
          <h2>비개방 내시경 기능코성형</h2>
          <div className="bar"></div>
          <p>
            <b>코성형 수술 시</b> 비개방 코 성형의 최대 약점인 <br />
            좁은 시야를 내시경의 사용으로 극복하여
          </p>
        </div>

        <div className="wrap">
          <div className="borderText">
            기둥(비주)을 절개하지 않아 <b>흉터가 보이지 않습니다.</b>
            <img src={`${imageUrl}/downArrow.png`} alt="" />
          </div>

          <div className="borderText">
            수술 후 비주 동맥이 보존되어<b>코끝으로 혈류 공급이 원할</b>하게 이루어집니다.
            <img src={`${imageUrl}/downArrow.png`} alt="" />
          </div>

          <div className="borderText">
            염증 및 구축코와 같은 대표적인<b>부작용이 나타날 확률이 현저히 낮습니다.</b>
          </div>
        </div>

        <div className="noseList">
          <div className="wrap">
            <ul>
              <li>
                <img src={`${imageUrl}/noseList01.png`} alt="" />
              </li>
              <li>
                <h3>개방</h3>
                <img src={`${imageUrl}/noseList02.png`} alt="" />
                <div>
                  <img src={`${imageUrl}/boxCheck.png`} alt="" />
                  <p>
                    흉터가 남음
                  </p>
                </div>
                <div>
                  <img src={`${imageUrl}/boxCheck.png`} alt="" />
                  <p>
                    회복이 더디고 부작용 <br />
                    위험이 있다.
                  </p>
                </div>
              </li>
              <li>
                <h3>비개방</h3>
                <img src={`${imageUrl}/noseList03.png`} alt="" />
                <div>
                  <img src={`${imageUrl}/boxCheck.png`} alt="" />
                  <p>
                    흉터 최소화
                  </p>
                </div>
                <div>
                  <img src={`${imageUrl}/boxCheck.png`} alt="" />
                  <p>
                    비주동맥 보존으로 부작용 <br />
                    최소화
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="wrap">
          <h3>비염 수술 시</h3>
          <ul>
            <li>
              비염 수술의 핵심인 <br />
              비중격 만곡증을 <br />
              내시경을 사용
            </li>
            <li>
              휘어진 비중격 <br />
              연골과 비중격 뼈까지 <br />
              근본적으로 교정
            </li>
            <li>
              내시경으로 <br />
              점막 손상을 <br />
              최소화
            </li>
            <li>
              개인의 특성에 <br />
              맞게 고주파 절제술 <br />
              또는 점막 하 절제술로 <br />
              하비갑개를 교정
            </li>
          </ul>
        </div> */}
      </div>
  )
}

export default NoseSurgery;