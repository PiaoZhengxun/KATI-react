import React from "react";
import classNames from "classnames";
import { Container } from "reactstrap";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import MainPage from "../../Pages/MainPage/MainPage";
import RankingPage from "../../Pages/RankingPage/RankingPage";
import CategoryPage from "../../Pages/CategoryPage/CategoryPage";
import JoinPage from "../../Pages/JoinPage/JoinPage";
import LoginPage from "../../Pages/LoginPage/LoginPage";
import SearchPage from "../../Pages/SearchPage/SearchPage";
import SocialLoginPage from "../../Pages/MainPage/SocialLoginPage";
import Topbar from "./Topbar";

const Content = ({ sidebarIsOpen, toggleSidebar }) => (
  <Container
    fluid
    className={classNames("content", { "is-open": sidebarIsOpen })}
  >
    <Topbar toggleSidebar={toggleSidebar} />
    <Switch>
      <Route path="/" exact component={MainPage} />
      <Route path="/search" exact component={SearchPage} />
      <Route path="/category" exact component={CategoryPage} />
      <Route path="/ranking" exact component={RankingPage} />
      <Route path="/join" exact component={JoinPage} />
      <Route path="/login" exact component={LoginPage} />
      <Route
        path="/login/ouath2/code/kakao"
        exact
        component={SocialLoginPage}
      />
      {/* url잘못치면 메인으로 */}
      <Redirect from="*" to="/" />
    </Switch>
  </Container>
);

export default Content;
