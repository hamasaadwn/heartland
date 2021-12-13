import React, { Fragment } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import GlobalStyles from "./components/styled/Global";

import Home from "./screens/home/Home";
import Navbar from "./components/navbar/Navbar";
import About from "./screens/about/About";
import HumanTrafficing from "./screens/human_trafficing/HumanTrafficing";
import International from "./screens/international/International";
import ServiceMaps from "./screens/maps/ServiceMaps";
import Anbar from "./screens/maps/cities/Anbar";
import Activities from "./screens/activites/Activities";
import Guide from "./screens/guide/Guide";
import TrainingTools from "./screens/guide/training_tool/TrainingTools";
import AssessmentForm from "./screens/guide/assessment_form/AssessmentForm";
import ContactUs from "./screens/contact_us/ContactUs";

function App() {
  const location = useLocation();
  const { black } = useSelector((state) => state.color);

  return (
    <Fragment>
      {black ? <GlobalStyles bg="black" /> : <GlobalStyles bg="#F2F2F2" />}

      {location.pathname === "/" ? (
        <div></div>
      ) : location.pathname === "/about" ||
        location.pathname === "/international" ||
        location.pathname === "/anbar" ||
        location.pathname === "/servicemap" ||
        location.pathname === "/assessmentform" ? (
        <Navbar fg="black" bg="#F2F2F2" />
      ) : (
        <Navbar fg="white" bg="black" />
      )}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/ht" element={<HumanTrafficing />} />
        <Route exact path="/international" element={<International />} />
        <Route exact path="/servicemap" element={<ServiceMaps />} />
        <Route exact path="/anbar" element={<Anbar />} />
        <Route exact path="/activities" element={<Activities />} />
        <Route exact path="/guide" element={<Guide />} />
        <Route exact path="/trainingtool" element={<TrainingTools />} />
        <Route exact path="/assessmentform" element={<AssessmentForm />} />
        <Route exact path="/contact" element={<ContactUs />} />
      </Routes>
    </Fragment>
  );
}

export default App;
