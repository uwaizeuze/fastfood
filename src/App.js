import "./App.css";
import Navbar from "./Components/Navbar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";

import Footer from "./Components/Footer";
import Menu from "./Components/Menu";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/menu" component={Menu} />
        <Redirect to="/home" />
      </Switch>

      <About />
      <Menu />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
