import React from "react";
import { Route, Switch, useParams } from "react-router-dom";


function Why() {
  let { id } = useParams();
  return (
    <>
      <div className="wrap">
        <img src={`/img/subPage/why/why_content_${id}.jpg`} alt="" style={{ width: "100%" }} className="subPcImg" />
        <img src={`/img/subPage/why/mobile/why_content_${id}.jpg`} alt="" style={{ width: "100%" }} className="subMoImg800" />
        <img src={`/img/subPage/why/mobile/why_content_${id}.jpg`} alt="" style={{ width: "100%" }} className="subMoImg500" />
      </div>
    </>
  )
}

export default Why;