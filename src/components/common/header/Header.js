import React, { useState, useEffect, useRef } from "react";
import { Route, Link, useParams } from "react-router-dom";

import { MenuList } from "./data.js";

function Header() {

  let [menuBox, setMenuBox] = useState(false);
  let [isSubMenu, setIsSubMenu] = useState(false);
  let [subIndex, setSubIndex] = useState(0);

  useEffect(() => {
    // console.log(subIndex);
    // console.log(isSubMenu);
  })

  return (
    <header className={menuBox == false ? "" : "on"}>
      <a href="/" className="logo">
        <img src="/img/hd_logo.svg" alt="" />
      </a>

      <nav className="site">
        <a href="#">
          <img src="/img/sub_logo01.svg" alt="" />
          <b>성형외과</b>
          <i className="fa-solid fa-chevron-right"></i>
        </a>

        <a href="#">
          <img src="/img/sub_logo02.svg" alt="" />
          <b>수면클리닉</b>
          <i className="fa-solid fa-chevron-right"></i>
        </a>
      </nav>

      <nav
        onMouseOver={() => { setIsSubMenu(true) }}
        onMouseOut={() => { setIsSubMenu(false) }}
        className="menu pc"
      >
        <div className="wrap">
          <MenuLists
            MenuList={MenuList}
            MenuBox={setMenuBox}
            SubIndex={setSubIndex}
            subIndex={subIndex}
            isSubMenu={isSubMenu}
          ></MenuLists>
        </div>
        <SubMenuLists
          MenuList={MenuList}
          MenuBox={setMenuBox}
          subIndex={subIndex}
          isSubMenu={isSubMenu}
        ></SubMenuLists>
      </nav>

      <nav className="menu mobile">
        <div
          className={menuBox == false ? "button" : "button view"}
          onClick={() => { setMenuBox(!menuBox) }}>
          <i className="fas fa-bars"></i>
        </div>

        <div
          className={menuBox == false ? "bg" : "bg view"}
          onClick={() => { setMenuBox(false) }}
        ></div>

        <div className={menuBox == false ? "menuBox" : "menuBox view"}>
          <MoMenuLists
            MenuList={MenuList}
            MenuBox={setMenuBox}
            SubIndex={setSubIndex}
            subIndex={subIndex}
            isSubMenu={isSubMenu}
          ></MoMenuLists>
        </div>
        
      </nav>
    </header>
  )
}

function MenuLists(props) {
  return (
    <ul>
      {
        props.MenuList.map((a, i) => {
          return (
            <li
              key={i}
              onMouseOver={() => { props.SubIndex(i) }}
              className={
                props.isSubMenu === true
                  ? props.subIndex === i
                    ? `on`
                    : ``
                  : ``
              }>
              <Link
                onClick={() => { props.MenuBox(false) }}
                to={`/${a.url}/1`}>{a.name}</Link>
              {
                a.subMenu == ""
                  ? null
                  : <ol>
                    {
                      a.subMenu.map((b, j) => {
                        return (
                          <li key={j}><Link to={`/${a.url}/${j + 1}`}>{b}</Link></li>
                        )
                      })
                    }
                  </ol>
              }
            </li>
          )
        })
      }
    </ul>
  )
}

function SubMenuLists(props) {
  return (
    props.MenuList.map((a, i) => {
      return (
        a.subMenu == ""
          ? null
          : <div className={
            props.isSubMenu === true
              ? props.subIndex === i
                ? `sub on`
                : `sub`
              : `sub`
          }>
            <ol>
              {
                a.subMenu.map((b, j) => {
                  return (
                    <li key={j}><Link to={`/${a.url}/${j + 1}`}>{b}</Link></li>
                  )
                })
              }
            </ol>
          </div>
      )
    })
  )
}

const MoMenuLists = (props) => {
  const [view, setView] = useState();

  const addView = (i) => {
    i === view ? setView('') : setView(i);
  }

  return(
    <ul>
      {
        props.MenuList.map((a,i)=>{
          return(
            <li
                onClick={() => {
                addView(i);
            }}>
              {a.name}
                {view === i && view !== 6 &&
                  <ol>
                  {
                    a.subMenu.map((b,j) => {
                      return (
                        <li key={j}><Link to={`/${a.url}/${j + 1}`}>{b}</Link></li>
                      )
                    })
                  }
                </ol>
              }
            </li>
          )
        })
      }
    </ul>
  )
}


export default Header;