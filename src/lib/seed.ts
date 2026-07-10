// src/lib/seed.ts
import Room from "@/models/Room";
import connectDB from "./db";
// import Room from "@/models/Room";

const rooms = [
  {
    title: "Luxury Apartment in Gulshan",
    description: "A beautiful modern apartment with all amenities",
    price: 120,
    location: "Gulshan, Dhaka",
    category: "Apartment",
    rating: 4.8,
    reviews: 124,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800",
    amenities: ["WiFi", "AC", "Kitchen", "Parking"],
  },
  {
    title: "Cozy Studio near Banani Lake",
    description: "Perfect studio for solo travelers or couples",
    price: 80,
    location: "Banani, Dhaka",
    category: "Studio",
    rating: 4.6,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800",
    amenities: ["WiFi", "AC", "Lake View"],
  },
  {
    title: "Beach View Bungalow",
    description: "Stunning bungalow right on the beach",
    price: 200,
    location: "Cox's Bazar",
    category: "Villa",
    rating: 4.9,
    reviews: 256,
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800",
    amenities: ["WiFi", "AC", "Beach Access", "Pool"],
  },
  {
    title: "Tea Garden Cottage",
    description: "Peaceful cottage surrounded by tea gardens",
    price: 65,
    location: "Sylhet",
    category: "Cottage",
    rating: 4.7,
    reviews: 67,
    image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=800",
    amenities: ["WiFi", "Garden", "Mountain View"],
  },
  {
    title: "Modern Apartment in Dhanmondi",
    description: "Spacious apartment with city skyline view",
    price: 95,
    location: "Dhanmondi, Dhaka",
    category: "Apartment",
    rating: 4.5,
    reviews: 43,
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800",
    amenities: ["WiFi", "AC", "Gym", "Security"],
  },
  {
    title: "Hill View Resort",
    description: "Luxury resort with breathtaking hill views",
    price: 150,
    location: "Bandarban",
    category: "Resort",
    rating: 4.8,
    reviews: 178,
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800",
    amenities: ["WiFi", "AC", "Pool", "Restaurant"],
  },
  {
    title: "Heritage Home in Old Dhaka",
    description: "Experience the charm of old Dhaka",
    price: 55,
    location: "Old Dhaka",
    category: "Heritage",
    rating: 4.3,
    reviews: 32,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800",
    amenities: ["WiFi", "AC", "Traditional Food"],
  },
  {
    title: "Lakeside Cabin",
    description: "Cozy cabin right beside a beautiful lake",
    price: 110,
    location: "Rangamati",
    category: "Cabin",
    rating: 4.6,
    reviews: 91,
    image: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=800",
    amenities: ["WiFi", "Lake View", "Fishing"],
  },
];

export const seedRooms = async () => {
  try {
    await connectDB();
    await Room.deleteMany();  
    await Room.insertMany(rooms);  
    console.log("Seed data inserted successfully!");
  } catch (error) {
    console.error("Seed error:", error);
  }
};
