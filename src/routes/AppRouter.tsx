import LaunchScreen from "@/pages/LaunchScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const AppRouter = () => {
  const auth = false;
  return !auth ? <UnAuthenticatedRoutes /> : <AuthenticatedRoutes />;
};

export default AppRouter;

const UnAuthenticatedRoutes = () => {
  return (
    <Router basename="/">
      <Routes>
        <Route index element={<LaunchScreen />} />
        <Route path="/signin" element={<>Sign in page</>} />
      </Routes>
    </Router>
  );
};
const AuthenticatedRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<>Logged in</>} />
      </Routes>
    </Router>
  );
};
