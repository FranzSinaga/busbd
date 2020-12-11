import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import "./styles.css";

import Footer from "./component/footer";
import Header from "./component/header";
import Search from "./pages/search";

export default function App() {
  return (
    <Router>
      <div>
        <Header></Header>
        <Switch>
          <Route path="/about/:id/:lf/:gt/:do">
            <Search />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer></Footer>
      </div>
    </Router>
  );
}
