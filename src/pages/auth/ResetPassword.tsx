import { FormEvent, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import Logo from "@/assets/logoipsum-261.svg";

const ResetPassword = () => {
  const [email, setEmail] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // const pageTitle = document.getElementById('title')

  const navigate = useNavigate();

  const handleResetPassword = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      toast.success("Reset email sent successfully.");
      setTimeout(() => {
        navigate("/reset-new-password");
        setIsLoading(false);
      }, 4050);
      // window.location.reload()
    }, 3000);
  };
  return (
    <main className="h-screen w-screen flex items-center justify-center text-black flex-col gap-12">
      {/* Header */}
      <div className="flex items-center justify-center flex-col gap-3">
        <img src={Logo} alt="" loading="eager" className="mb-8" />
        <h2 className="text-3xl font-bold">Reset Password</h2>
        <p className="text-center w-[400px] text-base">
          Enter the email use for your account creation to receive your password
          reset link.
        </p>
      </div>

      {/* Form */}
      <form
        className="w-[380px] flex items-start flex-col gap-4"
        onSubmit={handleResetPassword}
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
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            disabled={isLoading}
            className={`w-full py-3 px-3 border border-gray-300 rounded-md text-base  placeholder:text-sm bg-gray-100 focus:bg-transparent ${
              isLoading
                ? "bg-gray-100 cursor-not-allowed text-gray-400 pointer-events-none"
                : "bg-gray-100 focus:outline-[#3D79F3]"
            }`}
            title="Enter your valid email"
          />
        </div>
        <div className="w-full">
          <button
            type="submit"
            disabled={isLoading}
            className={`p-3 bg-[#3D79F3] w-full text-white text-lg hover:ease-linear ${
              isLoading
                ? "cursor-not-allowed pointer-events-none"
                : "cursor-pointer hover:bg-blue-600 "
            }`}
          >
            {isLoading ? "Resetting password" : "Reset password"}
          </button>
        </div>
      </form>
      <div>
        <span className="flex items-center justify-center gap-2">
          {/* <p>Don't have an account?</p> */}
          <Link
            to={"/signin"}
            className="hover:underline hover:underline-offset-2 text-[#3D79F3]"
          >
            Go back
          </Link>
        </span>
      </div>
    </main>
  );
};

export default ResetPassword;
