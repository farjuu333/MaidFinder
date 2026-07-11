// src/app/items/manage/page.tsx
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";

interface Room {
  _id: string;
  title: string;
  location: string;
  price: number;
  category: string;
  rating: number;
  reviews: number;
  image: string;
}

const ManageRoomsPage = () => {
  const router = useRouter();
  const { data: session } = authClient.useSession();
  const [rooms, setRooms] = useState<Room[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [success, setSuccess] = useState("");

  useEffect(() => {
    if (!session) {
      router.push("/login");
    }
  }, [session, router]);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const res = await fetch("/api/rooms/my-rooms");
        const data = await res.json();
        setRooms(data.rooms);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch rooms:", error);
        setLoading(false);
      }
    };
    fetchRooms();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      const res = await fetch(`/api/rooms/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        setRooms(rooms.filter((room) => room._id !== id));
        setSuccess("Room deleted successfully!");
        setDeleteId(null);
        setTimeout(() => setSuccess(""), 3000);
      }
    } catch (error) {
      console.error("Failed to delete room:", error);
    }
  };

  if (!session) return null;

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Manage Rooms</h1>
            <p className="text-gray-500 mt-2">
              View, edit and delete your listings
            </p>
          </div>
          <Link
            href="/items/add"
            className="bg-rose-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-rose-600 transition"
          >
            + Add New Room
          </Link>
        </div>

        {/* Success Message */}
        {success && (
          <div className="bg-green-50 text-green-600 text-sm p-3 rounded-lg mb-6">
            ✅ {success}
          </div>
        )}

        {/* Rooms Table */}
        {loading ? (
          <div className="bg-white rounded-xl shadow-sm border p-8">
            <div className="animate-pulse space-y-4">
              <div className="h-4 bg-gray-200 rounded w-1/4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            </div>
          </div>
        ) : rooms.length === 0 ? (
          <div className="bg-white rounded-xl shadow-sm border p-16 text-center">
            <p className="text-gray-500 text-lg mb-4">No rooms found</p>
            <Link
              href="/items/add"
              className="text-rose-500 font-medium hover:text-rose-600"
            >
              Add your first room →
            </Link>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
            {/* Desktop Table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="text-left p-4 text-sm font-medium text-gray-500">
                      Room
                    </th>
                    <th className="text-left p-4 text-sm font-medium text-gray-500">
                      Location
                    </th>
                    <th className="text-left p-4 text-sm font-medium text-gray-500">
                      Price
                    </th>
                    <th className="text-left p-4 text-sm font-medium text-gray-500">
                      Category
                    </th>
                    <th className="text-left p-4 text-sm font-medium text-gray-500">
                      Rating
                    </th>
                    <th className="text-right p-4 text-sm font-medium text-gray-500">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {rooms.map((room) => (
                    <tr
                      key={room._id}
                      className="border-b hover:bg-gray-50 transition"
                    >
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <img
                            src={room.image}
                            alt={room.title}
                            className="w-12 h-12 rounded-lg object-cover"
                          />
                          <span className="font-medium text-gray-900 text-sm">
                            {room.title}
                          </span>
                        </div>
                      </td>
                      <td className="p-4 text-sm text-gray-500">
                        {room.location}
                      </td>
                      <td className="p-4 text-sm font-medium text-gray-900">
                        ${room.price}
                      </td>
                      <td className="p-4">
                        <span className="px-2 py-1 bg-gray-100 rounded-full text-xs font-medium">
                          {room.category}
                        </span>
                      </td>
                      <td className="p-4 text-sm">⭐ {room.rating}</td>
                      <td className="p-4">
                        <div className="flex items-center justify-end gap-2">
                          <Link
                            href={`/room/${room._id}`}
                            className="px-3 py-1.5 text-xs font-medium text-gray-600 border rounded-lg hover:bg-gray-100 transition"
                          >
                            View
                          </Link>
                          <button
                            onClick={() =>
                              setDeleteId(
                                deleteId === room._id ? null : room._id,
                              )
                            }
                            className="px-3 py-1.5 text-xs font-medium text-red-500 border border-red-200 rounded-lg hover:bg-red-50 transition"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden divide-y">
              {rooms.map((room) => (
                <div key={room._id} className="p-4 space-y-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={room.image}
                      alt={room.title}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div>
                      <h3 className="font-medium text-gray-900 text-sm">
                        {room.title}
                      </h3>
                      <p className="text-xs text-gray-500">{room.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span>${room.price}/night</span>
                    <span>·</span>
                    <span className="px-2 py-0.5 bg-gray-100 rounded-full">
                      {room.category}
                    </span>
                    <span>·</span>
                    <span>⭐ {room.rating}</span>
                  </div>
                  <div className="flex gap-2">
                    <Link
                      href={`/room/${room._id}`}
                      className="flex-1 text-center px-3 py-2 text-xs font-medium text-gray-600 border rounded-lg hover:bg-gray-100 transition"
                    >
                      View
                    </Link>
                    <button
                      onClick={() =>
                        setDeleteId(deleteId === room._id ? null : room._id)
                      }
                      className="flex-1 text-center px-3 py-2 text-xs font-medium text-red-500 border border-red-200 rounded-lg hover:bg-red-50 transition"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Delete Confirmation Modal */}
        {deleteId && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
            <div className="bg-white rounded-2xl p-6 max-w-md w-full">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Confirm Delete
              </h3>
              <p className="text-sm text-gray-500 mb-6">
                Are you sure you want to delete this room? This action cannot be
                undone.
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => setDeleteId(null)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition"
                >
                  Cancel
                </button>
                <button
                  onClick={() => handleDelete(deleteId)}
                  className="flex-1 px-4 py-2 bg-red-500 text-white rounded-lg text-sm font-medium hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageRoomsPage;
