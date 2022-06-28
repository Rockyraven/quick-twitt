import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setError, signUp } from "../../redux/slices/authSlice";
import { toast } from "react-toastify";

export const Signup = () => {
  const { loading, error, isAuthenticated } = useSelector(
    (state) => state.auth
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [dataForm, setDataForm] = useState({
    username: "",
    firstName: "",
    lastName: "",
    password1: "",
    password2: "",
  });
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
      toast.success("LoggedIn successFully");
    }
    if (error) {
      toast.error(error.message);
    }
    dispatch(setError());
  }, [isAuthenticated, error, dispatch, navigate]);

  const validateData = () => {
    if (
      dataForm.firstName === "" ||
      dataForm.lastName === "" ||
      dataForm.username === "" ||
      dataForm.password1.length < 6
    ) {
      dispatch(setError("Invalid Data "));
      return false;
    }

    return true;
  };
  const signupHandler = (e) => {
    e.preventDefault();
    if (validateData()) {
      console.log("Workin..");
      dispatch(signUp(dataForm));
      navigate("/");
    }
  };
  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign up to your account
          </h2>
          {error}
          <p className="mt-2 text-center text-sm text-gray-600">Or </p>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <input
                type="text"
                value={dataForm.firstName}
                autoComplete="current-password"
                placeholder="First Name"
                className="mt-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                onInput={(e) =>
                  setDataForm((prev) => ({
                    ...prev,
                    firstName: e.target.value,
                  }))
                }
              />
            </div>
            <div>
              <input
                type="text"
                value={dataForm.lastName}
                autoComplete="current-password"
                placeholder="Last Name"
                className=" appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                onInput={(e) =>
                  setDataForm((prev) => ({
                    ...prev,
                    lastName: e.target.value,
                  }))
                }
              />
            </div>
            <div>
              
              <input
                type="email"
                value={dataForm.username}
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                onInput={(e) =>
                  setDataForm((prev) => ({
                    ...prev,
                    username: e.target.value,
                  }))
                }
              />
            </div>
            <div>
              
              <input
                type="password"
                value={dataForm.password1}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                onInput={(e) =>
                  setDataForm((prev) => ({
                    ...prev,
                    password1: e.target.value,
                  }))
                }
              />
            </div>
            <div>
              
              <input
                type="password"
                value={dataForm.password2}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Confirm Password"
                onInput={(e) =>
                  setDataForm((prev) => ({
                    ...prev,
                    password2: e.target.value,
                  }))
                }
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={signupHandler}
            >
              Sign Up
            </button>
          
            <div className="mt-2">
              <span>Already have an account? </span>
              <Link to="/login">Login </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
