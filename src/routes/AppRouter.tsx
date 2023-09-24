/* eslint-disable @typescript-eslint/no-unused-vars */
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
import Signin from "@/pages/auth/Signin";
import Signup from "@/pages/auth/Signup";
import ResetPassword from "@/pages/auth/ResetPassword";
import VerifyEmail from "@/pages/auth/VerifyEmail";
import { useLayoutEffect, useState } from "react";
import LaunchScreen from "@/pages/LaunchScreen";
import ResetNewPassword from "@/pages/auth/ResetNewPassword";
import SetupOrganization from "@/pages/setup/SetupOrganization";

export const isLoggedIn = false;

const AppRouter = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [user, setUser] = useState<object>({});

  useLayoutEffect(() => {
    setTimeout(() => {
      const localUser = localStorage.getItem("user");
      const localUserAuthState = localStorage.getItem("authstate");

      if (localUserAuthState && localUser) {
        setIsLoggedIn(true);
        // setUser(localUser)
      }
    }, 5000);
  }, [user, isLoggedIn]);

  return isLoggedIn ? <AuthenticatedRoutes /> : <UnAuthenticatedRoutes />;
};

export default AppRouter;

const AuthenticatedRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route index path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/visitors" element={<Visitors />} />
          <Route path="/deliveries" element={<Deliveries />} />
          <Route path="/enquiries" element={<Enquiries />} />
        </Route>
      </Routes>
    </Router>
  );
};

const UnAuthenticatedRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LaunchScreen />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/reset-new-password" element={<ResetNewPassword />} />
        <Route path="/verify" element={<VerifyEmail />} />
        <Route path="/setup-org" element={<SetupOrganization />} />
        <Route path="/create-receptionist" element={<VerifyEmail />} />
        <Route element={<DashboardLayout />}>
          <Route index path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/visitors" element={<Visitors />} />
          <Route path="/deliveries" element={<Deliveries />} />
          <Route path="/enquiries" element={<Enquiries />} />
        </Route>
      </Routes>
    </Router>
  );
};
