import Logo from "@/assets/logoipsum-261.svg";
import { FormEvent, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const SetupOrganization = () => {
  const [organizationName, setOrganizationName] = useState<string>("");
  const [organizationEmail, setOrganizationEmail] = useState<string>("");
  const [role, setRole] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isBlocked, setIsBlocked] = useState<boolean>(true);

  const navigate = useNavigate();

  const handleOrganizationSetup = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setRole("admin");

    const data = {
      organizationName,
      organizationEmail,
      role,
      id: crypto.randomUUID(),
    };

    const saveOrganization = () => {
      localStorage.setItem("org", JSON.stringify(data));
    };

    setTimeout(() => {
      saveOrganization();
      toast.success("Organization setup complete");

      setTimeout(() => {
        navigate("/setup-recep");
        setIsLoading(false);
      }, 6000);
    }, 3000);
  };

  useEffect(() => {
    if (organizationName && organizationEmail) {
      setIsBlocked(false);
    } else {
      setIsBlocked(true);
    }
  }, [organizationName, organizationEmail]);

  return (
    <main className="w-full h-screen flex items-start justify-start">
      {/* Form */}
      <aside className="w-[50%] p-24 flex items-start justify-start flex-col gap-5">
        {/*  */}
        <div className="w-full flex items-center justify-between">
          <img src={Logo} alt="logo" loading="eager" />
          {/* <button
            className="p-2 rounded-md bg-transparent hover:bg-gray-100 px-5 text-gray-500 font-normal text-sm"
            type="button"
            onClick={() => navigate("/dashboard")}
          >
            Skip
          </button> */}
        </div>
        {/* Steps */}
        <div className="flex items-start justify-start flex-col gap-4">
          <h3 className="font-semibold text-base text-gray-600">STEP 1 / 2</h3>
          <h2 className="text-3xl font-bold">Setup your organization</h2>
        </div>

        <form
          className="min-w-[450px] flex items-start flex-col gap-8 mt-10"
          onSubmit={handleOrganizationSetup}
        >
          <div className="w-full flex items-start justify-start flex-col gap-2">
            <label htmlFor="org-name" className="text-lg font-semibold">
              Organization Name
            </label>
            <input
              type="text"
              id="org-name"
              name="name"
              placeholder="John Software Organization"
              required
              aria-disabled={isLoading}
              disabled={isLoading}
              className={`w-full py-3 px-3 border border-gray-300 rounded-md text-base focus:outline-[#3D79F3] placeholder:text-sm bg-gray-100 focus:bg-transparent ${
                isLoading && "cursor-not-allowed"
              }`}
              title="Enter your valid email"
              value={organizationName}
              onChange={(event) => setOrganizationName(event.target.value)}
            />
          </div>
          <div className="w-full flex items-start justify-start flex-col gap-2">
            <label htmlFor="org-email" className="text-lg font-semibold">
              Organization Email
            </label>
            <input
              type="email"
              id="org-email"
              name="email"
              placeholder="Johndoe@example.com"
              required
              aria-disabled={isLoading}
              disabled={isLoading}
              className={`w-full py-3 px-3 border border-gray-300 rounded-md text-base focus:outline-[#3D79F3] placeholder:text-sm bg-gray-100 focus:bg-transparent ${
                isLoading && "cursor-not-allowed"
              }`}
              title="Enter your organization name"
              value={organizationEmail}
              onChange={(event) => setOrganizationEmail(event.target.value)}
            />
          </div>
          <div className="w-full flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => navigate("/signup")}
              className="p-3 bg-gray-400 w-[250px] text-white text-lg hover:bg-gray-500 hover:ease-linear"
            >
              Back
            </button>
            <button
              disabled={isBlocked}
              type="submit"
              className={`${
                isBlocked || isLoading
                  ? "cursor-not-allowed bg-gray-400"
                  : "over:bg-blue-600 hover:ease-linear bg-[#3D79F3] "
              } p-3 w-full text-white text-lg h`}
            >
              Next
            </button>
          </div>
        </form>
      </aside>
      {/* Background */}
      <section className="w-[50%] h-full bg-[#3D79F3]" />
    </main>
  );
};

export default SetupOrganization;
