"use client";
import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

const Header = () => {
  const { user, isLoaded } = useUser();
  return (
    <header className="w-full fixed top-0 left-0 z-20">
      <nav className="w-full bg-primary border-b border-secondary px-4 lg:px-6 py-2.5 dark:bg-primary">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <div className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap text-accent">
              PNnails
            </span>
          </div>
          <nav className="flex items-center lg:order-2">
            <Link
              href="/"
              className="text-accent dark:accent hover:bg-neutral font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
            >
              Home
            </Link>
            {isLoaded && user ? (
              <SignOutButton>
                <button className="text-accent dark:accent hover:bg-neutral font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">
                  Logout
                </button>
              </SignOutButton>
            ) : (
              <SignInButton>
                <button className="text-accent dark:accent hover:bg-neutral font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">
                  Login
                </button>
            </SignInButton>
            )}
          </nav>
        </div>
      </nav>
    </header>
  );
};

export default Header;
