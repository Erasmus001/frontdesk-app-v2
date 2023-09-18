import Button from "@/components/ui/Button";
import { FormEvent, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

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
    };
    save();

    setTimeout(() => {
      toast.success("Account created successfully.");
      setIsLoading(false);
      // window.location.reload() 
      navigate("/dashboard");
    }, 3000);
  };

  return (
    <main className="h-screen w-screen flex items-center justify-center text-black flex-col gap-7">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold">Create an Account</h2>
      </div>

      {/* Form */}
      <form
        className="w-[330px] flex items-start flex-col gap-4"
        onSubmit={handleSignup}
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
            required
            className="w-full py-2 px-3 border border-gray-300 rounded-md text-base focus:outline-[#3D79F3] placeholder:text-sm"
            title="Enter your valid email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
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
            required
            className="w-full py-2 px-3 border border-gray-300 rounded-md text-base focus:outline-[#3D79F3] placeholder:text-sm"
            title="Create a strong password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div className="w-full">
          {/* <button
            className={` ${
              isLoading
                ? "bg-blue-700 cursor-not-allowed"
                : "bg-[#3D79F3] cursor-pointer"
            }  w-full p-3 text-white hover:bg-blue-600 ease-linear`}
          >
            
          </button> */}
          <Button bgColor="#3D79F3" color="white" type="submit">
            {isLoading ? "Signing up..." : "Sign up"}
          </Button>
        </div>
      </form>
      <div>
        <span className="flex items-center justify-center gap-2">
          <p>Already have an account?</p>
          <Link
            to={"/signin"}
            className="hover:underline hover:underline-offset-2"
          >
            Signin
          </Link>
        </span>
      </div>
    </main>
  );
};

export default Signup;
