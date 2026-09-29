import UserLayout from "../layouts/UserLayout";
import AdminLayout from "../layouts/AdminLayout";
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../features/v2/Home"
import Videos from  "../features/v2/Videos"
import About from "../features/v2/About"
import Events from "../features/v2/Events"
import AdminVideos from "../features/admin/ManageVideos";
import ScrollToTop from "../components/ScrollToTop"; 

const Booking = lazy(() => import("../features/v2/Booking"));
const bookingElement = (
  <Suspense fallback={<div style={{ minHeight: "100vh", background: "#0b0c0a" }} aria-label="Loading appointment booking" />}>
    <Booking />
  </Suspense>
);

const userRoutes = [
  { path: "", element: <Home/> },
  { path: "about", element: <About /> },
  { path: "events", element: <Events /> },
  { path: "videos", element: <Videos /> },
  // { path: "book-appointment", element: bookingElement },
];

const adminRoutes = [{ path: "videos", element: <AdminVideos /> }];

const AppRoutes = () => {
  return (
    <div>
      <ScrollToTop /> 
      <Routes>
        <Route path="/" element={<UserLayout />}>
          {userRoutes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Route>
        <Route path="/admin" element={<UserLayout />}>
          {adminRoutes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Route>
      </Routes>
    </div>
  );
};

export default AppRoutes;
