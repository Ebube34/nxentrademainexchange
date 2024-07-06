import React from "react";
import { Button, buttonVariants } from "../../components/ui/button";
import { Link, Outlet } from "react-router-dom";
import { Zap, Smartphone, Percent } from "lucide-react";
import { Timeline, eagerLoadTwitterLibrary } from "react-twitter-widgets";
import Navbar from "../../components/main components/Navbar";
import { Foter } from "@/components/main components";


const perks = [
  {
    name: "Instant Payout",
    icon: Zap,
    description: "Experience immediate payments with no delays.",
  },
  {
    name: "Simple To Use",
    icon: Smartphone,
    description:
      "The platform's design prioritizes simplicity to ensure our users can trade effortlessly.",
  },
  {
    name: "Afordable Rates",
    icon: Percent,
    description:
      "NxenTrade provides the most competitive exchange rates available in the market.",
  },
];
eagerLoadTwitterLibrary()

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="mx-auto w-full max-w-screen-xl px-2.5 md:px-20">
        <div className="py-40 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Buy and sell <span className="text-blue-600"> cryptocurrency </span>{" "}
            easily with bank transfer.
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">
            Welcome to NxenTrade. Seamlessly engage in buying and selling of
            crypto with local currencies at standard rates.{" "}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <div onClick={() => {window.HubSpotConversations.widget.open()}}>
            <Button className={ buttonVariants()}>
              Trade Crypto
            </Button>
            </div>
            <Button variant="ghost">
              <Link to="sign-up">Create account &rarr;</Link>{" "}
            </Button>
          </div>
        </div>
      </div>

      {/* second part */}
      <section className="bordet-t border-gray-500 bg-gray-300">
        <div className="mx-auto w-full max-w-screen-xl px-2.5 md:px-20 py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {perks.map((perk) => (
              <div
                key={perk.name}
                className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
              >
                <div className="md:flex-shrink-0 flex justify-center">
                  <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900">
                    {<perk.icon className="w-1/3 h-1/3" />}
                  </div>
                </div>

                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="text-base font-medium text-gray-900">
                    {perk.name}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* third part */}
      <section>
        <div className="mx-auto w-full max-w-screen-xl px-2.5 md:px-20 py-20">
         {/* eslint-disable-next-line no-restricted-globals */}
          <div
            style={{
              height: "400px",
              overflowY: "scroll",
              margin: "0 0 2rem 0",
            }}
          >
            <Timeline
              dataSource={{
                sourceType: "profile",
                screenName: "BitcoinMagazine",
              }}
              options={{ height: "400" }}
              renderError={(_err) => (
                <p style={{ textAlign: "center", fontSize: "20px" }}>
                  could not load timeline
                </p>
              )}
            />
          </div>
        </div>
      </section>

      {/* fourth part */}
      <div className="mx-auto w-full max-w-screen-xl px-2.5 md:px-20 py-4">
        <section className="bordet-t  w-full mt-5">
          <div className="mx-auto text-center flex flex-col items-center max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Introducing our Instagram account{" "}
            </h1>
            <p className="mt-6 text-lg max-w-prose text-muted-foreground">Our Instagram community is rapidly expanding as an educational and interactive space focused on cryptocurrencies.</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6 mb-20">
            <Button variant="ghost">

              <Link to="https://www.instagram.com/nxentrade.ex/" target="_blank" rel="noopener noreferrer">
                Follow us &rarr;
              </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>

      {/* fifth part */}
      <Foter />
      <Outlet />
    </>
  );
};

export default Home;
