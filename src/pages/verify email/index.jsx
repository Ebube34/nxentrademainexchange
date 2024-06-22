import { emailSentImage } from "@/assets";
import React from "react";
import { Link } from "react-router-dom";
import { buttonVariants } from "@/components/ui/button";

const VerifyEmail = () => {
  return (
    <>
      <div className="flex h-full flex-col items-center space-y-1 justify-center">
        <div className="relative mb-4 h-60 text-muted-foreground">
          <img width="200px" height="200px" alt="Email Sent" src={emailSentImage} />
        </div>

        <h3 className="font-semibold text-2xl"> Check your email</h3>
        <p className="text-muted-foreground text-center p-3">
          We&apos;ve sent a verification link to your email
        </p>
        <Link className={buttonVariants({ className: "mt-4" })} to="/">
              Home
            </Link>
      </div>
    </>
  );
};

export default VerifyEmail;
