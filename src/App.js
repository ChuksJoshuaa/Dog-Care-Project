import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Footer } from "./components";
import { Home, About, Dog, Error, SingleBlog, Blog, Contact } from "./pages";
import AOS from "aos";
import PureCounter from "@srexi/purecounterjs";

function App() {
  const pure = new PureCounter();
  useEffect(() => {
    AOS.init({
      duration: 2000,
      delay: 0,
      offset: 120,
      easing: "ease",
      once: true,
      mirror: true,
      anchorPlacement: "top-bottom",
    });
    AOS.refresh();

    new PureCounter();

    new PureCounter({
      // start: 0,
      // end: 100,
      duration: 2,
      delay: 10,
      once: false,
      repeat: false,
      decimals: 0,
      legacy: true,
      filesizing: false,
      currency: false,
      separator: false,
    });
  }, []);
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/dog">
          <Dog />
        </Route>
        <Route exact path="/blog">
          <Blog />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/blogs/:slug" children={<SingleBlog />} />
        <Route path="*">
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
