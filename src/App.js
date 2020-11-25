import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {useSelector} from "react-redux";
import LandingPage from "components/views/LandingPage/LandingPage";
import MainPage from "components/views/LandingPage/MainPage";
import LoginPage from "components/views/LoginPage/LoginPage";
import RegisterPage from "components/views/RegisterPage/RegisterPage";
import MyPage from "components/views/MyPage/MyPage";
import ProfileEdit from "components/views/MyPage/ProfileEdit";
import OtherPage from "components/views/MyPage/OtherPage";
import JourneyDetail from "components/views/Journey/JourneyDetail";
import PathDetail from "components/views/Journey/Path"
import Auth from "hoc/auth";

function App() {
  const User = useSelector(state => state.user.otherUser);

  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/" component={Auth(LandingPage, false)} />
          <Route exact path="/main" component={Auth(MainPage, true)} />
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
          <Route exact path="/mypage/:username/:scrap?" component={User ? Auth(OtherPage, true) : Auth(MyPage, true)} />
          <Route exact path="/profile-edit" component={Auth(ProfileEdit, true)} />
          <Route
            exact path="/journey/:id"
            component={Auth(JourneyDetail, true)}
          />
          <Route
            path="/journey/:id/path/:pathId"
            component={Auth(PathDetail, true)}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
