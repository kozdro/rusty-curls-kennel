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
import ScrollToTop from "./ScrollToTop";
import "./App.css";

function App() {
  const content = (
    <>
      <Route exact path="/" component={Kennel} />
      <Route path="/hodowla" component={About} />
      <Route path="/mioty" component={Litters} />
      <Route path="/wystawy" component={Shows} />
      <Route path="/galeria" component={Gallery} />
      <Route path="/zkwp-fci" component={Club} />
      <Route path="/kontakt" component={Contact} />
    </>
  );

  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Banner />
      {content}
      <Footer />
    </Router>
  );
}

export default App;
