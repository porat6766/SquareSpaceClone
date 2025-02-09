import GoogleIcon from "../assets/google.png";
import AppleeIcon from "../assets/apple-logo.png";
import FacebookIcon from "../assets//communication.png";
import { useEffect, useState } from "react";
import { ChevronLeftIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { loginService } from "../services/userService";
import toast, { Toaster } from "react-hot-toast";
import { GoogleLogin } from '@react-oauth/google';

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const isFormValid = email !== "" && password !== "";

  useEffect(() => {
    if (location.state?.toastMessage) {
      toast(location.state.toastMessage);
    }
  }, [location.state]);

  const navigateToSignUp = () => {
    navigate("/signup");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const navigateToRoot = () => {
    navigate("/");
  };

  const mutation = useMutation({
    mutationFn: loginService,
    onSuccess: (data) => {
      console.log("Login successful:", data);
      window.location.href = "/";
    },
    onError: (error) => {
      console.error("Login failed:", error);

      if (error.message === "Network Error") {
        setErrorMessage("An error has occurred. Please try again later.");
      } else if (
        error.message === "User not found." ||
        error.message === "Invalid credentials."
      ) {
        setErrorMessage(
          "The username or password is incorrect. Please try again."
        );
      } else {
        setErrorMessage(
          "An unexpected error has occurred. Please try again later."
        );
      }
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      mutation.mutate({ email, password });
    }
  };

  const handleGoogleLoginSuccess = () => {
    window.location.href = 'https://squarespaceclone.onrender.com/api/auth/google';
  };


  return (
    <div className="flex flex-col items-center justify-center min-w-[330px]">
      <Toaster position="top-center" reverseOrder={false} />
      <header className="flex items-center justify-between w-full p-6 font-medium mt-6 px-8">
        <button
          onClick={() => navigateToRoot()}
          className="flex items-center text-gray-700 hover:text-gray-900 group relative"
        >
          <ChevronLeftIcon className="h-5 w-5 transition-all duration-300 group-hover:opacity-0" />
          <ArrowLeftIcon className="h-5 w-5 absolute left-0 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 scale-90" />
          <span className="ml-2">BACK</span>
        </button>
        <button
          className="relative group overflow-hidden"
          onClick={navigateToSignUp}
        >
          <span className="text-gray-700 group-hover:text-black transition-colors duration-300">
            CREATE ACCOUNT
          </span>
          <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-black transition-all duration-700 group-hover:w-full"></span>
        </button>
      </header>

      <div className="flex flex-col items-center text-center space-y-6 w-full max-w-md lg:max-w-[1000px] px-4">
        <div>
          <svg
            className="logo-pat pl-[105px] w-[250px] h-12 mx-auto mb-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 500 72"
          >
            <title>Squarespace Logo</title>
            <path d="M18.49 38.15L46.67 10A10.16 10.16 0 0 1 61 10l2.19 2.19 4.39-4.39-2.19-2.2a16.38 16.38 0 0 0-23.14 0L14.09 33.76z"></path>
            <path
              d="M56.11 19.27l-4.39-4.39-28.19 28.19A10.15 10.15 0 0 1 9.18 28.71L33.5 4.39 29.11 0 4.79 24.32a16.36 16.36 0 1 0 23.13 
              23.14zM84.17 24.32a16.39 16.39 0 0 0-23.14 0L32.84 52.51l4.39 4.39 28.19-28.19a10.15 10.15 0 0 1 17.32 7.18 10 10 0 0 1-3 7.18L55.45
               67.39l4.4 4.39 24.32-24.32a16.38 16.38 0 0 0 0-23.14z"
            ></path>
            <path d="M70.47 33.63L42.28 61.81a10.17 10.17 0 0 1-14.36 0l-2.19-2.2L21.34 64l2.19 2.2a16.39 16.39 0 0 0 23.14 0L74.86 38z"></path>
          </svg>
          <span className="font-bold text-lg">Log into Squarespace</span>
        </div>

        <div className="min-w-full min-h-full space-y-4 lg:flex justify-center">
          <form
            onSubmit={(e) => handleSubmit(e)}
            className="space-y-3 p-10 min-w-[285px]"
          >
            <label
              htmlFor="email"
              className="block text-left text-sm font-medium text-gray-700 opacity-70"
            >
              Email address
            </label>
            <div className="relative group w-full min-w-[285px]">
              <input
                type="email"
                id="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-transparent"
              />
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black group-focus-within:w-full transition-all duration-300"></span>
            </div>

            <label
              htmlFor="password"
              className="block text-left text-sm font-medium text-gray-700 opacity-70"
            >
              Password
            </label>
            <div className="relative">
              <div className="relative group w-full min-w-[285px]">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-transparent"
                />
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black group-focus-within:w-full transition-all duration-300"></span>
              </div>

              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            <div className="w-full flex justify-center">
              {errorMessage && (
                <p className="text-red-500 text-s mt-2 max-w-[250px]">
                  {errorMessage}
                </p>
              )}
            </div>
            <button
              disabled={!isFormValid}
              className={`w-full py-2 rounded font-medium transition-all ${isFormValid
                ? "bg-black text-white hover:bg-gray-800"
                : "bg-gray-300 text-gray-600 cursor-not-allowed "
                }`}
            >
              LOG IN
            </button>
          </form>

          <div className="w-full flex items-center lg:flex-col lg:gap-5 lg:max-w-fit">
            <div className="h-px w-px flex-grow bg-gray-300" />
            <span className="px-4 text-sm text-gray-500">or</span>
            <div className="h-px w-px flex-grow bg-gray-300" />
          </div>

          <div className="flex flex-col space-y-2 p-10 justify-center ">
            <button className="relative overflow-hidden border border-black group min-w-[285px]">
              <span className="absolute inset-0 bg-gradient-to-r from-gray-500 to-gray-300 translate-x-[-100%] group-hover:translate-x-0 group-hover:bg-gradient-to-r group-hover:from-gray-300 group-hover:to-gray-500 transition-transform duration-300 ease-in-out"></span>
              <span className="relative flex items-center gap-2 px-4 py-2 text-black group-hover:text-white z-10">
                <img src={GoogleIcon} alt="Google logo" className="w-4 h-4" />
                <span className="pl-[50px]">Continue with Google</span>
                <GoogleLogin
                  onSuccess={handleGoogleLoginSuccess}
                  containerProps={{
                    style: {
                      position: "absolute",
                      width: "100%",
                      height: "100%",
                      opacity: 0,
                    },
                  }}
                />
              </span>
            </button>
            <button className="relative overflow-hidden border border-black group min-w-[285px]">
              <span className="absolute inset-0 bg-gradient-to-r from-gray-500 to-gray-300 translate-x-[-100%] group-hover:translate-x-0 group-hover:bg-gradient-to-r group-hover:from-gray-300 group-hover:to-gray-500 transition-transform duration-300 ease-in-out"></span>
              <span className="relative flex items-center gap-2 px-4 py-2 text-black group-hover:text-white z-10">
                <img src={AppleeIcon} alt="Google logo" className="w-4 h-4" />
                <span className="pl-[50px]">Continue with Apple</span>
              </span>
            </button>
            <button className="relative overflow-hidden border border-black group min-w-[285px]">
              <span className="absolute inset-0 bg-gradient-to-r from-gray-500 to-gray-300 translate-x-[-100%] group-hover:translate-x-0 group-hover:bg-gradient-to-r group-hover:from-gray-300 group-hover:to-gray-500 transition-transform duration-300 ease-in-out"></span>
              <span className="relative flex items-center gap-2 px-4 py-2 text-black group-hover:text-white z-10">
                <img src={FacebookIcon} alt="Google logo" className="w-4 h-4" />
                <span className="pl-[50px]">Continue with Facebook</span>
              </span>
            </button>
          </div>
        </div>
        <button className="text-gray-700 hover:text-black transition-colors duration-300">
          Can’t log in?
        </button>
      </div>
      <p className="text-sm text-gray-600 ">
        Secure Login with reCAPTCHA subject to Google{" "}
        <a href="#" className="text-black font-medium">
          Terms
        </a>{" "}
        &
        <a href="#" className="text-black font-medium ml-1 ">
          Privacy
        </a>
      </p>
    </div>
  );
};

export default Login;
