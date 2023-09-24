/* eslint-disable @typescript-eslint/no-unused-vars */
// import Button from "@/components/ui/Button";
import { FormEvent, useLayoutEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import Logo from "@/assets/logoipsum-261.svg";

const Signin = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleSignin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    const user = localStorage.getItem("user");

    if (user?.email === email && user?.password === password) {
      navigate("/setup-org");
    }

    setTimeout(() => {
      toast.success("Account created successfully.");
      setIsLoading(false);
      navigate("/setup-org");
    }, 3000);
  };

  return (
    <main className="h-screen w-screen flex items-center justify-center text-black flex-col gap-7">
      {/* Header */}
      <div className="flex items-center justify-center flex-col gap-3">
        <img src={Logo} alt="logo" loading="eager" className="mb-8" />
        <h2 className="text-3xl font-bold">Welcome Back</h2>
      </div>

      {/* Form */}
      <form
        className="w-[380px] flex items-start flex-col gap-4 mt-4"
        onSubmit={handleSignin}
      >
        <div className="w-full flex items-start justify-start flex-col gap-2">
          <label htmlFor="email" className="text-base font-semibold">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Johndoe@example.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            className="w-full py-3 px-3 border border-gray-300 rounded-md text-base focus:outline-[#3D79F3] placeholder:text-sm bg-gray-100 focus:bg-transparent"
            title="Enter your valid email"
          />
        </div>
        <div className="w-full flex items-start justify-start flex-col gap-2">
          <label htmlFor="password" className="text-base font-semibold">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Johndoe@example.com"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
            className="w-full py-3 px-3 border border-gray-300 rounded-md text-base focus:outline-[#3D79F3] placeholder:text-sm bg-gray-100 focus:bg-transparent"
            title="Create a strong password"
          />
          <div className="flex w-full items-center justify-between text-base">
            <span className="flex items-center justify-center gap-2">
              <input type="checkbox" name="remember-me" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </span>
            <Link
              to={"/reset-password"}
              className="hover:underline hover:underline-offset-2 text-[#3D79F3]"
            >
              Forgot password?
            </Link>
          </div>
        </div>
        <div className="w-full">
          <button
            type="submit"
            className="p-3 bg-[#3D79F3] w-full text-white text-lg hover:bg-blue-600 hover:ease-linear"
          >
            {isLoading ? "Signing in" : "Sign in"}
          </button>
        </div>
      </form>
      <div>
        <span className="flex items-center justify-center gap-2">
          <p>Don't have an account?</p>
          <Link
            to={"/signup"}
            className="hover:underline hover:underline-offset-2 text-[#3D79F3]"
          >
            Signup
          </Link>
        </span>
      </div>
    </main>
  );
};

export default Signin;
