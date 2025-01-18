import { useState, useRef } from "react";
import { ChevronLeftIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { signUpService } from "../services/userService";

interface SignUpData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

interface FieldErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
}

const SignUp = () => {
  const [formData, setFormData] = useState<SignUpData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [showPassword, setShowPassword] = useState(false);

  const emailRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setFieldErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const { mutate, isLoading }: any = useMutation({
    mutationFn: (data: SignUpData) => signUpService(data),
    onSuccess: () => {
      window.location.href = "/";
    },
    onError: (err: any) => {
      if (err?.message === "Email is already registered.") {
        setFieldErrors({ email: "Email is already registered." });
        emailRef.current?.focus();
      } else {
        console.error("Error during sign-up:", err.message || err);
        alert("Registration failed. Please try again.");
      }
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      formData.firstName &&
      formData.lastName &&
      formData.email &&
      formData.password
    ) {
      mutate(formData);
    }
  };

  const navigateLogin = () => {
    navigate("/login");
  };

  const isFormValid =
    formData.firstName &&
    formData.lastName &&
    formData.email &&
    formData.password;

  return (
    <div className="flex flex-col items-center justify-center px-8 text-center gap-5">
      <header className="flex items-center justify-between w-full p-6 font-medium">
        <button
          className="flex items-center text-gray-700 hover:text-gray-900 group relative"
          onClick={() => navigate("/")}
        >
          <ChevronLeftIcon className="h-5 w-5 transition-all duration-300 group-hover:opacity-0" />
          <ArrowLeftIcon className="h-5 w-5 absolute left-0 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 scale-90" />
          <span className="ml-2">BACK</span>
        </button>
        <button
          className="relative group overflow-hidden"
          onClick={navigateLogin}
        >
          <span className="text-gray-700 group-hover:text-black transition-colors duration-300">
            Log In
          </span>
          <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-black transition-all duration-700 group-hover:w-full"></span>
        </button>
      </header>

      <div className="w-full max-w-md mx-auto">
        <h1 className="text-2xl font-medium mb-6 text-center">
          Create Your Account
        </h1>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="firstName"
              className="block text-left text-sm font-medium text-gray-700 opacity-70"
            >
              First Name
            </label>
            <div className="relative group w-full min-w-[285px]">
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Your first name"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-transparent"
              />
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black group-focus-within:w-full transition-all duration-300"></span>
            </div>
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block text-left text-sm font-medium text-gray-700 opacity-70"
            >
              Last name
            </label>
            <div className="relative group w-full min-w-[285px]">
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Your last name"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-transparent"
              />
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black group-focus-within:w-full transition-all duration-300"></span>
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-left text-sm font-medium text-gray-700 opacity-70"
            >
              Email Address
            </label>
            <div className="relative group w-full min-w-[285px]">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="name@example.com"
                value={formData.email}
                onChange={handleChange}
                ref={emailRef}
                className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-transparent"
              />
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black group-focus-within:w-full transition-all duration-300"></span>
            </div>
            {fieldErrors.email && (
              <p className="text-red-500 text-sm mt-1">{fieldErrors.email}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-left text-sm font-medium text-gray-700 opacity-70"
            >
              Password
            </label>
            <div className="relative group w-full min-w-[285px]">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-transparent"
              />
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black group-focus-within:w-full transition-all duration-300"></span>
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-2 text-gray-500"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>
          <p className="opacity-50 p-4">
            {" "}
            By creating an account, you agree to our Terms of Service and have
            read and understood the Privacy Policy.
          </p>

          <button
            type="submit"
            disabled={!isFormValid || isLoading}
            className={`font-medium w-full py-3 px-4 transition-all duration-300 ${
              isFormValid
                ? "bg-black text-white hover:bg-gray-800"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            {isLoading ? "Loading..." : "CONTINUE"}
          </button>
          <button
            className="relative group overflow-hidden mt-8"
            onClick={navigateLogin}
          >
            <span className="font-medium text-gray-700 group-hover:text-black transition-colors duration-300">
              BACK
            </span>
            <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-black transition-all duration-700 group-hover:w-full"></span>
          </button>
        </form>
      </div>
      <p className="text-sm text-gray-600 mt-6">
        Secure Login with reCAPTCHA subject to Google{" "}
        <a href="#" className="text-black font-medium">
          Terms
        </a>{" "}
        &amp;
        <a href="#" className="text-black font-medium ml-1">
          Privacy
        </a>
      </p>
    </div>
  );
};

export default SignUp;
