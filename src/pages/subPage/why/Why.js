import React from "react";
import { Route, Switch, useParams } from "react-router-dom";
import "../../../sass/subPage/why.scss";

import "../../../sass/subPage/mediStaff.scss";


function Why() {
  let { id } = useParams();
  return (
    <>
      <div className="wrap">
        {
          id == '1' &&
          <div>
            <div className="whyDTS">
              <div className="_pc">

                <div className="top">
                  <img className="logo" src={`/img/subPage/why/logo.png`} />왜 바른미인가?</div>
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
              <div className="_mobile">

                <div className="top"><img className="logo" src={`/img/subPage/why/logo.png`} />왜 바른미인가?</div>
                <div className="mid">
                  <div>쉽지 않은 걸음이 헛되지 않도록</div>
                  <div>바르게 진료할 수 있는 것들만 담았습니다.</div>
                </div>
                <div className="bot">
                  <div>
                    <div>
                      <div className="head">DEVELOP</div>
                      <div className="tail">혁신과 발전</div>
                    </div>
                    <div>
                      <div className="head">TRUST</div>
                      <div className="tail">공감과 신뢰</div>
                    </div>
                  </div>
                  <div className="service">
                    <div className="head">SERVICE</div>
                    <div className="tail">많은 의료 서비스</div>
                  </div>
                </div>
              </div>

            </div>
            <div className="whyDigital">
              <div className="head">Digital System</div>
              <div className="tail">바른미&nbsp;<b>디지털진료</b></div>
              <div className="box">
                <div>
                  <div><bold>코성형</bold></div>
                  <div>
                    <div><light>비주 절개 없이</light><medium>&nbsp;코막힘 개선(코 안) +</medium></div>
                    <div><medium>예쁜 코 라인 완성(콧대,코끝)</medium> <light>이</light></div>
                    <div><light>가능한 수술방법입니다.</light></div>
                  </div>
                  <div className="moveButton"><a href="#/nose/1">바로가기 &nbsp; → </a></div>
                  <div className="boxImg1"></div>
                </div>
                <div>
                  <div><bold>초음파</bold></div>
                  <div>
                    <div><medium>갑상선 결절</medium><light>을 발견하고</light></div>
                    <div><light>평가하는데</light><medium>&nbsp;가장 정확한</medium> </div>
                    <div><medium>방법</medium><light>입니다.</light></div>
                  </div>

                  <div className="moveButton"><a href="#/neck/1">바로가기 &nbsp; → </a></div>

                  <div className="boxImg2"></div>
                </div>
                <div>
                  <div><bold>어지럼증</bold></div>
                  <div>
                    <div><light>비주 절개 없이</light><medium>&nbsp;코막힘 개선(코 안) +</medium></div>
                    <div><medium>예쁜 코 라인 완성(콧대,코끝)</medium> <light>이</light></div>
                    <div><light>가능한 수술방법입니다.</light></div>
                  </div>
                  <div className="moveButton"><a href="#/ear/1">바로가기 &nbsp; → </a></div>
                  <div className="boxImg3"></div>
                </div>

              </div>
            </div>
            <div className="youtube">
              <div className="spaceFirst"></div>
              <div className="text">
                <div className="top">바른미이비인후과</div>
                <div className="mid">유튜브</div>
                <div className="mid">바로가기</div>
                <div className="bot">
                  <img src={`/img/subPage/why/youtubeIcon.svg`} alt="" />
                  <a href="https://www.youtube.com/watch?v=ixOTPKacTDw"><div>유튜브 채널 바로가기+</div></a>
                </div>
              </div>

              <div className="img"> <img src={`/img/subPage/why/youtube.jpg`} alt="" /> </div>
              <div className="spaceLast"></div>
            </div>
            <div className="whyDevelop">
              <div className="box">

                <div>
                  <div>
                    <img src={`/img/subPage/why/develop01.jpg`} alt="" />
                  </div>
                  <div>
                    <div className="num">01</div>
                    <div><bold> 끊임없는 연구</bold></div>
                    <div>
                      <div>환자에게 더 나은 결과를</div>
                      <div>선사하고자 끊임없이 연구합니다.</div>
                    </div>
                  </div>

                </div>
                <div>
                  <div>
                    <img src={`/img/subPage/why/develop02.jpg`} alt="" />
                  </div>
                  <div>
                    <div className="num">02</div>
                    <div><bold>진심을 다해 진료</bold></div>
                    <div>
                      <div>환자 만족, 환자 행복을</div>
                      <div>최우선 가치로 생각하여 고객의 삶의 질을</div>
                      <div>높이기 위해 환자 한 분 한 분</div>
                      <div>진심을 다해 진료합니다.</div>
                    </div>
                  </div>
                </div>

                <div>
                  <div>
                    <img src={`/img/subPage/why/develop03.jpg`} alt="" />
                  </div>
                  <div>
                    <div className="num">03</div>
                    <div><bold>바른미만의 노하우</bold></div>
                    <div>
                      <div>다양한 경험을 통해 쌓인 노하우를</div>
                      <div>바탕으로 더욱 만족도 높은 결과를</div>
                      <div>이끌어낼 수 있도록 노력합니다.</div>
                    </div>
                  </div>
                </div>



              </div>
            </div>
          </div>
        }


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
