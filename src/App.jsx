import { BrowserRouter } from "react-router-dom";
// import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components';
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Works,
  StarsCanvas,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="realtive z-0 bg-primary">
        <div className="relative z-0">
          {/* <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center"> */}
          <div>
            <Navbar />
            <Hero />
          </div>
          <About />
          <Experience />
          {/* <Tech /> */}
          <Works />
          <Feedbacks />
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
