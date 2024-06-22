<<<<<<< HEAD
import React, { useState } from "react";
=======
import React, {useState} from "react";
>>>>>>> 0619da6 (autheticating redone and completed)
import { Icons } from "./Icons";
import { Link, Outlet } from "react-router-dom";
import { buttonVariants } from "../ui/button";
import { userAuth } from "./userAuth";
import axios from "axios";
<<<<<<< HEAD
import { getUserId } from "./getUserId";
import UserAccountNav from "./UserAccountNav";

const Navbar = () => {


=======
import UserAccountNav from "./UserAccountNav";
import Cookies from "js-cookie";
import CryptoJS from "crypto-js";


const Navbar = () => {
  
>>>>>>> 0619da6 (autheticating redone and completed)
  const user = userAuth();
  const [userEmail, setUserEmail] = useState("") 

  if(user) {
<<<<<<< HEAD
   const id = getUserId();
=======

    const token = Cookies.get("Token");
  const secretPass = "Xkhzg478tYUAEQivas6510000056444";
  const decrptToken = CryptoJS.AES.decrypt(token, secretPass);
  const userId = JSON.parse(decrptToken.toString(CryptoJS.enc.Utf8));

  const id = userId
>>>>>>> 0619da6 (autheticating redone and completed)

   const configuration = {
    method: "get",
    url:  `https://fx-backend-sever.onrender.com/authenticating/${id}`
   }

   axios(configuration).then((result) => {
    setUserEmail(result.data.email)
    
<<<<<<< HEAD
   }).catch((err) => {return err})
  }

=======
   }).catch((err) => {

   })
  }
>>>>>>> 0619da6 (autheticating redone and completed)
  return (
    <>
      <div className="bg-white sticky z-50 top-0 inset-x-0 h-16">
        <header className="relative bg-white">
          <div className="mx-auto w-full max-w-screen-xl px-2.5 md:px-20">
            <div className="border-b border-gray-200">
              <div className="flex h-16 items-center">
                {/* TODO Mobile nav */}

                <div
                  onClick={() => navigate("/")}
                  className="ml-4 flex lg:ml-0"
                >
                  <Link to="/">
                    <Icons.logo />
                  </Link>
                </div>

                <div className="hidden z-50 lg:ml-8 lg:block lg:self-stretch">

                </div>

                <div className="ml-auto flex items-center">
                  <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                    {user ? null : (
                      <Link
                        to="/sign-in"
                        className={buttonVariants({
                          variant: "ghost",
                        })}
                      >
                        Sign in
                      </Link>
                    )}

                    {user ? null : (
                      <span
                        className="h-6 w-px bg-gray-200"
                        aria-hidden="true"
                      />
                    )}
<<<<<<< HEAD

=======
 
>>>>>>> 0619da6 (autheticating redone and completed)
                    {user ? (
                      <UserAccountNav user={userEmail} />
                    ) : (
                      <Link
                        to="/sign-up"
                        className={buttonVariants({
                          variant: "ghost",
                        })}
                      >
                        Create account
                      </Link>
                    )}

                    {user ? (
                      <span
                        className="h-6 w-px bg-gray-200"
                        aria-hidden="true"
                      />
                    ) : null}

                    {user ? null : (
                      <div className="flex lg:ml-6">
                        <span
                          className="h-6 w-px bg-gray-200"
                          aria-hidden="true"
                        />
                      </div>
                    )}


                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>


      <Outlet />
    </>
  );
};

export default Navbar;
