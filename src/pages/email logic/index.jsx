import axios from 'axios'
import React, { useState } from 'react'
import { toast } from 'sonner';
import { Loader2, XCircle } from "lucide-react";
import { buttonVariants } from '@/components/ui/button';
import { Link, useParams } from 'react-router-dom';
import { emailSentImage } from '@/assets';

const EmailLogic = () => {
    const { token } = useParams()

    const [isLoading, setIsLoading] = useState(true);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);


   const configurations = {
        method: "get",
                    url: `https://fx-backend-sever.onrender.com/verifying/${token}`,             
    }

    axios(configurations)
    .then(() => {
        setSuccess(true);
        setIsLoading(false);
        setError(false)
        toast.success("Verification succussful, you can now login")
    })
    .catch((error) => {
        setSuccess(false)
        setIsLoading(false)
        setError(true)
        toast.error(error.response.data.message)
    })
  
    if (error) {
        return (
            <div className="container relative flex pt-20 flex-col items-center justify-center lg:px-0">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col items-center gap-2">
            <XCircle className="h-8 w-8 text-red-600" />
            <h3 className="font-semibold text-xl">There was a problem</h3>
            <p className="text-muted-foreground text-sm">
              This token is not valid or might be expired. Please try again.
            </p>
          </div>
          </div>
          </div>
        );
      }

      if (success) {
        return (
            <div className="container relative flex pt-20 flex-col items-center justify-center lg:px-0">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex h-full flex-col items-center justify-center">
            <div className="relative mb-4 h-60 w-60 text-muted-foreground">
              <img src={emailSentImage} fill alt="email was sent" /> 
            </div>
    
            <h3 className="font-semibold text-2xl">You&apos;re all set!</h3>
            <p className="text-muted-foreground text-center mt-1">
              Thank you for verifying your email.
            </p>
            <Link className={buttonVariants({ className: "mt-4" })} to="/sign-in">
              Sign in
            </Link>
          </div>
          </div>
          </div>
        );
      }

      
  if (isLoading) {
    return (
        <div className="container relative flex pt-20 flex-col items-center justify-center lg:px-0">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
      <div className="flex flex-col items-center gap-2">
        <Loader2 className="animate-spin h-8 w-8 text-zinc-600" />
        <h3 className="font-semibold text-xl">Verifying...</h3>
        <p className="text-muted-foreground text-sm">
          This won&apos;t take long.
        </p>
      </div>
      </div>
      </div>
    );
  }
}

export default EmailLogic;