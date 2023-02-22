import React, { useState } from "react";
import { Route, Switch, useParams } from "react-router-dom";

import { blood, various } from "./data";
import "../../../sass/subPage/safe.scss";

function Safe() {
  let { id } = useParams();
  const [bloodTap, setBloodTap] = useState(1);
  const [variousTap, setVariousTap] = useState(1);

  return (
    id !== "2"
      ? <>
        <img style={{ marginTop: '50px', width: '100%' }} src={`/img/subPage/safe/safe0${id}_content.jpg`} alt="" className="pcimg" />
        <img style={{ marginTop: '50px', width: '100%' }} src={`/img/subPage/safe/800/safe0${id}_content.jpg`} alt="" className="moimg" />
      </>
      : <div className="safe">
        <div className="wrap">
          <div className="title">
            <h2>질환•기능 검사</h2>
            <div className="bar"></div>

            <p>
              질환의 유무파악 및 각각의 조직들이 제대로 된 역활과 기능을 <br />
              하고 있는지 확인하기 위한 검사
            </p>
          </div>

          <div className="container">
            <h2>{`<혈액검사>`}</h2>
            <ul className="tap">
              {
                blood.map((a, i) => {
                  return (
                    <li key={i} onClick={() => { setBloodTap(i + 1) }} className={bloodTap === i + 1 ? "on" : ""}>{a.h3}</li>
                  )
                })
              }
            </ul>

            <div className="view">
              <ul>
                <li><img src={`/img/subPage/safe/혈액검사0${bloodTap}.jpg`} alt="" /></li>
                <li>
                  <h3>{blood[bloodTap - 1].h3}</h3>
                  <p dangerouslySetInnerHTML={{ __html: blood[bloodTap - 1].p }}></p>
                </li>
              </ul>
            </div>
          </div>

          <div className="container">
            <h2>{`<다양한 검사>`}</h2>
            <ul className="tap t2">
              {
                various.map((a, i) => {
                  return (
                    <li key={i} onClick={() => { setVariousTap(i + 1) }} className={variousTap === i + 1 ? "on" : ""}>{a.h3}</li>
                  )
                })
              }
            </ul>

            <div className="view">
              <ul>
                <li><img src={`/img/subPage/safe/다양한검사0${variousTap}.jpg`} alt="" /></li>
                <li>
                  <h3>{various[variousTap - 1].h3}</h3>
                  <p dangerouslySetInnerHTML={{ __html: various[variousTap - 1].p }}></p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Safe;