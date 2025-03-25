'use client';
import { useState } from 'react';
import Image from 'next/image';
import esstecLogo from '@/assets/images/esstec-logo.svg';
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { sessionStrgAuthKey } from '@/helper/helper';

export default function Login() {
  const hasWindow = typeof window !== 'undefined';
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const router = useRouter();
  const authentication = hasWindow && sessionStorage.getItem(sessionStrgAuthKey) === "true";
  if (authentication) {
    return router.push('/dashboard');
  }

  const handleChange = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.username === 'admin' && formData.password === 'Alwaysrespect1+') {
      const hasWindow = typeof window !== 'undefined';
      hasWindow && sessionStorage.setItem(sessionStrgAuthKey, true);
      toast.success('You are being redirected to admin area');
      router.push('/dashboard');
    } else {
      toast.error('Invalid login credentials');
    }
  };

  return (
    <section>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <Image src={esstecLogo} className="w-3/4 md:w-1/4" alt="logo" />
        <div className="w-full bg-white rounded-lg shadow border border-text-primary mt-14 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-text-primary md:text-2xl">
              Sign in
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="username"
                  className="block mb-2 text-sm font-medium text-text-primary"
                >
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  className="bg-gray-50 border border-gray-300 text-text-primary rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  required=""
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-text-primary"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-text-primary rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  required=""
                  onChange={handleChange}
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                      required=""
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="remember" className="text-text-primary">
                      Remember me
                    </label>
                  </div>
                </div>
                <a
                  href="#"
                  className="text-sm font-medium text-text-primary hover:underline"
                >
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full border border-text-primary hover:font-bold focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center text-text-primary"
              >
                Sign in
              </button>
              {/*<p className="text-sm font-light text-gray-500">
                Don’t have an account yet?{" "}
                <a
                  href="#"
                  className="font-medium text-primary-600 hover:underline"
                >
                  Sign up
                </a>
              </p>*/}
            </form>
          </div>
        </div>
        <Toaster />
      </div>
    </section>
  );
}
