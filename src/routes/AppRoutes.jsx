import UserLayout from "../layouts/UserLayout";
import AdminLayout from "../layouts/AdminLayout";
import { Routes, Route } from "react-router-dom";
import Home from "../features/user/Home";
import Videos from "../features/user/Videos";
import AdminVideos from "../features/admin/ManageVideos";
import Products from "@/features/user/Products";
import AboutUs from "@/features/user/About";

const userRoutes = [
  { path: "", element: <Home /> },
    { path: "aboutus", element: <AboutUs /> },
  { path: "products", element: <Products /> },
  { path: "videos", element: <Videos /> },
];

const adminRoutes = [{ path: "videos", element: <AdminVideos /> }];

const AppRoutes = () => {
  return (
    <div>
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
