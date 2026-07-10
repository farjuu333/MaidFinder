"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  // Search states
  const [location, setLocation] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  const handleSearch = () => {
    if (location.trim()) {
      router.push(`/explore?location=${location}`);
    } else {
      router.push("/explore");
    }
    setShowSearch(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-rose-500 shrink-0">
          Dwello
        </Link>

        {/* Center - Search Bar */}
        <div className="hidden md:flex items-center gap-2">
          <div
            className="flex items-center border border-gray-300 rounded-full py-2 px-4 shadow-sm hover:shadow-md transition cursor-pointer min-w-[300px]"
            onClick={() => setShowSearch(!showSearch)}
          >
            <span className="text-sm font-semibold px-2">
              {location || "Anywhere"}
            </span>
            <span className="w-px h-6 bg-gray-300 mx-2"></span>
            <span className="text-sm text-gray-500 px-2">Any week</span>
            <span className="w-px h-6 bg-gray-300 mx-2"></span>
            <span className="text-sm text-gray-500 px-2">Add guests</span>
            <span className="bg-rose-500 text-white rounded-full p-2 ml-2">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </span>
          </div>
        </div>

        {/* Right - Menu */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Become a Host */}
          <Link
            href="/items/add"
            className="hidden md:block text-sm font-medium text-gray-700 hover:bg-gray-100 px-4 py-2 rounded-full transition"
          >
            Become a Host
          </Link>

          {/* Language Selector */}
          <div className="relative hidden md:block">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="text-lg hover:bg-gray-100 p-2 rounded-full transition"
            >
              🌐
            </button>

            {isLangOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white rounded-xl shadow-lg border py-2 z-50">
                <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-50">
                  English
                </button>
                <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-50">
                  বাংলা
                </button>
                <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-50">
                  Español
                </button>
              </div>
            )}
          </div>

          {isLoggedIn ? (
            /* User Profile Dropdown */
            <div className="relative">
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center gap-2 border border-gray-300 rounded-full p-1 pl-3 hover:shadow-md transition"
              >
                <span className="text-sm">☰</span>
                <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center text-white text-sm">
                  U
                </div>
              </button>

              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-60 bg-white rounded-xl shadow-lg border py-2 z-50">
                  <div className="px-4 py-2 border-b">
                    <p className="font-semibold text-sm">John Doe</p>
                    <p className="text-xs text-gray-500">john@email.com</p>
                  </div>
                  <Link
                    href="/items/manage"
                    className="block px-4 py-2 text-sm hover:bg-gray-50"
                  >
                    📋 Manage Rooms
                  </Link>
                  <Link
                    href="/profile"
                    className="block px-4 py-2 text-sm hover:bg-gray-50"
                  >
                    👤 Profile
                  </Link>
                  <hr className="my-1" />
                  <button
                    onClick={() => {
                      setIsLoggedIn(false);
                      setIsProfileOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-500 hover:bg-gray-50"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link
                href="/login"
                className="text-sm font-medium text-gray-700 hover:bg-gray-100 px-4 py-2 rounded-full transition"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="text-sm font-medium bg-rose-500 text-white px-5 py-2 rounded-full hover:bg-rose-600 transition"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Search */}
      <div className="md:hidden px-4 pb-3">
        <div className="flex items-center border border-gray-300 rounded-full py-2 px-4">
          <svg
            className="w-4 h-4 text-gray-400 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="Where to?"
            className="w-full text-sm outline-none bg-transparent"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
