import React from "react";
import { Route, Switch, useParams } from "react-router-dom";

function Contact() {
  let { id } = useParams();

  return (
    <>
      <img style={{ width: '100%' }} src={`/img/subPage/contact/contact0${id}_content.jpg`} alt="" className="pcimg" />
      <img style={{ width: '100%' }} src={`/img/subPage/contact/800/contact0${id}_content.jpg`} alt="" className="submoimg800" />
    </>
  )
}

export default Contact;