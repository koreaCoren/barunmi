import React, { useEffect } from "react";
import { Route, Switch, useParams } from "react-router-dom";

import Banner from "../components/subPage/Banner";
import Contact from "../pages/subPage/contact/Contact";
import Ear from "../pages/subPage/ear/Ear";
import Introduction from "../pages/subPage/introduction/Introduction";
import Neck from "../pages/subPage/neck/Neck";
import Nose from "../pages/subPage/nose/Nose";
import Safe from "../pages/subPage/safe/Safe";
import Why from "../pages/subPage/why/Why";

function SubPage() {
  const { id, tap } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id, tap])

  return (
    <>
      <Banner></Banner>

      <Switch>
        <Route path="/why/:id">
          <Why></Why>
        </Route>
        <Route path="/noseSurgery/:id">
          <Introduction></Introduction>
        </Route>
        <Route path="/nose/:id">
          <Nose></Nose>
        </Route>
        <Route path="/neck/:id">
          <Neck></Neck>
        </Route>
        <Route path="/ear/:id">
          <Ear></Ear>
        </Route>
        <Route path="/safe/:id">
          <Safe></Safe>
        </Route>
        <Route path="/contact/:id">
          <Contact></Contact>
        </Route>
      </Switch>
    </>
  )
}

export default SubPage;