import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Kennel from "./components/Kennel/Kennel.js";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Litters from "./components/Litters/Litters";
import Shows from "./components/Shows/Shows";
import Gallery from "./components/Gallery/Gallery";
import Club from "./components/Club/Club";
import Contact from "./components/Contact/Contact";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

function App() {
  const content = (
    <>
      <Route exact path="/">
        <Kennel />
      </Route>

      <Route path="/hodowla">
        <About />
      </Route>

      <Route path="/mioty">
        <Litters />
      </Route>

      <Route path="/wystawy">
        <Shows />
      </Route>

      <Route path="/galeria">
        <Gallery />
      </Route>

      <Route path="/zkwp-fci">
        <Club />
      </Route>

      <Route path="/kontakt">
        <Contact />
      </Route>
    </>
  );

  return (
    <Router>
      <Header />
      <Banner />
      {content}
      <Footer />
    </Router>
  );
}

export default App;
