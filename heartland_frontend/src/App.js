import React, { Fragment, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import cookies from "js-cookie";
import i18next from "i18next";

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
import Login from "./screens/login/Login";
import { changeLanguage } from "./actions/rootActions";
import Users from "./screens/admin/users/Users";
import Sidebar from "./components/sidebar/Sidebar";
import Content from "./screens/admin/content/Content";
import Posts from "./screens/admin/posts/Posts";

function App() {
  const location = useLocation();
  const dispatch = useDispatch();
  const { black, navbar } = useSelector((state) => state.root);

  const currentLanguageCode = cookies.get("i18next") || "en";

  useEffect(() => {
    dispatch(changeLanguage(currentLanguageCode));
    if (currentLanguageCode === "ar") {
      document.body.dir = "rtl";
    } else {
      document.body.dir = "ltr";
    }
  }, []);

  return (
    <Fragment>
      {black ? <GlobalStyles bg="black" /> : <GlobalStyles bg="#F2F2F2" />}

      {navbar === "white" ? (
        <Navbar fg="black" bg="#F2F2F2" />
      ) : navbar === "black" ? (
        <Navbar fg="white" bg="black" />
      ) : navbar === "side" ? (
        <Sidebar />
      ) : (
        ""
      )}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login_page_2022" element={<Login />} />
        <Route exact path="/dashboard/*" element={<AdminRoutes />} />
        {/* /////////////////// */}
        <Route exact path="/about" element={<About />} />
        <Route exact path="/international" element={<International />} />
        <Route exact path="/anbar" element={<Anbar />} />
        <Route exact path="/servicemap" element={<ServiceMaps />} />
        <Route exact path="/assessmentform" element={<AssessmentForm />} />
        <Route exact path="/ht" element={<HumanTrafficing />} />
        <Route exact path="/activities" element={<Activities />} />
        <Route exact path="/guide" element={<Guide />} />
        <Route exact path="/trainingtool" element={<TrainingTools />} />
        <Route exact path="/contact" element={<ContactUs />} />
      </Routes>
    </Fragment>
  );
}

const AdminRoutes = () => {
  const userLogin = useSelector((state) => state.user);
  const { userInfo } = userLogin;

  return (
    <Fragment>
      <Routes>
        {userInfo && <Route exact path="/users" element={<Users />} />}
      </Routes>
      <Routes>
        {userInfo && <Route exact path="/content" element={<Content />} />}
      </Routes>
      <Routes>
        {userInfo && <Route exact path="/posts" element={<Posts />} />}
      </Routes>
    </Fragment>
  );
};

export default App;
