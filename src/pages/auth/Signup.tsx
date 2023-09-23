// import Button from "@/components/ui/Button";
import { FormEvent, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import Logo from "@/assets/logoipsum-261.svg";

const Signup = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleSignup = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    const save = () => {
      localStorage.setItem("user", JSON.stringify({ email, password }));
      localStorage.setItem("userAuthState", "true");
    };
    save();

    setTimeout(() => {
      toast.success("Account created successfully.");
      setTimeout(() => {
        navigate("/setup-org");
        setIsLoading(false);
      }, 4000);
    }, 3000);
  };

  return (
    <main className="h-screen w-screen flex items-center justify-center text-black flex-col gap-12">
      {/* Header */}
      <div className="flex items-center justify-center flex-col gap-3">
        <img src={Logo} alt="" loading="eager" className="mb-8" />
        <h2 className="text-3xl font-bold">Create an Account</h2>
      </div>

      {/* Form */}
      <form
        className="w-[380px] flex items-start flex-col gap-4"
        onSubmit={handleSignup}
      >
        <div className="w-full flex items-start justify-start flex-col gap-2">
          <label htmlFor="email" className="text-lg font-semibold">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Johndoe@example.com"
            required
            className={`w-full py-3 px-3 border border-gray-300 rounded-md text-base focus:outline-[#3D79F3] placeholder:text-sm bg-gray-100 focus:bg-transparent ${
              isLoading
                ? "bg-gray-100 cursor-not-allowed text-gray-400"
                : "bg-gray-100"
            }`}
            title="Enter your valid email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="w-full flex items-start justify-start flex-col gap-2">
          <label htmlFor="password" className="text-lg font-semibold">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Johndoe@example.com"
            required
            className={`w-full py-3 px-3 border border-gray-300 rounded-md text-base focus:outline-[#3D79F3] placeholder:text-sm bg-gray-100 focus:bg-transparent ${
              isLoading
                ? "bg-gray-100 cursor-not-allowed text-gray-400"
                : "bg-gray-100"
            }`}
            title="Create a strong password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div className="w-full">
          <button
            type="submit"
            className="p-3 bg-[#3D79F3] w-full text-white text-lg hover:bg-blue-600 hover:ease-linear"
          >
            {isLoading ? "Signing up" : "Sign up"}
          </button>
        </div>
      </form>
      <div>
        <span className="flex items-center justify-center gap-2 text-lg">
          <p>Already have an account?</p>
          <Link
            to={"/signin"}
            className="hover:underline hover:underline-offset-2 text-[#3D79F3]"
          >
            Signin
          </Link>
        </span>
      </div>
    </main>
  );
};

export default Signup;
