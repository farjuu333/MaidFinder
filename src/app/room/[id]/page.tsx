// src/app/room/[id]/page.tsx
"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

interface Room {
  _id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  category: string;
  rating: number;
  reviews: number;
  image: string;
  amenities: string[];
}

const RoomDetailPage = () => {
  const params = useParams();
  const id = params.id as string;

  const [room, setRoom] = useState<Room | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRoom = async () => {
      try {
        const res = await fetch(`/api/rooms/${id}`);
        const data = await res.json();
        setRoom(data.room);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch room:", error);
        setLoading(false);
      }
    };
    if (id) fetchRoom();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white pt-20">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="animate-pulse">
            <div className="h-[60vh] bg-gray-200 rounded-2xl mb-8"></div>
            <div className="h-8 bg-gray-200 rounded w-1/2 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/4 mb-6"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!room) {
    return (
      <div className="min-h-screen bg-white pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Room Not Found
          </h1>
          <Link
            href="/explore"
            className="text-rose-500 hover:text-rose-600 font-medium"
          >
            ← Back to Explore
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-start justify-between flex-wrap gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              {room.title}
            </h1>
            <div className="flex items-center gap-3 text-sm text-gray-500 flex-wrap">
              <span className="flex items-center gap-1">
                ⭐ {room.rating} ·
                <span className="underline cursor-pointer">
                  {room.reviews} reviews
                </span>
              </span>
              <span>·</span>
              <span> {room.location}</span>
              <span>·</span>
              <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-700">
                {room.category}
              </span>
            </div>
          </div>
          <Link
            href="/explore"
            className="text-sm font-medium text-gray-600 hover:text-rose-500 transition flex items-center gap-1"
          >
            ← Back
          </Link>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="max-w-7xl mx-auto px-6 mb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 h-[50vh] rounded-2xl overflow-hidden">
          <div className="h-full">
            <img
              src={room.image}
              alt={room.title}
              className="w-full h-full object-cover hover:scale-105 transition duration-500"
            />
          </div>
          <div className="h-full grid grid-cols-2 gap-2">
            <img
              src={room.image}
              alt={room.title}
              className="w-full h-full object-cover hover:scale-105 transition duration-500"
            />
            <img
              src={room.image}
              alt={room.title}
              className="w-full h-full object-cover hover:scale-105 transition duration-500"
            />
            <img
              src={room.image}
              alt={room.title}
              className="w-full h-full object-cover hover:scale-105 transition duration-500"
            />
            <img
              src={room.image}
              alt={room.title}
              className="w-full h-full object-cover hover:scale-105 transition duration-500"
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left - Details */}
          <div className="lg:col-span-2 space-y-10">
            {/* Host Section */}
            <div className="flex items-center justify-between pb-6 border-b">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-lg">
                  👤
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Hosted by Dwello
                  </h3>
                  <p className="text-sm text-gray-500">Verified Host</p>
                </div>
              </div>
              <span className="px-3 py-1 bg-rose-100 text-rose-600 text-xs font-medium rounded-full">
                {room.category}
              </span>
            </div>

            {/* Description */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                About this place
              </h2>
              <p className="text-gray-600 leading-relaxed text-base">
                {room.description}
              </p>
            </div>

            {/* Amenities */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                What this place offers
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {room.amenities.map((amenity, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition"
                  >
                    <span className="text-lg">✓</span>
                    <span className="text-gray-700 text-sm">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews Section */}
            <div className="border-t pt-8">
              <div className="flex items-center gap-2 mb-6">
                <h2 className="text-xl font-bold text-gray-900">Reviews</h2>
                <span className="text-lg">⭐ {room.rating}</span>
                <span className="text-gray-500">· {room.reviews} reviews</span>
              </div>

              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                    <div>
                      <p className="font-semibold text-sm text-gray-900">
                        Sarah Ahmed
                      </p>
                      <p className="text-xs text-gray-500">2 weeks ago</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>⭐</span>
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm">
                    Absolutely loved my stay! The place was exactly as
                    described. Would definitely come back again!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Booking Card */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-2xl font-bold text-gray-900">
                    ${room.price}
                    <span className="text-base font-normal text-gray-500">
                      {" "}
                      / night
                    </span>
                  </p>
                </div>
                <span className="flex items-center gap-1 text-sm text-gray-600">
                  ⭐ {room.rating}
                </span>
              </div>

              {/* Booking Form (Simple) */}
              <div className="border rounded-xl mb-4">
                <div className="grid grid-cols-2 divide-x">
                  <div className="p-3">
                    <p className="text-xs font-semibold text-gray-900">
                      CHECK IN
                    </p>
                    <p className="text-sm text-gray-500">Add date</p>
                  </div>
                  <div className="p-3">
                    <p className="text-xs font-semibold text-gray-900">
                      CHECK OUT
                    </p>
                    <p className="text-sm text-gray-500">Add date</p>
                  </div>
                </div>
                <div className="border-t p-3">
                  <p className="text-xs font-semibold text-gray-900">GUESTS</p>
                  <p className="text-sm text-gray-500">1 guest</p>
                </div>
              </div>

              <button className="w-full bg-rose-500 text-white py-3.5 rounded-xl font-semibold hover:bg-rose-600 transition mb-3 text-base">
                Check Availability
              </button>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">${room.price} x 1 night</span>
                  <span className="text-gray-900">${room.price}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Service fee</span>
                  <span className="text-gray-900">$15</span>
                </div>
                <div className="flex justify-between pt-3 border-t font-semibold">
                  <span className="text-gray-900">Total</span>
                  <span className="text-gray-900">${room.price + 15}</span>
                </div>
              </div>

              <p className="text-center text-xs text-gray-400 mt-4">
                You won&apos;t be charged yet
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetailPage;
