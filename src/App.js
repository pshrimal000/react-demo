import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./components/screens/Home";
import Category from "./components/screens/Category";
import Single from "./components/screens/Single";
import Error404 from "./components/screens/Error404";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/category">
            <Category />
          </Route>
          <Route path="/single">
            <Single />
          </Route>
          <Route path="*">
            <Error404 />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
