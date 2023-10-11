import Logo from "@/assets/logoipsum-261.svg";
import { FC, FormEvent, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const CreateReceptionist: FC = (): JSX.Element => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [firstname, setFirstname] = useState<string>("");
  const [lastname, setLastname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [role, setRole] = useState<string>("");

  const navigate = useNavigate();

  const handleOrganizationSetup = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setRole("receptionist");

    const data = {
      firstname,
      lastname,
      email,
      role,
    };

    const saveReceptionist = () => {
      localStorage.setItem("receptionist", JSON.stringify(data));
    };

    setTimeout(() => {
      // console.log({ data });
      saveReceptionist();
      toast.success("Receptionist created");

      setTimeout(() => {
        // navigate("/dashboard");
        setIsLoading(false);
      }, 6000);
    }, 4000);
  };

  // useEffect(() => {
  //   const _localStorage = JSON.parse(
  //     localStorage.getItem("receptionist")
  //   ) as string;
  // }, []);

  return (
    <main className="w-full h-screen flex items-start justify-start">
      {/* Form */}
      <aside className="w-[50%] p-24 flex items-start justify-start flex-col gap-5">
        {/*  */}
        <div className="w-full flex items-center justify-between">
          <img src={Logo} alt="logo" loading="eager" />
          <button
            className="p-2 rounded-md bg-transparent hover:bg-gray-100 px-5 text-gray-500 font-normal text-sm"
            type="button"
            onClick={() => navigate("/dashboard")}
          >
            Skip
          </button>
        </div>
        {/* Steps */}
        <div className="flex items-start justify-start flex-col gap-4">
          <h3 className="font-semibold text-base text-gray-600">STEP 2 / 2</h3>
          <h2 className="text-2xl font-bold">Create new Receptionist</h2>
        </div>

        <form
          className="min-w-[450px] flex items-start flex-col gap-6 mt-10"
          onSubmit={handleOrganizationSetup}
        >
          <div className="w-full flex items-start justify-start flex-col gap-2">
            <div className="w-full flex items-center justify-between gap-2">
              <div className="flex items-start justify-start flex-col gap-2">
                <label
                  htmlFor="recep-firstname"
                  className="text-lg font-semibold"
                >
                  First name
                </label>
                <input
                  type="text"
                  id="recep-firstname"
                  name="recep-firstname"
                  placeholder="Jane"
                  required
                  aria-disabled={isLoading}
                  disabled={isLoading}
                  className={`w-full py-3 px-3 border border-gray-300 rounded-md text-base focus:outline-[#3D79F3] placeholder:text-sm bg-gray-100 focus:bg-transparent ${
                    isLoading && "cursor-not-allowed"
                  }`}
                  title="Enter your first name"
                  value={firstname}
                  onChange={(event) => setFirstname(event.target.value)}
                />
              </div>
              <div className="flex items-start justify-start flex-col gap-2">
                <label
                  htmlFor="recep-lastname"
                  className="text-lg font-semibold"
                >
                  Last name
                </label>
                <input
                  type="text"
                  id="recep-lastname"
                  name="recep-lastname"
                  placeholder="Doe"
                  required
                  aria-disabled={isLoading}
                  disabled={isLoading}
                  className={`w-full py-3 px-3 border border-gray-300 rounded-md text-base focus:outline-[#3D79F3] placeholder:text-sm bg-gray-100 focus:bg-transparent ${
                    isLoading && "cursor-not-allowed"
                  }`}
                  title="Enter your first name"
                  value={lastname}
                  onChange={(event) => setLastname(event.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="w-full flex items-start justify-start flex-col gap-2">
            <label htmlFor="recep-email" className="text-lg font-semibold">
              Email
            </label>
            <input
              type="email"
              id="recep-email"
              name="email"
              placeholder="Johndoe@example.com"
              required
              aria-disabled={isLoading}
              disabled={isLoading}
              className={`w-full py-3 px-3 border border-gray-300 rounded-md text-base focus:outline-[#3D79F3] placeholder:text-sm bg-gray-100 focus:bg-transparent ${
                isLoading && "cursor-not-allowed"
              }`}
              title="Enter your organization name"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="w-full flex items-start justify-start flex-col gap-2">
            <label htmlFor="recep-psd" className="text-lg font-semibold">
              Password
            </label>
            <input
              type="password"
              id="recep-psd"
              name="recep-password"
              placeholder="********"
              required
              aria-disabled={isLoading}
              disabled={isLoading}
              className={`w-full py-3 px-3 border border-gray-300 rounded-md text-base focus:outline-[#3D79F3] placeholder:text-sm bg-gray-100 focus:bg-transparent ${
                isLoading && "cursor-not-allowed"
              }`}
              title="Enter your organization name"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div className="w-full flex items-center justify-center gap-4">
            <button
              type="button"
              disabled={isLoading}
              onClick={() => navigate("/setup-org")}
              className="p-3 bg-gray-400 w-[250px] text-white text-base hover:bg-gray-500 hover:ease-linear"
            >
              Back
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className={`p-3 bg-[#3D79F3] w-full text-white text-base hover:bg-blue-600 hover:ease-linear ${
                isLoading && "cursor-not-allowed bg-blue-700"
              }`}
            >
              {isLoading ? "Creating receptionist" : "Create receptionist"}
            </button>
          </div>
        </form>
      </aside>
      {/* Background */}
      <section className="w-[50%] h-full bg-[#3D79F3]" />
    </main>
  );
};

export default CreateReceptionist;
