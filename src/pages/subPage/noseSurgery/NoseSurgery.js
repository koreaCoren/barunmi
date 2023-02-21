import React from "react";
import { Route, Switch, useParams } from "react-router-dom";

function NoseSurgery() {
  let { id } = useParams();

  return (
    id === "2"
      ? <>
        <img style={{ marginTop: '50px', width: "100%" }} src={`/img/subPage/noseSurgery/noseSurgery0${id}_content.jpg`} alt="" className="subpcimg" />
        <img style={{ marginTop: '50px', width: "100%" }} src={`/img/subPage/noseSurgery/800/noseSurgery0${id}_content.jpg`} alt="" className="submoimg800" />
      </>
      : <>여기 비개방 기능</>
  )
}

export default NoseSurgery;