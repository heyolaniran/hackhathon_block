"use client"
import {
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton,
  } from "@clerk/nextjs";
  import React from "react";
  import { Button } from "./button";
  import Link from "next/link";
  
export default function Header () {

    return (

        <div className="flex justify-between items-center p-2  container mx-auto ">
            <div className="items-center gap-4">
          <Link href={"/"} className="text-lg font-bold">
            WeDom
          </Link>

          <Link href={"/dashboard/files"} className="px-4">
            
          </Link>
        </div>

        <div className=" items-center flex gap-2">
          <SignedIn>
            <UserButton />
          </SignedIn>

          <SignedOut>
            <SignInButton mode="modal">
              <Button className="px-6  rounded-full "> Log in </Button>
            </SignInButton>
          </SignedOut>
        </div>
        </div>

    )
}