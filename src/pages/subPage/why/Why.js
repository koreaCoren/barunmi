import React from "react";
import { Route, Switch, useParams } from "react-router-dom";

import "../../../sass/subPage/mediStaff.scss";

function Why() {
  let { id } = useParams();
  return (
    <>
      <div className="wrap">
        {id === "2" && (
          <>
            <div className="인사말">
              <div>
                <img
                  src={`/img/subPage/introduction/의료진/따옴표1아이콘.png`}
                  alt=""
                />
              </div>
              <div>
                <p className="fs34 bolder">안녕하십니까?</p>
              </div>
              <div>
                <p className="fs34 bolder">
                  <p className="fcBrand fs34 bold">
                    바른미 이비인후과 성형외과 &nbsp;
                  </p>
                  대표원장 최요한입니다.
                </p>
              </div>
              <div>
                <p className="fs24">
                  저희 바른미의 철학은
                  <p className="fs24 bold">"바른진료로 아름답게"</p> 입니다.
                </p>
              </div>
              <div>
                <img
                  src={`/img/subPage/introduction/의료진/따옴표2아이콘.png`}
                  alt=""
                />
              </div>
              <div>
                <p className="fs30 lh12">
                  바른 진료를 위해 여러분들께 <br />
                  <strong className="fs30 bolder">3가지의 약속</strong>을
                  드리겠습니다.
                </p>
              </div>
            </div>
            <div className="약속">
              <div>
                <div></div>
                <div className="fs38 fcBrand bold">01</div>
                <div>
                  <p className="fs24 fc146">
                    <strong className="fs24 fcBlack bolder">
                      깊이 있는 전문성과 최신의 의료 진료
                    </strong>
                    를 통해
                    <br />
                    정확한 진단과 올바른 치료를 제공하겠습니다
                  </p>
                </div>
                <div></div>
              </div>
              <div>
                <div></div>
                <div className="fs38 fcBrand bold">02</div>
                <div>
                  <p className="fs24 fc146">
                    분석하고 발전하여{" "}
                    <strong className="fs24 fcBlack bolder">
                      트렌드를 선도하는 미적감각
                    </strong>
                    으로 완전한
                    <br />
                    아름다움을 선사하겠습니다.
                  </p>
                </div>
                <div></div>
              </div>
              <div>
                <div></div>
                <div className="fs38 fcBrand bolder">03</div>
                <div>
                  <p className="fs24 fc146">
                    내 가족을 대하듯 여러분들의 이야기를 경청하고
                    <br />
                    <strong className="fs24 fcBlack bolder">
                      과잉없고 따뜻한 진료로
                    </strong>
                    로 신뢰를 드리겠습니다.
                  </p>
                </div>
                <div></div>
              </div>
            </div>
            <div className="서명">
              <div>
                <p className="fs26">
                  이를 바탕으로 환자분들의 몸과 마음이 <br />
                  바르고 아름다워지는 그날까지 최선을 다하겠습니다.
                </p>
              </div>
              <div>
                <p className="fs26">바른미 이비인후과 성형외과 대표원장</p>
                <p>사인</p>
              </div>
            </div>

            <div className="소개">
              <div className="wrap">
                <div className="타이틀">
                  <div>
                    <p className="fs24 fcBrand ls10">바른미이비인후과</p>
                  </div>
                  <div>
                    <p className="fs44 lh12">
                      실력있는&nbsp;
                      <strong className="fs44 bolder">
                        원장님을 소개합니다.
                      </strong>
                    </p>
                  </div>
                </div>
                <div className="flexRow">
                  <div className="원장이미지">
                    <img
                      src={`/img/subPage/introduction/의료진/원장님프로필.png`}
                    />
                  </div>
                  <div className="원장약력">
                    <div>
                      <p>
                        <strong className="fs44">최 요 한</strong>대표원장
                      </p>
                      <br />
                      <p className="fs24 fcBrand">
                        YoHan-Choi.M.D | 이비인후과 전문의
                      </p>
                    </div>
                    <div>
                      <ul>
                        <li>
                          <img
                            src={`/img/subPage/introduction/의료진/체크아이콘.png`}
                          />
                          <p className="fs26 bold">약력</p>
                        </li>
                        <li>이비인후과 전문의</li>
                        <li>전) 강남 라봄 성형외과 원장</li>
                        <li>전) 영남대학교병원 이비인후과 임상교수</li>
                        <li>서울아산병원 이비인후과 전임의 수련</li>
                      </ul>
                    </div>
                    <div>
                      <ul>
                        <li>
                          <img
                            src={`/img/subPage/introduction/의료진/체크아이콘.png`}
                          />
                          <p className="fs26 bold">학회활동</p>
                        </li>
                        <li>대한안면성형재건학회 정회원</li>
                        <li>아시아안면성형학회 정회원</li>
                        <li>대한미용외과학회 정회원</li>
                        <li>대한수면학회 정회원</li>
                        <li>대한비과학회 정회원</li>
                        <li>대한이과학회 정회원</li>
                        <li>대한초음파의학회 정회원</li>
                        <li>대한미용레이저학회 정회원</li>
                        <li>대한이비인후과학회 정회원</li>
                      </ul>
                    </div>
                    <div>
                      <p className="fs26 bold">등재 논문 목록 보기</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        <img
          src={`/img/subPage/why/why_content_${id}.jpg`}
          alt=""
          style={{ width: "100%" }}
          className="subPcImg"
        />
        <img
          src={`/img/subPage/why/mobile/why_content_${id}.jpg`}
          alt=""
          style={{ width: "100%" }}
          className="subMoImg800"
        />
        <img
          src={`/img/subPage/why/mobile/why_content_${id}.jpg`}
          alt=""
          style={{ width: "100%" }}
          className="subMoImg500"
        />
      </div>
    </>
  );
}

export default Why;
