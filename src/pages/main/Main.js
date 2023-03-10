import React, { useRef, useState, useEffect } from "react";
import { Route, Link, Switch } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

import Map from "../../components/map/KakaoMap.js"

import { Pretty, System, Youtube } from "./data.js";

import "../../sass/main/main.scss"
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import SwiperCore, { EffectFade, Autoplay, Pagination, Navigation } from 'swiper';
import { within } from "@testing-library/dom";
SwiperCore.use([EffectFade, Autoplay, Pagination, Navigation]);

function Main() {

  let [bgUrl, setBgUrl] = useState("pc");
  useEffect(() => {

    window.addEventListener("load", () => {
      let width = window.innerWidth;
      width > 600 ? setBgUrl("pc") : setBgUrl("m");
    })

    window.addEventListener("resize", () => {
      let width = window.innerWidth;
      width > 600 ? setBgUrl("pc") : setBgUrl("m");
    })
  })

  const MainSlide = () => {
    const slidePage = 3;
    let slide = [];
    for (let i = 1; i <= slidePage; i++) {
      slide.push(
        <SwiperSlide className="slide" style={{ backgroundImage: `url('/img/main/${bgUrl}_main_banner0${i}.jpg')` }}>
        </SwiperSlide>
      )
    }
    return slide;
  }

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

  const SysyemBg = () => {
    return `url('/img/main/${bgUrl}_system_bg.jpg')`;
  }

  const SystemSlide = () => {
    const SLIDE_PAGE = System.length;
    let slide = [];
    for (let i = 0; i < SLIDE_PAGE; i++) {
      slide.push(
        <SwiperSlide className="slide">
          <h4>{System[i].h4}</h4>
          <p dangerouslySetInnerHTML={{ __html: System[i].p }}></p>
          <div className="imageBox">
            {
              System[i].img.map((b, j) => {
                return (
                  <div key={j}>
                    <img src={b.url} alt="" />
                    {b.text}
                  </div>
                )
              })
            }
          </div>
        </SwiperSlide>
      )
    }
    return slide;
  }

  const PrettySlide = () => {
    const SLIDE_PAGE = Pretty.length;
    let slide = [];
    for (let i = 0; i < SLIDE_PAGE; i++) {
      slide.push(
        <SwiperSlide className="slide">
          <img src={`/img/main/pretty0${i + 1}.jpg`} alt="" />
          <h3>{Pretty[i].h3}</h3>
          <h4>{Pretty[i].h4}</h4>
          <p>{Pretty[i].p}</p>
        </SwiperSlide>
      )
    }
    return slide;
  }

  const YoutubeSlide = (page, imageSrc, imageType) => {
    const SLIDE_PAGE = page;
    let slide = [];
    for (let i = 1; i <= SLIDE_PAGE; i++) {
      slide.push(
        <SwiperSlide className="slide">
          <a href={Youtube[i - 1].url} target="_blank">
            <img src={`${imageSrc + i}.${imageType}`} alt="" />
          </a>
        </SwiperSlide>
      )
    }
    return slide;
  }


  return (
    <>
      <div className="mainBanner">
        <Swiper
          spaceBetween={30}
          effect={'fade'}
          speed={1000}
          loop={true}
          autoplay={{
            "delay": 3000,
            "disableOnInteraction": false
          }}
          className="mySwiper mainSlide"
        >
          {MainSlide()}
        </Swiper>
      </div>

      <div className="director">
        <div className="wrap">
          <ul>
            <li><img src="/img/main/director.png" alt="" /></li>
            <li>
              <h2><b>?????????</b>????????????</h2>
              <h3>??????????????? ?????????</h3>
              <p>
                ??????????????? ????????? (??????????????? ?????? ??? 4330???) <br />
                ???)?????? ?????? ???????????? ??????  <br />
                ???)????????????????????? ??????????????? ???????????? <br />
                ?????????????????? ??????????????? ????????? ??????
              </p>
              <Link to='introduction/1'>????????? ??????</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="system" style={{ backgroundImage: SysyemBg() }}>
        <div className="wrap">
          <h2>Barunmi ENT Plastic Surgery Clinic</h2>
          <h3>????????? 5?????? <b>???????????????</b></h3>
          <div className="bar"></div>
          <Swiper
            effect={'fade'}
            loop={true}
            speed={1000}
            autoplay={{
              "delay": 3000,
              "disableOnInteraction": false
            }}
            className="slider"
          >
            {SystemSlide()}
          </Swiper>
        </div>
      </div>

      <div className="pretty">
        <div>
          <h2>??????????????? <b>????????????</b></h2>
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{
              "delay": 3500,
              "disableOnInteraction": false,
            }}
            loop={true}
            breakpoints={{
              1000: {
                slidesPerView: 3,
              },
              800: {
                slidesPerView: 2,
              },
              600: {
                slidesPerView: 1,
              }
            }}
            className="slider"
          >
            {PrettySlide()}
          </Swiper>
          {/* <div className="pageNav">
            <div></div>
          </div> */}
        </div>
      </div>

      <div className="youtube" style={{ backgroundImage: "url('/img/main/youtube_bg.jpg')" }}>
        <div>
          <h2>????????? <b>YOUTUBE</b></h2>
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{
              "delay": 3500,
              "disableOnInteraction": false,
            }}
            loop={true}
            breakpoints={{
              1000: {
                slidesPerView: 3
              },
              600: {
                slidesPerView: 2
              }
            }}
            className="slider">
            {YoutubeSlide(16, '/img/main/youtube', 'jpg')}
          </Swiper>
          <p>
            ????????? ?????? ??????! ????????????????????? A?????? Z??????! <br />
            <b>????????? YOUTUBE</b>??? ?????? ???????????????!
          </p>
          <div className="sns">
            <a href="https://www.instagram.com/barunmi/" target='_blank'>
              <p>
                <b>????????? ?????????</b>
                ????????????
              </p>
              <img src="/img/main/youtube_sns01.png" alt="" />
            </a>
            <a href="https://www.youtube.com/channel/UCyzeTUsLWn8exFtjj7uLaTg" target='_blank'>
              <p>
                <b>????????? ?????????</b>
                ????????????
              </p>
              <img src="/img/main/youtube_sns02.png" alt="" />
            </a>
            <a href="https://blog.naver.com/barunmiclinic" target='_blank'>
              <p>
                <b>????????? ?????????</b>
                ????????????
              </p>
              <img src="/img/main/youtube_sns03.png" alt="" />
            </a>
          </div>
        </div>
      </div>

      <div className="baunmiLook">
        <h2>
          ????????? ????????????
          <div></div>
        </h2>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          centeredSlides={true}
          loop={true}
          autoplay={{
            "delay": 2000,
            "disableOnInteraction": true
          }}
          pagination={{
            el: '.pageingBall'
          }}
          breakpoints={{
            1200: {
              slidesPerView: 3.7
            },
            800: {
              slidesPerView: 3
            }
          }}
          className="baunmiSlide"
        >
          {Slide(10, '/img/main/baunmi_slide0', 'jpg')}
          <div className="pageingBall"></div>
        </Swiper>
      </div>
    </>
  )
}

export default Main;