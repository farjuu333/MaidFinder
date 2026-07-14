"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
  const router = useRouter();
  const { data: session } = authClient.useSession();
  const isLoggedIn = !!session?.user;

  const [isLangOpen, setIsLangOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location, setLocation] = useState("");
  const [serviceType, setServiceType] = useState(""); 

  const handleLogout = async () => {
    await authClient.signOut();
    setMobileMenuOpen(false);
    router.push("/");
  };

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (location.trim()) params.append("location", location);
    if (serviceType) params.append("service", serviceType);
    router.push(`/explore?${params.toString()}`);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-4">
        
        <Link href="/" className="text-2xl font-bold text-purple-600 shrink-0">
          MaidFinder
        </Link>

        
        <div className="hidden md:flex items-center gap-2">
          <div
            className="flex items-center border border-gray-300 rounded-full py-2 px-4 shadow-sm hover:shadow-md transition cursor-pointer min-w-[300px]"
            onClick={handleSearch}
          >
          
            <span className="text-sm font-semibold px-2">
              {location || "Any City"}
            </span>
            <span className="w-px h-6 bg-gray-300 mx-2"></span>
            
            
            <span className="text-sm text-gray-500 px-2">
              {serviceType || "Service"}
            </span>
            <span className="w-px h-6 bg-gray-300 mx-2"></span>
            
            
            <span className="text-sm text-gray-500 px-2">Any Date</span>
            <span className="w-px h-6 bg-gray-300 mx-2"></span>
            
            
            <span className="bg-purple-500 text-white rounded-full p-2 ml-2">
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

        
        <div className="hidden md:flex items-center gap-3 shrink-0">
          {isLoggedIn ? (
            <>
              <Link
                href="/maids/add"
                className="text-sm font-medium text-gray-700 hover:bg-gray-100 px-4 py-2 rounded-full transition"
              >
                List Your Maid
              </Link>
              <Link
                href="/maids/manage"
                className="text-sm font-medium text-gray-700 hover:bg-gray-100 px-4 py-2 rounded-full transition"
              >
                Manage Maids
              </Link>
              <div className="flex items-center gap-3 pl-2">
                <div className="w-9 h-9 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                  {session?.user?.name?.charAt(0) || "U"}
                </div>
                <button
                  onClick={handleLogout}
                  className="text-sm font-medium text-gray-500 hover:text-purple-500 transition"
                >
                  Logout
                </button>
              </div>
            </>
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
                className="text-sm font-medium bg-purple-500 text-white px-5 py-2 rounded-full hover:bg-purple-600 transition"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-2xl text-gray-700"
        >
          {mobileMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t px-6 py-6 flex flex-col gap-4 text-base text-gray-700 font-medium">
          <Link href="/explore" onClick={() => setMobileMenuOpen(false)}>
            Find Maids
          </Link>
          <Link href="/about" onClick={() => setMobileMenuOpen(false)}>
            About Us
          </Link>
          <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
            Contact
          </Link>

          <hr className="border-gray-200" />

          {isLoggedIn ? (
            <>
              <Link href="/maids/add" onClick={() => setMobileMenuOpen(false)}>
                Add Maid
              </Link>
              <Link
                href="/maids/manage"
                onClick={() => setMobileMenuOpen(false)}
              >
                Manage Maids
              </Link>
              <button
                onClick={handleLogout}
                className="text-left text-purple-500 font-medium"
              >
                Logout
              </button>
            </>
          ) : (
            <div className="flex flex-col gap-2">
              <Link
                href="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="border border-gray-300 text-center px-4 py-2 rounded-full"
              >
                Login
              </Link>
              <Link
                href="/register"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-purple-500 text-white text-center px-4 py-2 rounded-full"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;