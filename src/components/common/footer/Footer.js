import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import SwiperCore, { EffectFade, Autoplay, Pagination, Navigation } from 'swiper';
import Map from "../../map/KakaoMap";
SwiperCore.use([EffectFade, Autoplay, Pagination, Navigation]);


function Footer() {

  const Slide = (page, imageSrc, imageType) => {
    const SLIDE_PAGE = page;
    let slide = [];
    for (let i = 1; i <= SLIDE_PAGE; i++) {
      slide.push(
        <SwiperSlide className="slide">
          <img src={`${imageSrc + i}.${imageType}`} alt="" />
        </SwiperSlide>
      )
    }
    return slide;
  }

  return (
    <>
      <div className="loction">

        {Map("35.844667414751065", "128.60030082507438", "map", "바른미이비인후과")}

        <div className="loctionDetail">
          <i className="fas fa-map-marker-alt"></i>
          대구광역시 남구 봉덕로 90, 3층(봉덕동)
        </div>

        <div className="content">
          <div className="wrap">
            <ul>
              <li>
                <h3>전화문의</h3>
                <p>
                  진료예약 및 진료관련 상담 <br />
                  <span>053-476-0077</span>
                </p>
              </li>
              <li>
                <h3>진료시간</h3>
                <p>
                  평일 09:00 ~ 19:30 <br />
                  수/토요일 09:00 ~ 12:30 <br />
                  (수술로 인해 오후에 진료X) <br />
                  <span className="lunchTime">※ 점심시간 12:30 ~ 14:00</span>
                </p>
              </li>
              <li>
                <h3>진료예약</h3>
                <a href="#"><img src="/img/main/loction_sns01.png" alt="" /></a>
                <a href="#"><img src="/img/main/loction_sns02.png" alt="" /></a>
                <a href="#"><img src="/img/main/loction_sns03.png" alt="" /></a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="brand">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            "delay": 2500,
            "disableOnInteraction": false,
          }}
          loop={true}
          breakpoints={{
            1600: {
              slidesPerView: 5,
            },
            1200: {
              slidesPerView: 4,
            },
            800: {
              slidesPerView: 3,
            },
            600: {
              slidesPerView: 2,
            }
          }}
          className="brandSlide"
        >
          {Slide(5, '/img/main/brand0', 'png')}
        </Swiper>
      </div>
      <footer>
        <div className="fixedSns">
          <ul>
            <li><a href="" target="_blank"><img src="/img/qick01.svg" alt="" />네이버예약</a></li>
            <li><a href="https://blog.naver.com/barunmiclinic" target="_blank"><img src="/img/qick02.svg" alt="" />블로그</a></li>
            <li><a href="" target="_blank"><img src="/img/qick03.svg" alt="" />카톡상담</a></li>
            <li><a href="https://www.youtube.com/channel/UCyzeTUsLWn8exFtjj7uLaTg" target="_blank"><img src="/img/qick04.svg" alt="" />유튜브</a></li>
            <li><a href="https://www.instagram.com/barunmi/?hl=ko" target="_blank"><img src="/img/qick05.svg" alt="" />인스타그램</a></li>
          </ul>
          <div className="top" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }}><i className="fa-solid fa-caret-up"></i>TOP</div>
        </div>

        <a href="tel:053-476-0077" className="tel"><img src="/img/call.svg" alt="" /></a>

        <div className="wrap">
          <div>
            <a href="/" className="logo">
              <img src="/img/ft_logo.svg" alt="" />
            </a>
            <p>
              사업자등록번호 : 443-02-02252 ㅣ 대표 : 최요한 <span>l</span><br className="br" /> 의료기관명칭 : 바른미이비인후과의원<br />
              주소 : 대구 남구 봉덕로 90 3층 대표전화 : 053-476-0077
            </p>
          </div>
          {/* <ul className="sns">
      <li><a href=""><img src="/img/ft_sns01.png" alt="" /></a></li>
      <li><a href=""><img src="/img/ft_sns02.png" alt="" /></a></li>
      <li><a href="https://blog.naver.com/barunmiclinic"><img src="/img/ft_sns03.png" alt="" /></a></li>
      <li><a href="https://www.instagram.com/barunmi/"><img src="/img/ft_sns04.png" alt="" /></a></li>
      <li><a href="https://www.youtube.com/channel/UCyzeTUsLWn8exFtjj7uLaTg"><img src="/img/ft_sns05.png" alt="" /></a></li>
    </ul> */}
        </div>

      </footer>
    </>
  )
}

export default Footer;