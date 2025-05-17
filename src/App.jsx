import { Routes } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import { Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import Navbar from "./Components/Navbar/Navbar.jsx";

import Home from "./Pages/Home.jsx";
const AboutPage = lazy(() => import("./Pages/AboutPage/AboutPage.jsx"));
const ServicesPage = lazy(() => import("./Pages/ServicesPage.jsx"));
const ContactPage = lazy(() => import("./Pages/ContactPage.jsx"));
const ProjectsPage = lazy(() => import("./Pages/ProjectsPage.jsx"));
const LandscapesPage = lazy(() => import("./Pages/LandscapesPage.jsx"));
const CustomersPage = lazy(() => import("./Pages/CustomersPage.jsx"));
const Portfolio = lazy(() => import("./Pages/Portfolio.jsx"));
const Media = lazy(() => import("./Pages/Media.jsx"));
const NotFound = lazy(() => import("./Pages/NotFound.jsx"));

import ProjectDetails from "./Pages/ProjectDetails.jsx";
import Footer from "./Components/Footer/Footer.jsx";

import Loading from "./Components/Loading/Loading.jsx";
import ProjectsContextProvider from "./Context/ProjectsContext.jsx";
import CustomersContextProvider from "./Context/CustomersContext.jsx";
import AboutOverview from "./Pages/AboutPage/AboutOverview.jsx";
import Leadership from "./Pages/AboutPage/Leadership.jsx";
import MediaContextProvider from "./Context/MediaContext.jsx";
import LandscapesContextProvider from "./Context/LandscapesContext.jsx";
// import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* <ScrollToTop /> */}
        <Route path="/" element={<Home />} />
        <Route
          path="/contact"
          element={
            <Suspense fallback={<Loading />}>
              {" "}
              <ContactPage />{" "}
            </Suspense>
          }
        />
        {/* About */}
        <Route
          path="/about"
          element={
            <Suspense fallback={<Loading />}>
              {" "}
              <AboutPage />
            </Suspense>
          }
        >
          <Route path="overview" element={<AboutOverview />} />
          <Route path="leadership" element={<Leadership />} />
        </Route>
        {/* End About */}
        <Route
          path="/services"
          element={
            <Suspense fallback={<Loading />}>
              {" "}
              <ServicesPage />{" "}
            </Suspense>
          }
        />

        <Route
          path="/projects"
          element={
            <Suspense fallback={<Loading />}>
              {" "}
              <ProjectsContextProvider>
                <ProjectsPage />{" "}
              </ProjectsContextProvider>
            </Suspense>
          }
        />
        <Route
          path="/landscapes"
          element={
            <Suspense fallback={<Loading />}>
              {" "}
              <LandscapesContextProvider>
                <LandscapesPage />{" "}
              </LandscapesContextProvider>
            </Suspense>
          }
        />
        <Route
          path="/projectDetails/:id"
          element={
            <ProjectsContextProvider>
              <ProjectDetails />{" "}
            </ProjectsContextProvider>
          }
        />
        <Route
          path="/customers"
          element={
            <Suspense fallback={<Loading />}>
              {" "}
              <CustomersContextProvider>
                <CustomersPage />
              </CustomersContextProvider>{" "}
            </Suspense>
          }
        />
        <Route
          path="/portfolio"
          element={
            <Suspense fallback={<Loading />}>
              {" "}
              <MediaContextProvider>
                <Portfolio />
              </MediaContextProvider>{" "}
            </Suspense>
          }
        />
        <Route
          path="/media"
          element={
            <Suspense fallback={<Loading />}>
              {" "}
              <MediaContextProvider>
                <Media />
              </MediaContextProvider>{" "}
            </Suspense>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
