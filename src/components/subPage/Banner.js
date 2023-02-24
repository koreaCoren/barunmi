import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { MenuList } from "../common/header/data";

import "../../sass/subPage/banner.scss"

function Banner() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  let { id, tap } = useParams();

  let menu = null;
  let url = null;
  let title = null;
  let subTitle = null

  switch (id) {
    case "why":
      title = tap === '2'
        ? '바른미 의료진'
        : tap === '3'
          ? '바른미 검사실' : '바른미 둘러보기';
      menu = MenuList[0].subMenu;
      url = MenuList[0].subUrl;
      subTitle = MenuList[0].subTitle;
      break;
    case "noseSurgery":
      title = MenuList[1].name;
      menu = MenuList[1].subMenu;
      url = MenuList[1].subUrl;
      subTitle = MenuList[1].subTitle;
      break;
    case "nose":
      title = MenuList[2].name;
      menu = MenuList[2].subMenu;
      url = MenuList[2].subUrl;
      subTitle = MenuList[2].subTitle;
      break;
    case "neck":
      // title = MenuList[3].name;
      title = tap === '1'
        ? '갑상선 초음파'
        : tap === '2'
          ? '경동맥 초음파'
          : tap === '3'
            ? '경부·침샘 초음파' : '역류성 후두질환';
      menu = MenuList[3].subMenu;
      url = MenuList[3].subUrl;
      subTitle = MenuList[3].subTitle;
      break;
    case "safe":
      title = MenuList[4].name;
      menu = MenuList[4].subMenu;
      url = MenuList[4].subUrl;
      subTitle = MenuList[4].subTitle;
      break;
    case "ear":
      title = MenuList[5].name;
      menu = MenuList[5].subMenu;
      url = MenuList[5].subUrl;
      subTitle = MenuList[5].subTitle;
      break;
    case "contact":
      title = MenuList[6].name;
      menu = MenuList[6].subMenu;
      url = MenuList[6].subUrl;
      subTitle = MenuList[6].subTitle;
      break;
    default:
      break;
  }

  const [mainMenuOn, setMainMenuOn] = useState(false);
  const [subMenuOn, setSubMenuOn] = useState(false);

  return (
    <>
      {
        id == 'why' && tap == '1'
          ?
          <div className="banner_why">
            <img src={`/img/subPage/${id}/whyBanner.jpg`} alt="" />
          </div>
          :
          id == 'why' && tap != '1'
            ?
            <div className="banner">
              <img src={`/img/subPage/${id}/banner.jpg`} alt="" className="pcimg" />
              <img src={`/img/subPage/${id}/mobile/banner.jpg`} alt="" className="moimg" />
              <div className="title">
                <h2>{title}</h2>
              </div>
            </div>
            :
            <div className="banner">
              <img src={`/img/subPage/${id}/banner.jpg`} alt="" className="pcimg" />
              <img src={`/img/subPage/${id}/mobile/banner.jpg`} alt="" className="moimg" />
              <div className="title">
                <h2 style={title === "진료상담" ? { borderBottom: "none" } : null}>{menu[tap - 1] === "" ? title : menu[tap - 1]}</h2>
                <h3>{subTitle[tap - 1]}</h3>
              </div>
            </div>
      }

      {
        menu == "" || (id == 'why' && tap == '1')
          ? null
          : <nav className="subNav">
            <div className="wrap nav">
              <div className="pc">
                <ul>
                  {
                    menu.map((a, i) => {
                      return (
                        <li key={i} className={tap == url[i] ? "on" : ""}><Link to={`/${id}/${url[i]}`}>{a}</Link></li>
                      )
                    })
                  }
                </ul>
              </div>
              <div className="mobile">
                <ul>
                  <li className={mainMenuOn == true ? "on" : ""} onClick={() => { setMainMenuOn(!mainMenuOn) }}>
                    <h3>{title}<i class="fas fa-chevron-down"></i></h3>
                    <ol>
                      {
                        MenuList.map((a, i) => {
                          return (
                            <li key={i}><Link to={`/${a.url}/1`}>{a.name}</Link></li>
                          )
                        })
                      }
                    </ol>
                  </li>
                  <li className={subMenuOn == true ? "on" : ""} onClick={() => { setSubMenuOn(!subMenuOn) }}>
                    <h3>{menu[tap - 1]}<i class="fas fa-chevron-down"></i></h3>
                    <ol>
                      {
                        menu.map((a, i) => {
                          return (
                            <li key={i}><Link to={`/${id}/${url[i]}`}>{a}</Link></li>
                          )
                        })
                      }
                    </ol>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
      }
    </>
  )
}

export default Banner;