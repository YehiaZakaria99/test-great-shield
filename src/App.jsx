import { Routes } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import { Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar.jsx";

import { lazy, Suspense } from "react";

const ContactPage = lazy(() => import("./Pages/ContactPage.jsx"));
const AboutPage = lazy(() => import("./Pages/AboutPage/AboutPage.jsx"));
const ServicesPage = lazy(() => import("./Pages/ServicesPage.jsx"));
const NotFound = lazy(() => import("./Pages/NotFound.jsx"));

import Footer from "./Components/Footer/Footer.jsx";
import Loading from "./Components/Loading/Loading.jsx";
import Home from "./Pages/Home.jsx";
import ProjectsPage from "./Pages/ProjectsPage.jsx";
import ProjectDetails from "./Pages/ProjectDetails.jsx";
import ProjectsContextProvider from "./Context/ProjectsContext.jsx";
import CustomersPage from "./Pages/CustomersPage.jsx";
import CustomersContextProvider from "./Context/CustomersContext.jsx";
import Portfolio from "./Pages/Portfolio.jsx";
import Media from "./Pages/Media.jsx";
import AboutOverview from "./Pages/AboutPage/AboutOverview.jsx";
import Leadership from "./Pages/AboutPage/Leadership.jsx";
import MediaContextProvider from "./Context/MediaContext.jsx";
import LandscapesPage from "./Pages/LandscapesPage.jsx";
import LandscapesContextProvider from "./Context/LandscapesContext.jsx";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
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
            <Suspense fallback={<Loading />}>
              {" "}
              <ProjectsContextProvider>
                <ProjectDetails />{" "}
              </ProjectsContextProvider>
            </Suspense>
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
        <Route
          path="*"
          element={
            <div className="text-center mt-20 text-xl"> {<NotFound />} </div>
          }
        />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
