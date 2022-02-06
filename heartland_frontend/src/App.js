import React, { Fragment, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import cookies from "js-cookie";
import "./App.css";

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
import { changeLanguage, visitors } from "./actions/rootActions";
import Users from "./screens/admin/users/Users";
import Sidebar from "./components/sidebar/Sidebar";
import Content from "./screens/admin/content/Content";
import Posts from "./screens/admin/posts/Posts";
import CreatePost from "./screens/admin/posts/CreatePost";
import Contact from "./screens/admin/contact/Contact";
import Maps from "./screens/admin/map/Maps";
import AddCity from "./screens/admin/map/AddCity";
import PostsList from "./screens/posts/PostsList";
import Post from "./screens/posts/Post";
import Search from "./screens/posts/Search";

import Emergency from "./screens/admin/emergancy/Emergency";
import Test from "./Test";
import CallButton from "./components/buttons/CallButton";
import RatingModal from "./components/modals/RatingModal";

function App() {
  const dispatch = useDispatch();
  const [rating, setRating] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("websiteRate") === null || undefined || 0) {
      setTimeout(() => {
        setRating(true);
      }, 180000);
    } else if (localStorage.getItem("websiteRate") !== null || undefined || 0) {
      setRating(false);
    }
  }, []);

  const { black, navbar } = useSelector((state) => state.root);

  const currentLanguageCode = cookies.get("i18next") || "en";

  useEffect(() => {
    dispatch(visitors());
    dispatch(changeLanguage(currentLanguageCode));
    if (currentLanguageCode === "ar") {
      document.body.dir = "rtl";
    } else {
      document.body.dir = "ltr";
    }
  }, [currentLanguageCode, dispatch]);

  return (
    <Fragment>
      {rating ? <RatingModal close={() => setRating(false)} /> : null}
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
        <Route exact path="/test" element={<Test />} />

        <Route exact path="/test" element={<RatingModal />} />
        <Route exact path="/login_page_2022" element={<Login />} />
        <Route exact path="/dashboard/*" element={<AdminRoutes />} />
        <Route exact path="/search" element={<Search />} />
        {/* /////////////////// */}
        <Route exact path="/about" element={<About />} />
        <Route exact path="/international" element={<International />} />
        <Route exact path="/maps/:city" element={<Anbar />} />
        <Route exact path="/servicemap" element={<ServiceMaps />} />
        <Route exact path="/assessmentform" element={<AssessmentForm />} />
        <Route exact path="/ht" element={<HumanTrafficing />} />
        <Route exact path="/useful_tools" element={<Activities />} />
        <Route exact path="/seeking_help" element={<Guide />} />
        <Route exact path="/trainingtool" element={<TrainingTools />} />
        <Route exact path="/contact" element={<ContactUs />} />
        <Route exact path="/posts/:type" element={<PostsList />} />
        <Route exact path="/p/:id" element={<Post />} />
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
        {userInfo && <Route exact path="/content" element={<Content />} />}
        {userInfo && <Route exact path="/posts" element={<Posts />} />}
        {userInfo && (
          <Route exact path="/posts/addpost" element={<CreatePost />} />
        )}
        {userInfo && <Route exact path="/users" element={<Users />} />}
        {userInfo && <Route exact path="/contact" element={<Contact />} />}
        {userInfo && <Route exact path="/maps" element={<Maps />} />}
        {userInfo && <Route exact path="/maps/addcity" element={<AddCity />} />}
        {userInfo && <Route exact path="/emergency" element={<Emergency />} />}
      </Routes>
    </Fragment>
  );
};

export default App;
