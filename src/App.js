import Home from "./routes/Home";
import Detail from "./routes/Detail";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// react-router-dom은 컴포넌트 모음집 같은 거라고 생각하면된다.

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/movie">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
  // Router는 유저에게 보여주고 싶은 것을 말한다.
  // Switch를 사용하는 이유는 한번에 Route하나만 렌더링 되길 원하기 때문이다.
  // Switch는 Route를 찾는다. Route는 /movies/123 이런걸 의미한다
  // 그리고 Route를 찾으면 컴포넌트를 렌더링 한다
  // Route안에다가 컴포넌트를 감싸줄것이다.
  // path="/" 는 홈으로 가는 것을 의미한다. 누군가 "/" url에 있다면 <Home/> 컴포넌트를 보여줄 것이다.
}
export default App;
