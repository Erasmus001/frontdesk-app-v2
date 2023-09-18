import Logo from "@/assets/icon.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type UserProp = {
  email: string;
  password: string;
};

const LaunchScreen = () => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState<UserProp>({
    email: "",
    password: "",
  });

  useEffect(() => {
    const hasUser = localStorage.getItem("user");

    if (hasUser) {
      setCurrentUser({
        email: JSON.stringify(hasUser.email),
        password: JSON.stringify(hasUser.password),
      });
    }
    setTimeout(() => {
      navigate("/signin");
    }, 10000);
  }, [currentUser, navigate]);

  return (
    <main className="h-screen w-screen bg-white flex items-center justify-center flex-col gap-2">
      <img
        src={Logo}
        alt="logo"
        loading="eager"
        className="shadow-md rounded-full"
      />
      <h2 className="text-lg font-semibold">
        Welcome to Webbermill Reception App
      </h2>
    </main>
  );
};

export default LaunchScreen;

// [#3D79F3]
