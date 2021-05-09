import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Navigation from "./components/Navigation";
import Detail from "./components/Detail";

function App() {
  return (
    <BrowserRouter>
      <Navigation></Navigation>
      <Route path="/" exact={true} component={Home}></Route>
      <Route path="/about" component={About} />
      <Route path="/movie/:id" component={Detail} />
    </BrowserRouter>
  );
}

export default App;
