import React, { useState } from "react";
import { Route, Switch, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";

import "../../../sass/subPage/why.scss";
import "../../../sass/subPage/mediStaff.scss";
import "../../../sass/subPage/laboratory.scss";
import "../../../sass/subPage/lookAround.scss";

function Why() {
  let { id } = useParams();
  const [isPop, setIsPop] = useState(false);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const activePop = () => {
    console.log(isPop);
    setIsPop(!isPop);
  };
  return (
    <>
      <div className="wrap">
        {id == "1" && (
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
              <div className="_pc">
                <div className="head">Digital System</div>
                <div className="tail">
                  바른미&nbsp;<b>디지털진료</b>
                </div>
                <div className="box">
                  <div>
                    <div><bold>코성형</bold></div>
                    <div>
                      <div><light>비주 절개 없이</light><medium>&nbsp;코막힘 개선(코 안) +</medium></div>
                      <div><medium>예쁜 코 라인 완성(콧대,코끝)</medium> <light>이</light></div>
                      <div><light>가능한 수술방법입니다.</light></div>
                    </div>
                    <div className="moveButton"><a href="#/nose/1">바로가기 &nbsp; → </a></div>
                    <div className="boxImg"><img src={`/img/subPage/why/nose.jpg`} alt="" /></div>
                  </div>
                  <div>
                    <div><bold>초음파</bold></div>
                    <div>
                      <div><medium>갑상선 결절</medium><light>을 발견하고</light></div>
                      <div><light>평가하는데</light><medium>&nbsp;가장 정확한</medium> </div>
                      <div><medium>방법</medium><light>입니다.</light></div>
                    </div>

                    <div className="moveButton"><a href="#/neck/1">바로가기 &nbsp; → </a></div>

                    <div className="boxImg"><img src={`/img/subPage/why/ultrasound.jpg`} alt="" /></div>
                  </div>
                  <div>
                    <div><bold>어지럼증</bold></div>
                    <div>
                      <div><light>비주 절개 없이</light><medium>&nbsp;코막힘 개선(코 안) +</medium></div>
                      <div><medium>예쁜 코 라인 완성(콧대,코끝)</medium> <light>이</light></div>
                      <div><light>가능한 수술방법입니다.</light></div>
                    </div>
                    <div className="moveButton"><a href="#/ear/1">바로가기 &nbsp; → </a></div>
                    <div className="boxImg"><img src={`/img/subPage/why/dizziness.jpg`} alt="" /></div>
                  </div>

                </div>
              </div>
              <div className="_mobile">
                <div className="head">Digital System</div>
                <div className="tail pc">
                  바른미&nbsp;<b>디지털진료</b>
                </div>
                <div className="tail mobile">
                  바른미&nbsp;<b>디지털진료</b>
                </div>
                <div className="box">
                  <div>
                    <div><bold>코성형</bold></div>
                    <div className="text">
                      <div><light>비주 절개 없이</light><medium>&nbsp;코막힘 개선(코 안) +</medium></div>
                      <div><medium>예쁜 코 라인 완성(콧대,코끝)</medium> <light>이</light></div>
                      <div><light>가능한 수술방법입니다.</light></div>
                    </div>
                    <div className="moveButton"><a href="#/nose/1">바로가기 &nbsp; → </a></div>
                    <div className="boxImg _500"><img src={`/img/subPage/why/mobile/nose_500.jpg`} alt="" /></div>
                    <div className="boxImg _800"><img src={`/img/subPage/why/mobile/nose_800.jpg`} alt="" /></div>
                  </div>
                  <div>
                    <div><bold>초음파</bold></div>
                    <div className="text">
                      <div><medium>갑상선 결절</medium><light>을 발견하고</light></div>
                      <div><light>평가하는데</light><medium>&nbsp;가장 정확한</medium> </div>
                      <div><medium>방법</medium><light>입니다.</light></div>
                    </div>

                    <div className="moveButton"><a href="#/neck/1">바로가기 &nbsp; → </a></div>

                    <div className="boxImg _500"><img src={`/img/subPage/why/mobile/ultrasound_500.jpg`} alt="" /></div>
                    <div className="boxImg _800"><img src={`/img/subPage/why/mobile/ultrasound_800.jpg`} alt="" /></div>
                  </div>
                  <div>
                    <div><bold>어지럼증</bold></div>
                    <div className="text">
                      <div><light>비주 절개 없이</light><medium>&nbsp;코막힘 개선(코 안) +</medium></div>
                      <div><medium>예쁜 코 라인 완성(콧대,코끝)</medium> <light>이</light></div>
                      <div><light>가능한 수술방법입니다.</light></div>
                    </div>
                    <div className="moveButton"><a href="#/ear/1">바로가기 &nbsp; → </a></div>
                    <div className="boxImg _500"><img src={`/img/subPage/why/mobile/dizziness_500.jpg`} alt="" /></div>
                    <div className="boxImg _800"><img src={`/img/subPage/why/mobile/dizziness_800.jpg`} alt="" /></div>
                  </div>

                </div>
              </div>
            </div>


            <div className="youtube">
              <div className="spaceFirst"></div>
              <div className="text">
                <div className="top">바른미이비인후과</div>
                <div className="mid _pc">유튜브</div>
                <div className="mid _pc">바로가기</div>
                <div className="mid _mobile">유튜브 바로가기</div>
                <div className="bot">
                  <img src={`/img/subPage/why/youtubeIcon.svg`} alt="" />
                  <a href="https://www.youtube.com/watch?v=ixOTPKacTDw"><div>유튜브 채널 바로가기+</div></a>
                </div>
              </div>

              <div className="img">
                <img className="_pc" src={`/img/subPage/why/youtube.jpg`} alt="" />
                <img className="_mobile" src={`/img/subPage/why/mobile/youtube_mobile.jpg`} alt="" />
              </div>
              <div className="spaceLast"></div>
            </div>
            <div className="whyDevelop">
              <div className="box">

                <div>
                  <div>
                    <img className="_pc" src={`/img/subPage/why/develop01.jpg`} alt="" />
                    <img className="_mobile_800" src={`/img/subPage/why/mobile/develop01_800.jpg`} alt="" />
                    <img className="_mobile_500" src={`/img/subPage/why/mobile/develop01_500.jpg`} alt="" />
                  </div>
                  <div>
                    <div className="num">01</div>
                    <div><bold> 끊임없는 연구</bold></div>
                    <div>
                      <div className="_pc">환자에게 더 나은 결과를</div>
                      <div className="_pc">선사하고자 끊임없이 연구합니다.</div>
                      <div className="_mobile_800">환자에게 더 나은 결과를 선사하고자</div>
                      <div className="_mobile_800">끊임없이 연구합니다.</div>
                      <div className="_mobile_500">환자에게 더 나은 결과를 선사하고자</div>
                      <div className="_mobile_500">끊임없이 연구합니다.</div>
                    </div>
                  </div>

                </div>
                <div>
                  <div>
                    <img className="_pc" src={`/img/subPage/why/develop02.jpg`} alt="" />
                    <img className="_mobile_800" src={`/img/subPage/why/mobile/develop02_800.jpg`} alt="" />
                    <img className="_mobile_500" src={`/img/subPage/why/mobile/develop02_500.jpg`} alt="" />
                  </div>
                  <div>
                    <div className="num">02</div>
                    <div><bold>진심을 다해 진료</bold></div>
                    <div>
                      <div className="_pc">환자 만족, 환자 행복을</div>
                      <div className="_pc">최우선 가치로 생각하여 고객의 삶의 질을</div>
                      <div className="_pc">높이기 위해 환자 한 분 한 분</div>
                      <div className="_pc">진심을 다해 진료합니다.</div>
                      <div className="_mobile_800">환자 만족, 환자 행복을 최우선 가치로</div>
                      <div className="_mobile_800">생각하여 고객의 삶의 질을 높이기 위해</div>
                      <div className="_mobile_800">환자 한 분 한 분 진심을 다해 진료합니다.</div>
                      <div className="_mobile_500">환자 만족, 환자 행복을 최우선 가치로</div>
                      <div className="_mobile_500">생각하여 고객의 삶의 질을 높이기 위해</div>
                      <div className="_mobile_500">환자 한 분 한 분 진심을 다해 진료합니다.</div>
                    </div>
                  </div>
                </div>

                <div>
                  <div>
                    <img className="_pc" src={`/img/subPage/why/develop03.jpg`} alt="" />
                    <img className="_mobile_800" src={`/img/subPage/why/mobile/develop03_800.jpg`} alt="" />
                    <img className="_mobile_500" src={`/img/subPage/why/mobile/develop03_500.jpg`} alt="" />
                  </div>
                  <div>
                    <div className="num">03</div>
                    <div><bold>바른미만의 노하우</bold></div>
                    <div>
                      <div className="_pc">다양한 경험을 통해 쌓인 노하우를</div>
                      <div className="_pc">바탕으로 더욱 만족도 높은 결과를</div>
                      <div className="_pc">이끌어낼 수 있도록 노력합니다.</div>
                      <div className="_mobile_800">다양한 경험을 통해 쌓인 노하우를 바탕으로</div>
                      <div className="_mobile_800">더욱 만족도 높은 결과를 이끌어낼 수 있도록</div>
                      <div className="_mobile_800">노력합니다.</div>
                      <div className="_mobile_500">다양한 경험을 통해 쌓인 노하우를 바탕으로</div>
                      <div className="_mobile_500">더욱 만족도 높은 결과를 이끌어낼 수 있도록</div>
                      <div className="_mobile_500">노력합니다.</div>
                    </div>
                  </div>
                </div>



              </div>
            </div>
          </div>
        )}

        {id === "2" && (
          <>
            <div className="StaffIntro">
              <div>
                <img
                  src={`/img/subPage/introduction/의료진/따옴표1아이콘.png`}
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
                  <br className="mo lh14"></br>
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
            <div className="StaffPromise">
              <div>
                <div></div>
                <div className="fs38 fcBrand bold num">01</div>
                <div>
                  <p className="fs24 fc146">
                    <strong className="fs24 fcBlack bolder">
                      깊이 있는 전문성과 최신의 의료 진료
                    </strong>
                    를 통해
                    <br className="pc" />
                    정확한 진단과 올바른 치료를 제공하겠습니다
                  </p>
                </div>
                <div></div>
              </div>
              <div>
                <div></div>
                <div className="fs38 fcBrand bold num">02</div>
                <div>
                  <p className="fs24 fc146">
                    분석하고 발전하여{" "}
                    <strong className="fs24 fcBlack bolder">
                      트렌드를 선도하는 미적감각
                    </strong>
                    으로 완전한
                    <br className="pc" />
                    아름다움을 선사하겠습니다.
                  </p>
                </div>
                <div></div>
              </div>
              <div>
                <div></div>
                <div className="fs38 fcBrand bolder num">03</div>
                <div>
                  <p className="fs24 fc146">
                    내 가족을 대하듯 여러분들의 이야기를 경청하고&nbsp;
                    <br className="pc" />
                    <strong className="fs24 fcBlack bolder">
                      과잉없고 따뜻한 진료로
                    </strong>
                    로 신뢰를 드리겠습니다.
                  </p>
                </div>
                <div></div>
              </div>
            </div>
            <div className="staffSignature">
              <div>
                <p className="fs26">
                  이를 바탕으로 환자분들의 <br className="mo" /> 몸과 마음이
                  <br className="pc" />
                  바르고 아름다워지는 <br className="mo" /> 그날까지 최선을
                  다하겠습니다.
                </p>
              </div>
              <div>
                <p className="fs26">바른미 이비인후과 성형외과 대표원장</p>
                <p className="sign">최요한</p>
              </div>
            </div>

            <div className="chiefIntro">
              <div className="wrap">
                <div className="chiefTitle">
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
                  <div className="chiefImg">
                    <img
                      src={`/img/subPage/introduction/의료진/원장님프로필.png`}
                    />
                  </div>
                  <div className="chiefHistory">
                    <div>
                      <div className="">
                        <p className="fs44 bold">최 요 한</p>
                        <p className="fs24">대표원장</p>
                      </div>
                      <div>
                        <p className="fs24 fcBrand bold">
                          YoHan-Choi.M.D | 이비인후과 전문의
                        </p>
                      </div>
                    </div>
                    <div>
                      <ul>
                        <li>
                          <p className="fs26 bold fcBrand">✓</p>&nbsp;
                          <p className="fs26 bold">약력</p>
                        </li>
                        <li>이비인후과 전문의</li>
                        <li>전) 강남 라봄 성형외과 chief</li>
                        <li>전) 영남대학교병원 이비인후과 임상교수</li>
                        <li>서울아산병원 이비인후과 전임의 수련</li>
                      </ul>
                    </div>
                    <div>
                      <ul>
                        <li>
                          <p className="fs26 bold fcBrand">✓</p>&nbsp;
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
                    <div className="viewThesis">
                      <p
                        className="fs26 bold pointer"
                        onClick={() => {
                          activePop();
                        }}
                      >
                        등재 논문 목록 보기{" "}
                        <p className="fs26 blod fcBrand">▼</p>
                      </p>
                    </div>

                    {isPop === true && (
                      <div className="overray">
                        <div>
                          <div
                            className="popClose"
                            onClick={() => {
                              activePop();
                            }}
                          >
                            X
                          </div>
                          내 업적들이 우루룰마ㅠㄴㄹ루ㅏㅣㄴ리ㅏㅜ룰 나온다
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="chiefCert">
              <div className="slide">
                <Swiper
                  // thumbs={{ swiper: thumbsSwiper }}
                  // modules={[Navigation, Thumbs]}
                  className="mySwiper2"
                  spaceBetween={30}
                  slidesPerView={4}
                  navigation
                >
                  <SwiperSlide>
                    <img
                      src={`/img/subPage/introduction/lookAround/1_thumbnail(B).jpg`}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={`/img/subPage/introduction/lookAround/2_thumbnail(B).jpg`}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={`/img/subPage/introduction/lookAround/3_thumbnail(B).jpg`}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={`/img/subPage/introduction/lookAround/4_thumbnail(B).jpg`}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={`/img/subPage/introduction/lookAround/5_thumbnail(B).jpg`}
                    />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </>
        )}
        {id === "3" && (
          <>
            <div>검사장비</div>
            <div className="laboList">
              <div className="laboSleep">
                <div className="backgroundBox sleep">
                  <div></div>
                  <div className="laboDescription">
                    <h2>수면다원검사</h2>
                    <p>
                      수면장애를 진단하기 위한 검사입니다. 수면다원검사는 수면
                      중{" "}
                      <strong>
                        뇌파, 안구운동, 근육의 움직임, 호흡, 심전도{" "}
                      </strong>
                      등을 종합적으로 측정하고 동시에 수면상태를 비디오를 통해
                      녹화합니다.
                      <br />
                      <br />
                      검사에서 얻어진 기록을 분석하여 수면과 관련된 질환을
                      진단하고 치료방침을 정하게 됩니다.
                    </p>
                  </div>
                </div>
                <div className="laboCheckList">
                  <div className="laboCheck1">
                    <img
                      src={`/img/subPage/introduction/labo/체크아이콘.png`}
                    />
                    <p>비 침습적</p>
                  </div>
                  <div className="laboCheck2">
                    <img
                      src={`/img/subPage/introduction/labo/체크아이콘.png`}
                    />
                    <p>안전하고 편안하게 시행할 수 있는 검사</p>
                  </div>
                  <div className="laboCheck3">
                    <img
                      src={`/img/subPage/introduction/labo/체크아이콘.png`}
                    />
                    <p>수면 중 여러가지 신체기능 검사 가능</p>
                  </div>
                </div>
              </div>

              <div className="laboWave">
                <div className="backgroundBox wave">
                  <div></div>
                  <div className="laboDescription">
                    <h2>초음파 검사</h2>
                    <p>
                      우리 귀에 들리지 않는 높은 주파수의 음파를 인체표면에서
                      내부로 보낸 후, 반사되는 음파를 영상화 한것을 초음파
                      영상이라고 합니다.
                      <br />
                      <br />
                      초음파 검사는 초음파 영상을 실시간으로 얻을 수 있어{" "}
                      <strong>
                        장기의 구조, 운동성, 혈관 내부의 혈류까지 측정이 가능
                      </strong>
                      합니다.
                    </p>
                  </div>
                </div>
                <div className="laboCheckList">
                  <div className="laboCheck1">
                    <img
                      src={`/img/subPage/introduction/labo/체크아이콘.png`}
                    />
                    <p>해로운 방사선이 없음</p>
                  </div>
                  <div className="laboCheck2">
                    <img
                      src={`/img/subPage/introduction/labo/체크아이콘.png`}
                    />
                    <p>
                      통증 없이 환자가 가진 질환을 진단할 수 있는 영상 검사법
                    </p>
                  </div>
                </div>
              </div>

              <div className="laboHear">
                <div className="backgroundBox hear">
                  <div></div>
                  <div className="laboDescription">
                    <h2>청력검사 및 청각 장애진단</h2>
                    <p>
                      병변의 위치와 난청의 정도를 파악하여 정확한 진단과 예방,
                      치료 및 재활의 기본적인 자료를 제공하기 위한 가장 기본적인
                      검사입니다.
                      <br />
                      <br />
                      청각장애진단을 받기 위해서는 기본청력검사인{" "}
                      <strong>순응청력검사(PTA)3회</strong>와 특수청력검사인{" "}
                      <strong>청성뇌간 유발반응검사(ABR)1회</strong>를
                      받아야합니다.
                      <br />
                      <br />
                      두 가지 검사결과를 종합하여 청각장애등급을 결정합니다.
                      <br />
                      <br />
                      <strong>바른미</strong>는 청각장애진단을 위한 청력검사실과
                      청력검사기를 갖추고 있으며, 숙련된 전문의를 통한 정확한
                      진단과 빠르고 신속하게 청각장애진단검사를 받을 수
                      있습니다.
                    </p>
                  </div>
                </div>
                <div className="laboCheckList">
                  <div className="laboCheck1">
                    <img
                      src={`/img/subPage/introduction/labo/체크아이콘.png`}
                    />
                    <p>청력검사실&청력검사기를 갖추고 있음</p>
                  </div>
                  <div className="laboCheck2">
                    <img
                      src={`/img/subPage/introduction/labo/체크아이콘.png`}
                    />
                    <p>정확한 진단</p>
                  </div>
                  <div className="laboCheck3">
                    <img
                      src={`/img/subPage/introduction/labo/체크아이콘.png`}
                    />
                    <p>빠르고 신속한 청각장애진단검사</p>
                  </div>
                </div>
              </div>

              <div className="laboDizziness">
                <div className="backgroundBox dizziness">
                  <div></div>
                  <div className="laboDescription">
                    <h2>어지럼증 검사</h2>
                    <p>
                      어지럼증은 사람들이 흔히 빈혈 때문이라고 추측하지만 요즘
                      같이 과거에 비해 물질적으로 풍요로운 상황에서는 빈혈로
                      인한 어지럼증이 비교적 드뭅니다.
                      <br />
                      <br />
                      따라서 요즘시대에 나타나는 어지럼증의 대부분은 신경계에
                      속하는 전정계의 기능 장애로 나타나는 증상인데 주위가
                      빙글빙글 돌고 비틀거리면서 구역질이나 구토를 동반합니다.
                      <br />
                      <br />
                      중추성 어지럼, 말초성 어지럼 및 비전정계 어지럼을 감별하기
                      위해 신경학적 검사, 안구운동 검사, 안진검사, 자세 균형
                      검사 등을 시행하여 어리점의 원인을 찾을 수 있습니다.
                    </p>
                  </div>
                </div>
                <div className="laboCheckList">
                  <div className="laboCheck1">
                    <img
                      src={`/img/subPage/introduction/labo/체크아이콘.png`}
                    />
                    <p>신경학적 검사 시행</p>
                  </div>
                  <div className="laboCheck2">
                    <img
                      src={`/img/subPage/introduction/labo/체크아이콘.png`}
                    />
                    <p>안구운동 검사 시행</p>
                  </div>
                  <div className="laboCheck3">
                    <img
                      src={`/img/subPage/introduction/labo/체크아이콘.png`}
                    />
                    <p>안진검사 시행</p>
                  </div>
                  <div className="laboCheck4">
                    <img
                      src={`/img/subPage/introduction/labo/체크아이콘.png`}
                    />
                    <p>자세 균형 검사 시행</p>
                  </div>
                </div>
              </div>

              <div className="labo3D-CT">
                <div className="backgroundBox CT">
                  <div></div>
                  <div className="laboDescription">
                    <h2>3D-CT</h2>
                    <p>
                      3D-CT 검사는 작은 조직 밀도 차이를 구별할 수 있고,{" "}
                      <strong>5mm 이하의 작은 암도 진단이 가능</strong>합니다.
                      <br />
                      <br />말 그대로 진단이 필요할 때 필요한 검사 방법입니다.
                    </p>
                  </div>
                </div>
                <div className="laboCheckList">
                  <div className="laboCheck1">
                    <img
                      src={`/img/subPage/introduction/labo/체크아이콘.png`}
                    />
                    <p>신경학적 검사 시행</p>
                  </div>
                  <div className="laboCheck2">
                    <img
                      src={`/img/subPage/introduction/labo/체크아이콘.png`}
                    />
                    <p>안구운동 검사 시행</p>
                  </div>
                  <div className="laboCheck3">
                    <img
                      src={`/img/subPage/introduction/labo/체크아이콘.png`}
                    />
                    <p>안진검사 시행</p>
                  </div>
                  <div className="laboCheck4">
                    <img
                      src={`/img/subPage/introduction/labo/체크아이콘.png`}
                    />
                    <p>자세 균형 검사 시행</p>
                  </div>
                </div>
              </div>

              <div className="laboAllergy">
                <div className="backgroundBox allergy">
                  <div></div>
                  <div className="laboDescription">
                    <h2>알레르기 검사</h2>
                    <p>
                      "알레르기"는 우리 주변에서 흔하게 접할 수 있는 다양한
                      물질들이 몸 안으로 들어왔을 때, 우리 몸의 "면역체계"가
                      과민하게 작용하여 여러 가지 증상들이 생기는 것을 말합니다.
                      <br />
                      <br />
                      알레르기 질환의 기본적인 치료법은{" "}
                      <strong>원인 물질을 "제거"하고 "회피"</strong>하는 것이기
                      때문에 어떠한 항원에 알레르기가 있는지 아는 것이
                      중요합니다.
                    </p>
                  </div>
                </div>
                <div className="laboCheckList">
                  <div className="laboCheck1">
                    <img
                      src={`/img/subPage/introduction/labo/체크아이콘.png`}
                    />
                    <p>피폭량의 최소화로 안전을 확보</p>
                  </div>
                  <div className="laboCheck2">
                    <img
                      src={`/img/subPage/introduction/labo/체크아이콘.png`}
                    />
                    <p>정확한 검사를 제공</p>
                  </div>
                </div>
              </div>

              <div className="laboSmell">
                <div className="backgroundBox smell">
                  <div></div>
                  <div className="laboDescription">
                    <h2>후각 및 미각검사</h2>
                    <p>
                      냄새를 맡는 후각과 맛을 느끼는 미각은 우리 생활에서 중요한
                      역할을 합니다.
                      <br />
                      <br />
                      후각과 미각에 문제가 생겼을 경우 맛있는 음식을 먹고 즐기지
                      못한다는 것 뿐 아니라, 가스가 새거나 화재가 났을 경우 타는
                      냄새를 맡지 못하게 되고, 상한 음식을 맛으로 가려내지
                      못하여 생활 속 위험을 겪을 수도 있습니다.
                    </p>
                  </div>
                </div>
                <div className="laboCheckList">
                  <div className="laboCheck1">
                    <img
                      src={`/img/subPage/introduction/labo/체크아이콘.png`}
                    />
                    <p>정확한 진단과 빠른 치료</p>
                  </div>
                  <div className="laboCheck2">
                    <img
                      src={`/img/subPage/introduction/labo/체크아이콘.png`}
                    />
                    <p>향후 기능 회복 가능</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        {id === "4" && (
          <>
            <div className="wrap">
              <div className="slideBox">
                <Swiper
                  // thumbs={{ swiper: thumbsSwiper }}
                  // modules={[Navigation, Thumbs]}
                  className="mySwiper2"
                  spaceBetween={50}
                  slidesPerView={1}
                  navigation
                >
                  <SwiperSlide>
                    <img
                      src={`/img/subPage/introduction/lookAround/1_thumbnail(B).jpg`}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={`/img/subPage/introduction/lookAround/2_thumbnail(B).jpg`}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={`/img/subPage/introduction/lookAround/3_thumbnail(B).jpg`}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={`/img/subPage/introduction/lookAround/4_thumbnail(B).jpg`}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={`/img/subPage/introduction/lookAround/5_thumbnail(B).jpg`}
                    />
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="thumbBox">
                <Swiper
                  onSwiper={setThumbsSwiper}
                  spaceBetween={10}
                  slidesPerView={4}
                  freeMode={true}
                  watchSlidesProgress={true}
                  modules={[Navigation, Thumbs]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <img
                      src={`/img/subPage/introduction/lookAround/1_thumbnail(S).jpg`}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={`/img/subPage/introduction/lookAround/2_thumbnail(S).jpg`}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={`/img/subPage/introduction/lookAround/3_thumbnail(S).jpg`}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={`/img/subPage/introduction/lookAround/4_thumbnail(S).jpg`}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={`/img/subPage/introduction/lookAround/5_thumbnail(S).jpg`}
                    />
                  </SwiperSlide>
                </Swiper>
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
