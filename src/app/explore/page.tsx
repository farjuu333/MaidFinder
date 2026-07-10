"use client";

import { useState, useEffect } from "react";
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

const ExplorePage = () => {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [filteredRooms, setFilteredRooms] = useState<Room[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const roomsPerPage = 8;

  // Fetch rooms from API
  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const res = await fetch("/api/rooms");
        const data = await res.json();
        setRooms(data.rooms);
        setFilteredRooms(data.rooms);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch rooms:", error);
        setLoading(false);
      }
    };
    fetchRooms();
  }, []);

  // Filter & Sort
  useEffect(() => {
    let result = [...rooms];

    // Search
    if (search) {
      result = result.filter(
        (room) =>
          room.title.toLowerCase().includes(search.toLowerCase()) ||
          room.location.toLowerCase().includes(search.toLowerCase()),
      );
    }

    // Category filter
    if (category) {
      result = result.filter((room) => room.category === category);
    }

    // Sort
    if (sortBy === "price-low") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    }

    setFilteredRooms(result);
    setCurrentPage(1);
  }, [search, category, sortBy, rooms]);

  // Pagination
  const indexOfLastRoom = currentPage * roomsPerPage;
  const indexOfFirstRoom = indexOfLastRoom - roomsPerPage;
  const currentRooms = filteredRooms.slice(indexOfFirstRoom, indexOfLastRoom);
  const totalPages = Math.ceil(filteredRooms.length / roomsPerPage);

  // Categories for filter
  const categories = [
    "Apartment",
    "Studio",
    "Villa",
    "Cottage",
    "Resort",
    "Heritage",
    "Cabin",
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Explore Rooms</h1>
          <p className="text-gray-500 mt-2">Find your perfect stay</p>
        </div>

        {/* Filters */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Search
              </label>
              <input
                type="text"
                placeholder="Search by title or location..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900 text-sm"
              />
            </div>

            {/* Category Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900 text-sm bg-white"
              >
                <option value="">All Categories</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Sort By
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900 text-sm bg-white"
              >
                <option value="">Default</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results */}
        {loading ? (
          /* Skeleton Loader */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
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
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {currentRooms.map((room) => (
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
                    <p className="text-sm text-gray-500 mb-2">
                      {room.location}
                    </p>
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

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 mt-8">
                <button
                  onClick={() => setCurrentPage(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-4 py-2 border rounded-lg text-sm disabled:opacity-50 hover:bg-gray-100 transition"
                >
                  Previous
                </button>
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`px-4 py-2 rounded-lg text-sm transition ${
                      currentPage === i + 1
                        ? "bg-rose-500 text-white"
                        : "border hover:bg-gray-100"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
                <button
                  onClick={() => setCurrentPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 border rounded-lg text-sm disabled:opacity-50 hover:bg-gray-100 transition"
                >
                  Next
                </button>
              </div>
            )}

            {/* No results */}
            {filteredRooms.length === 0 && (
              <div className="text-center py-16">
                <p className="text-gray-500 text-lg">No rooms found</p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ExplorePage;
