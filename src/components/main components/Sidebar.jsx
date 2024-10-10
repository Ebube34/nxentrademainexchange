import React, { useEffect, useState } from 'react'
import {
  Sheet, SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet'
import { Separator } from '../ui/separator'
import { buttonVariants } from '../ui/button'
import { User } from 'lucide-react'
import { Link } from 'react-router-dom'



const Sidebar = ({ username }) => {
  

  return (


    <>
      <Sheet>
        <SheetTrigger className="group -m-2 flex items-center p-2">
          <User aria-hidden="true"
            className="h-8 w-8 flex-shrink-0 text-gray-400 group-hover:text-gray-500"

          />
        </SheetTrigger>
        <SheetContent className="flex w-full flex-col pr-0 sm:max-w-lg">
          <SheetHeader className="space-y-2.5 pr-6">
            <SheetTitle>Welcome {String(username).charAt(0).toUpperCase() + String(username).slice(1)} </SheetTitle>
          </SheetHeader>

          <div>
            <div className="space-y-4 pr-6">
              <Separator />
              <div className="space-y-1.5 pr-6">
                <div className="flex">
                  <span className="flex-1"><Link onClick={() => { window.HubSpotConversations.widget.open() }}>Chat with us</Link></span>
                </div>
                <div className="flex">
                  <span className="flex-1"><Link to='/'>Home</Link></span>
                </div>
                <div className="flex">
                  <span className="flex-1"><Link onClick={() => { window.HubSpotConversations.widget.open() }}>FAQs</Link></span>
                </div>
              </div>

              <SheetFooter>
                <SheetTrigger asChild>
                  <Link
                    onClick={() => { window.HubSpotConversations.widget.open() }}
                    className={buttonVariants({
                      className: "w-full",
                    })}
                  >
                    Trade
                  </Link>
                </SheetTrigger>
              </SheetFooter>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  )
}

export default Sidebar