// import Logo from "@/assets/icon.png";
import { useLayoutEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "@/assets/logoipsum-261.svg";

const LaunchScreen = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [user, setUser] = useState<unknown>({});

  const navigate = useNavigate();

  useLayoutEffect(() => {
    setTimeout(() => {
      const localUser = localStorage.getItem("user");
      const localUserAuthState = localStorage.getItem("authstate");

      if (localUserAuthState) {
        setIsLoggedIn(true);
        setUser(localUser);
        navigate("/dashboard");
      } else {
        navigate("/signin");
      }
    }, 5000);
    console.log(user, "local user");
  }, [user, isLoggedIn, navigate]);

  return (
    <main className="h-screen w-screen bg-white flex items-center justify-center flex-col gap-2">
      <img src={Logo} alt="logo" loading="eager" className="mb-8" />
      <h2 className="text-xl font-semibold">Welcome to FrontDesk</h2>
    </main>
  );
};

export default LaunchScreen;

//* [#3D79F3]
