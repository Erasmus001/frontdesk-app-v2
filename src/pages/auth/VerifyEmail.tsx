import { Link } from "react-router-dom";

const VerifyEmail = () => {
  return (
    <main className="h-screen w-screen flex items-center justify-center text-black flex-col gap-7">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold">Verify Email</h2>
        <p className="text-center w-[400px] text-base">
          Enter the 6 digit code sent to your email to verify your account.
        </p>
      </div>

      {/* Form */}
      <form className="w-[330px] flex items-start flex-col gap-4">
        <div className="w-full flex items-start justify-start flex-col gap-2">
          <label htmlFor="code" className="text-base font-semibold">
            Verification Code
          </label>
          <input
            type="text"
            id="code"
            name="code"
            placeholder="2-3-3-5-6-8"
            required
            className="w-full py-2 px-3 border border-gray-300 rounded-md text-base focus:outline-[#3D79F3] placeholder:text-sm"
            title="Enter your valid email"
          />
        </div>
        <div className="w-full">
          <button className="bg-[#3D79F3] w-full p-3 text-white hover:bg-blue-600 ease-linear">
            Verify email
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

export default VerifyEmail;
