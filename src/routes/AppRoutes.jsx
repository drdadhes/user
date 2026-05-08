import UserLayout from "../layouts/UserLayout";
import AdminLayout from "../layouts/AdminLayout";
import { Routes, Route } from "react-router-dom";
import Home from "../features/v2/Home"
import Videos from  "../features/v2/Videos"
import AdminVideos from "../features/admin/ManageVideos";
import ScrollToTop from "../components/ScrollToTop"; 


const userRoutes = [
  { path: "", element: <Home/> },
  { path: "videos", element: <Videos /> },
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
