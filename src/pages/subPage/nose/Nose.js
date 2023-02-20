import React from "react";
import { Route, Switch, useParams } from "react-router-dom";

function Nose() {
  let { id } = useParams();

  return (
    <>
      <img style={{ marginTop: '50px', width: "100%" }} src={`/img/subPage/nose/nose0${id}_content.jpg`} alt="" className="subpcimg" />
      <img style={{ marginTop: '50px', width: "100%" }} src={`/img/subPage/nose/800/nose0${id}_content.jpg`} alt="" className="submoimg800" />
    </>
  )
}

export default Nose;