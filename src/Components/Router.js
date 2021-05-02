import React from "react";
import {BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Home from "../Routes/Home";
import Search from "../Routes/Search/index";
import Tv from "../Routes/Tv/index";
import Header from "./Header";
import Detail from "../Routes/Detail/index" 

/* Arrow Function 에서 Return을 사용하지 않을 경우 () 를 사용!!! */
export default () => (
   <Router>
        <>
        <Header />
        <Switch>
            <Route path="/" exact="exact" component={Home}/>
            <Route path="/search" exact="exact" component={Search}/>
            <Route path="/tv" exact="exact" component={Tv}/>
            <Route path="/movie/:id" component={Detail} />
            <Route path="/show/:id" component={Detail} />
            <Redirect from="*" to="/"/>
        </Switch>
        </>
   </Router>
    /* Composition : 두 개 이상의 Route를 동시에 랜더링 하는 방식*/
    /* Redirect : 어느 페이지는 Route에서 매치 되지 않으면 Redirect를 Render */
    /* Switch : 한 번에 하나의 Route만 render */
)