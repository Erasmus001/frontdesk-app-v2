import Logo from "@/assets/icon.png";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LaunchScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/")
    }, 4000);
  }, [navigate]);

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
