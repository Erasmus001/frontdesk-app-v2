import Button from "@/components/ui/Button";
import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <main className="h-screen w-screen flex items-center justify-center text-black flex-col gap-7">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold">Welcome Back</h2>
        {/* <p>Welcome, please signin with your email and password</p> */}
      </div>

      {/* Form */}
      <form className="w-[330px] flex items-start flex-col gap-4 mt-4">
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
          />
          <div className="flex w-full items-center justify-between text-sm">
            <span className="flex items-center justify-center gap-2">
              <input type="checkbox" name="remember-me" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </span>
            <Link
              to={"/reset-password"}
              className="hover:underline hover:underline-offset-2"
            >
              Forgot password?
            </Link>
          </div>
        </div>
        <div className="w-full">
          <Button
            bgColor="#3D79F3"
            color="white"
            type="submit"
            // variant="default" /* if this prop isnt provided, it defaults to filled */
          >
            Sign in
          </Button>
        </div>
      </form>
      <div>
        <span className="flex items-center justify-center gap-2">
          <p>Don't have an account?</p>
          <Link
            to={"/signup"}
            className="hover:underline hover:underline-offset-2"
          >
            Signup
          </Link>
        </span>
      </div>
    </main>
  );
};

export default Signin;
