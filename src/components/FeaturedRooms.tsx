// src/components/FeaturedRooms.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface Room {
  _id: string;
  title: string;
  location: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  category: string;
}

const FeaturedRooms = () => {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const res = await fetch("/api/rooms");
        const data = await res.json();
        setRooms(data.rooms.slice(0, 4)); // First 4 rooms
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch rooms:", error);
        setLoading(false);
      }
    };
    fetchRooms();
  }, []);

  if (loading) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-10">
            <div className="h-8 bg-gray-200 rounded w-1/4 animate-pulse mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-1/3 animate-pulse"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="bg-white rounded-xl overflow-hidden animate-pulse"
              >
                <div className="h-48 bg-gray-200"></div>
                <div className="p-4">
                  <div className="h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-3 bg-gray-200 rounded w-3/4 mb-3"></div>
                  <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Featured Rooms</h2>
            <p className="text-gray-500 mt-2">
              Handpicked stays for your next trip
            </p>
          </div>
          <Link
            href="/explore"
            className="hidden sm:block text-sm font-medium text-rose-500 hover:text-rose-600 transition"
          >
            View all rooms →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {rooms.map((room) => (
            <Link
              key={room._id}
              href={`/room/${room._id}`}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={room.image}
                  alt={room.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <span className="absolute top-3 left-3 bg-white text-gray-900 text-xs font-medium px-2 py-1 rounded-full">
                  {room.category}
                </span>
              </div>

              <div className="p-4">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-semibold text-gray-900 truncate">
                    {room.title}
                  </h3>
                  <span className="flex items-center gap-1 text-sm">
                    ⭐ {room.rating}
                  </span>
                </div>
                <p className="text-sm text-gray-500 mb-2">{room.location}</p>
                <div className="flex items-center justify-between">
                  <p className="text-sm">
                    <span className="font-semibold text-gray-900">
                      ${room.price}
                    </span>
                    <span className="text-gray-500"> / night</span>
                  </p>
                  <p className="text-xs text-gray-400">
                    {room.reviews} reviews
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <Link
          href="/explore"
          className="sm:hidden block text-center text-sm font-medium text-rose-500 hover:text-rose-600 transition mt-8"
        >
          View all rooms →
        </Link>
      </div>
    </section>
  );
};

export default FeaturedRooms;
