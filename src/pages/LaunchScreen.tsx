import Logo from "@/assets/icon.png";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LaunchScreen = () => {
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      navigate('/signin')
    }, 2000);
  }, []);

  return (
    <main className="h-screen w-screen bg-white flex items-center justify-center">
      <img
        src={Logo}
        alt="logo"
        loading="eager"
        className="shadow-md rounded-full"
      />
    </main>
  );
};

export default LaunchScreen;

// [#3D79F3]
