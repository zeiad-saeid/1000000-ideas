import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import Home from "./pages/Home/Home";
import Error404 from "./pages/Error404/Error404";
import Contact from "./pages/Contact/Contact";
import "./i18n";
import "./index.css";
import About from "./pages/About/About";
import OurServices from "./pages/OurServices/OurServices";
import Portfolio from "./pages/Portfolio/Portfolio";
import Blog from "./pages/Blog/Blog";
import SingleServicePage from "./components/SingleServicePage/SingleServicePage";
import SinglePostPage from "./components/SinglePostPage";
import Loading from "./components/Loading/Loading";
import { PortfolioProvider } from "./context/PortfolioContext";
import { BlogProvider } from "./context/BlogContext";
import SinglePortfolio from "./pages/SinglePortfolio/SinglePortfolio";
import SingleScoopPage from "./components/SingleScoopPage";
import { SettingsProvider } from "./context/SettingsContext/SettingsContext";
import { ServicesProvider } from "./context/ServesContext/ServesContext";
const router = createBrowserRouter([
  {
    // path: "/",
    element: <Root />,
    errorElement: <Error404 />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "services",
        element: <OurServices />,
      },
      {
        path: "services/:id",
        element: <SingleServicePage />,
      },
      {
        path: "services/:id/productscoop/:scoopid",
        element: <SingleScoopPage />,
      },
      {
        path: "portfolio",
        element: <Portfolio />,
      },
      {
        path: "portfolio/:id",
        element: <SinglePortfolio />,
      },
      {
        path: "portfolio/:tab/:id",
        element: <Portfolio />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "blog/posts/:id",
        element: <SinglePostPage />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <React.Suspense fallback={<Loading />}>
      <SettingsProvider>
        <ServicesProvider>
          {" "}
          {/* إضافة مزود سياق الخدمات */}
          <PortfolioProvider>
            <BlogProvider>
              <RouterProvider router={router} />
            </BlogProvider>
          </PortfolioProvider>
        </ServicesProvider>{" "}
        {/* إضافة مزود سياق الخدمات */}
      </SettingsProvider>
    </React.Suspense>
  </React.StrictMode>
);
