import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearError, login } from "../../redux/slices/authSlice";
import "./loginPage.css";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Sidebaar } from "../../component";

export const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { error, isAuthenticated } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
      toast.success("LoggedIn successFully");
    }
    if (error) {
      toast.error(error.message);
    }
    dispatch(clearError());
  }, [isAuthenticated, error, dispatch]);

  const loginHandler = (username, password) => {
    if (isAuthenticated) {
      navigate("/");
      toast.success("LoggedIn successFully");
    }
    dispatch(login({ username, password }));
  };

  return (
    <>
    <div className="flex ">
      <div className="min-h-full m-auto flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or{' '}
             
            </p>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  type="email"
                  value={username}
                  autoComplete='current-password'
                  required
                  className="mt-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                  onInput={(e) => setUsername(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  onInput={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={() => loginHandler(username, password)}
              >
                Sign in
              </button>
              <button
                type="submit"
                onClick={()=>{setUsername("rockyraven#5213"); setPassword("adarshBalika123")}}
                className="login group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-black bg-grey-1000 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                
              >
                Sign as guest user
              </button>
              <div className="mb-15">
              <span >Don't have an account?  </span>
          <Link to="/signup">Create Account </Link>

              </div>
            </div>
          </form>
        </div>
      </div>
      </div>
      </>
  )
}

