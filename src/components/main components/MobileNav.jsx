import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useLocation, Link } from "react-router-dom";
import UserAccountNav from "./UserAccountNav";

const MobileNav = ({ userEmail, user }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const closeOnCurrent = (string) => {
    if (location.pathname === string) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) document.body.classList.add("overflow-hidden");
    else document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  if (!isOpen)
    return (
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="lg:hidden relative -m-2 inline-flex items-center justify-end rounded-md p-2 text-gray-500"
      >
        <Menu className="h-7 w-7" aria-hidden="true" />
      </button>
    );

  return (
    <div>
      <div className="relative z-40 lg:hidden">
        <div className=" inset-0 bg-black bg-opacity-25" />
      </div>

      <div className="fixed overflow-y-scroll overscroll-y-none inset-0 z-40 flex justify-end ">
        <div className="w-4/5">
          <div className="relative flex w-full max-w-sm flex-col overflow-y-auto bg-white pb-12 shadow-xl">
            <div className="flex px-4 pb-2 pt-5">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-500"
              >
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
         
       

        {user ? (
          <div className="space-y-6 border-t border-gray-200 px-4 py-6">
            {" "}
            <div className="flow-root">
              {" "}
              <UserAccountNav user={userEmail} />
            </div>{" "}
          </div>
        ) : (
          <div className="space-y-6 border-t border-gray-200 px-4 py-6">
            <div className="flow-root">
              <Link
                onClick={() => closeOnCurrent("/sign-in")}
                to="/sign-in"
                className="-m-2 block p-2 font-medium text-gray-900"
              >
                Sign in
              </Link>
            </div>
            <div className="flow-root">
              <Link
                onClick={() => closeOnCurrent("/sign-up")}
                to="/sign-up"
                className="-m-2 block p-2 font-medium text-gray-900"
              >
                Sign up
              </Link>
            </div>
          </div>
        )}
        </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
