import React from "react";
import { Route, Switch, useParams } from "react-router-dom";

function Neck() {
  let { id } = useParams();

  return (
    <>
      <img style={{ marginTop: '50px', width: '100%' }} src={`/img/subPage/neck/neck0${id}_content.jpg`} alt="" className="pcimg" />
      <img style={{ marginTop: '50px', width: '100%' }} src={`/img/subPage/neck/800/neck0${id}_content.jpg`} alt="" className="submoimg800" />
    </>
  )
}

export default Neck;