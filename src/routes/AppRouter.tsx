import { HashRouter as Router, Routes, Route } from "react-router-dom";

const AppRouter = () => {
  const auth = false;
  return !auth ? <UnAuthenticatedRoutes /> : <AuthenticatedRoutes />;
};

export default AppRouter;

const UnAuthenticatedRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<>Not logged in</>} />
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
