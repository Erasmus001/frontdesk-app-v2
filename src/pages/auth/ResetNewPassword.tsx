import { FormEvent, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import Logo from "@/assets/logoipsum-261.svg";

const ResetNewPassword = () => {
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmNewPassword, setConfirmNewPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleResetPassword = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    if (confirmNewPassword !== newPassword) {
      toast.error("Passwords do not match");
      setIsLoading(false);
      return;
    }

    setTimeout(() => {
      setIsLoading(false);
      console.log({ newPassword, confirmNewPassword });
      toast.success("Password reset successful.");
      navigate("");
    }, 4000);
  };
  return (
    <main className="h-screen w-screen flex items-center justify-center text-black flex-col gap-7">
      {/* Header */}
      <div className="flex items-center justify-center flex-col gap-3">
        <img src={Logo} alt="" loading="eager" className="mb-8"/>
        <h2 className="text-3xl font-bold mb-2">Confirm Reset</h2>
        <p className="text-center w-[400px] text-base">
          Enter the six digit verification code sent to your account to reset
          your password.
        </p>
      </div>

      {/* Form */}
      <form
        className="w-[380px] flex items-start flex-col gap-4"
        onSubmit={handleResetPassword}
      >
        <div className="w-full flex items-start justify-start flex-col gap-2">
          <label htmlFor="new-password" className="text-base font-semibold">
            New Password
          </label>
          <input
            type="password"
            id="new-password"
            name="new-password"
            placeholder="*******"
            value={newPassword}
            onChange={(event) => setNewPassword(event.target.value)}
            required
            disabled={isLoading}
            className={`w-full py-3 px-3 border border-gray-300 rounded-md text-base focus:outline-[#3D79F3] placeholder:text-sm bg-gray-100 focus:bg-transparent ${
              isLoading
                ? "bg-gray-100 cursor-not-allowed text-gray-400"
                : "bg-gray-100"
            }`}
            title="Enter your new password"
          />
        </div>
        <div className="w-full flex items-start justify-start flex-col gap-2">
          <label
            htmlFor="confirm-new-password"
            className="text-base font-semibold"
          >
            Confirm New Password
          </label>
          <input
            type="password"
            id="confirm-new-password"
            name="confirm-new-password"
            placeholder="********"
            value={confirmNewPassword}
            onChange={(event) => setConfirmNewPassword(event.target.value)}
            required
            className={`w-full py-3 px-3 border border-gray-300 rounded-md text-base focus:outline-[#3D79F3] placeholder:text-sm bg-gray-100 focus:bg-transparent ${
              isLoading
                ? "bg-gray-100 cursor-not-allowed text-gray-400"
                : "bg-gray-100"
            }`}
            title="Enter your valid email"
          />
        </div>
        <div className="w-full">
          {/* <button className="bg-[#3D79F3] w-full p-3 text-white hover:bg-blue-600 ease-linear">
            Reset password
          </button> */}
          <button
            type="submit"
            className="p-3 bg-[#3D79F3] w-full text-white text-lg hover:bg-blue-600 hover:ease-linear"
          >
            {isLoading ? "Resetting..." : "Reset"}
          </button>
        </div>
      </form>
      <div>
        <span className="flex items-center justify-center gap-2">
          {/* <p>Don't have an account?</p> */}
          <Link
            to={"/signin"}
            className="hover:underline hover:underline-offset-2"
          >
            Go back
          </Link>
        </span>
      </div>
    </main>
  );
};

export default ResetNewPassword;
