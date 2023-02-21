import React from "react";
import { Route, Switch, useParams } from "react-router-dom";

function Ear() {
  let { id } = useParams();

  return (
    <>
      <img style={{ marginTop: '50px', width: '100%' }} src={`/img/subPage/ear/ear0${id}_content.jpg`} alt="" className="pcimg" />
      <img style={{ marginTop: '50px', width: '100%' }} src={`/img/subPage/ear/800/ear0${id}_content.jpg`} alt="" className="submoimg800" />
    </>
  )
}

export default Ear;