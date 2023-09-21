import DashboardLayout from "@/layouts/DashboardLayout";
// import LaunchScreen from "@/pages/LaunchScreen";
// import ResetPassword from "@/pages/auth/ResetPassword";
// import Signin from "@/pages/auth/Signin";
// import Signup from "@/pages/auth/Signup";
// import VerifyEmail from "@/pages/auth/VerifyEmail";
import Dashboard from "@/pages/Dashboard";
// import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Visitors from "@/pages/Visitors";
import Deliveries from "@/pages/Deliveries";
import Enquiries from "@/pages/Enquiries";

const AppRouter = () => {
  return <AuthenticatedRoutes />;
};

export default AppRouter;

const AuthenticatedRoutes = () => {
  return (
    <Router basename="/">
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route index path="/" element={<Dashboard />} />
          <Route index path="/dashboard" element={<Dashboard />} />
          <Route index path="/visitors" element={<Visitors />} />
          <Route index path="/deliveries" element={<Deliveries />} />
          <Route index path="/enquiries" element={<Enquiries />} />
        </Route>
      </Routes>
    </Router>
  );
};
