import React, { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from "react-router-dom";
import { buttonVariants } from '../../components/ui/button';
import { Menu, X } from "lucide-react";
import Cookies from 'js-cookie';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";
import { userAuth } from '../../components/main components';
import { getUserId } from '../../components/main components/getUserId';
import axios from 'axios';
import Sidebar from '@/components/main components/Sidebar';



const Dashboard = () => {

  const user = userAuth();
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('');
  const id = getUserId();

  const signOut = () => {
    Cookies.remove("Token", { path: "/" });
    window.location.href = "/";
  }

  const configuration = {
    method: "GET",
    headers: { 'Content-Type': 'application/json' },
    url: `https://nxentradebackend.onrender.com/authenticating/${id}`,
  }

  axios(configuration).then((result) => {
    setUsername(result.data.username)
    setEmail(result.data.userEmail)

  }).catch((err) => { return err });

  const MobileNavMenu = ({ email }) => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const userState = userAuth()

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



              {userState ? (
                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  {" "}
                  <div className="flow-root">
                    {" "}
                    <>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild className="overflow-visible">
                          <Button variant="ghost" size="sm" className="relative">
                            My account
                          </Button>
                        </DropdownMenuTrigger>

                        <DropdownMenuContent className="bg-white w-60" align="end">
                          <div className="flex items-center justify-start gap-2 p-2">
                            <div className="flex flex-col space-y-0.5 leading-none">
                              <p className="font-medium text-sm text-black">{email}</p>
                            </div>
                          </div>

                          <DropdownMenuSeparator />

                          <DropdownMenuItem asChild>
                            <Link onClick={() => { window.HubSpotConversations.widget.open() }}>Trade</Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={signOut} className="cursor-pointer">
                            Log out
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </>
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
                  <div className="flow-root">
                    <Link
                      onClick={() => { window.HubSpotConversations.widget.open() }}
                      className="-m-2 block p-2 font-medium text-gray-900"
                    >
                      Trade
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }





  return (
    <>

      <div className="mx-auto w-full max-w-screen-xl px-2.5 md:px-20">
        <div className="bg-white sticky z-50 top-0 inset-x-0 h-16">
          <header className="relative bg-white">
            <div className="mx-auto w-full max-w-screen-xl px-2.5 md:px-20">
              <div className="border-b border-gray-200">
                <div className="flex h-16 items-center">



                  <div style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "stretch" }}>
                    <div
                      className="ml-4 flex lg:ml-0 mr-100"
                    >
                      <Sidebar username={username} />
                    </div>

                    <div className="mr-4 mt-2">
                      <MobileNavMenu email={email} />
                    </div>
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

                      {user ? (
                        <>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild className="overflow-visible">
                              <Button variant="ghost" size="sm" className="relative">
                                My account
                              </Button>
                            </DropdownMenuTrigger>

                            <DropdownMenuContent className="bg-white w-60" align="end">
                              <div className="flex items-center justify-start gap-2 p-2">
                                <div className="flex flex-col space-y-0.5 leading-none">
                                  <p className="font-medium text-sm text-black">{email}</p>
                                </div>
                              </div>

                              <DropdownMenuSeparator />

                              <DropdownMenuItem asChild>
                                <Link onClick={() => { window.HubSpotConversations.widget.open() }}>Trade</Link>
                              </DropdownMenuItem>
                              <DropdownMenuItem onClick={signOut} className="cursor-pointer">
                                Log out
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </>
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



        <div>

        </div>
      </div>



      {/* Sidebar
        section
          sheettitle
            welcome {username}
          sheettitle

          logo
          
          chat with us
          Home

          sheetfooter
            trade now
          sheetfooter
        section
      Siderbar


      section
        trade bitcoin to naria
        trade usdt to naria
        trade eth to naria
      section


     Footer */}
    </>
  )
}

export default Dashboard;
