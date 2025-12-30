"use client";
import { Header } from "@/components/common/Header";
import React, { useState } from "react";

// Sample data - replace with actual data from your backend
const galleryItems = [
  {
    id: 1,
    type: "photo",
    title: "Astrology Session 2024",
    image: "https://images.unsplash.com/photo-1532968961962-8a0cb3a2d4f5?w=400",
    date: "2024-01-15",
    category: "Events",
  },
  {
    id: 2,
    type: "photo",
    title: "KP Workshop",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400",
    date: "2024-02-20",
    category: "Workshops",
  },
  {
    id: 3,
    type: "video",
    title: "Introduction to Astrology",
    thumbnail:
      "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?w=400",
    videoUrl: "/videos/intro.mp4",
    date: "2024-03-10",
    category: "Tutorials",
  },
  {
    id: 4,
    type: "youtube",
    title: "Understanding Birth Charts",
    youtubeId: "dQw4w9WgXcQ",
    thumbnail:
      "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=400",
    date: "2024-03-15",
    category: "Tutorials",
  },
  {
    id: 5,
    type: "article",
    title: "The Power of Krishnamurti Paddhati",
    excerpt: "Discover the precision and accuracy of KP astrology system...",
    image: "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?w=400",
    date: "2024-04-01",
    category: "Articles",
    readTime: "5 min read",
  },
  {
    id: 6,
    type: "photo",
    title: "Student Achievement Ceremony",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400",
    date: "2024-04-10",
    category: "Events",
  },
  {
    id: 7,
    type: "youtube",
    title: "Planetary Transits Explained",
    youtubeId: "dQw4w9WgXcQ",
    thumbnail:
      "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=400",
    date: "2024-04-15",
    category: "Tutorials",
  },
  {
    id: 8,
    type: "article",
    title: "Timing Events with KP System",
    excerpt: "Learn how to predict event timing with remarkable accuracy...",
    image: "https://images.unsplash.com/photo-1495364141860-b0d03eccd065?w=400",
    date: "2024-04-20",
    category: "Articles",
    readTime: "8 min read",
  },
];

const categories = ["All", "Events", "Workshops", "Tutorials", "Articles"];

export default function GalleryPage() {
  const [selectedType, setSelectedType] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredItems = galleryItems.filter((item) => {
    const typeMatch = selectedType === "all" || item.type === selectedType;
    const categoryMatch =
      selectedCategory === "All" || item.category === selectedCategory;
    return typeMatch && categoryMatch;
  });

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#280116" }}>
      {/* Header */}
      <Header />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="bg-secondary rounded-2xl p-6 border border-amber-300/30 shadow-lg shadow-amber-300/20 sticky top-4">
              <h2 className="font-amaranath text-amber-200 text-2xl mb-6">
                Filters
              </h2>

              {/* Type Filter */}
              <div className="mb-8">
                <h3 className="font-amaranath text-orange-400 text-lg mb-4">
                  Content Type
                </h3>
                <div className="space-y-3">
                  {[
                    { id: "all", label: "All Content", icon: "🌟" },
                    { id: "photo", label: "Photos", icon: "📷" },
                    { id: "video", label: "Videos", icon: "🎥" },
                    { id: "youtube", label: "YouTube", icon: "▶️" },
                    { id: "article", label: "Articles", icon: "📝" },
                  ].map((type) => (
                    <button
                      key={type.id}
                      onClick={() => setSelectedType(type.id)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                        selectedType === type.id
                          ? "bg-orange-500 text-white shadow-lg"
                          : "text-amber-200 hover:opacity-80"
                      }`}
                      style={
                        selectedType !== type.id
                          ? { backgroundColor: "rgba(40, 1, 22, 0.5)" }
                          : {}
                      }
                    >
                      <span className="mr-2">{type.icon}</span>
                      <span className="font-amaranath">{type.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Category Filter */}
              <div>
                <h3 className="font-amaranath text-orange-400 text-lg mb-4">
                  Category
                </h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-all font-amaranath ${
                        selectedCategory === category
                          ? "bg-ctabtn text-white"
                          : "text-amber-200 hover:bg-primary/50"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Results Count */}
              <div className="mt-6 pt-6 border-t border-amber-300/30">
                <p className="font-amaranath text-amber-200 text-center">
                  {filteredItems.length}{" "}
                  {filteredItems.length === 1 ? "item" : "items"} found
                </p>
              </div>
            </div>
          </aside>

          {/* Main Content Grid */}
          <main className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
                <GalleryCard
                  key={item.id}
                  item={item}
                  onClick={() => setSelectedItem(item as any)}
                />
              ))}
            </div>

            {filteredItems.length === 0 && (
              <div className="text-center py-16">
                <p className="font-amaranath text-amber-200 text-2xl mb-2">
                  No items found
                </p>
                <p className="text-amber-200/70">Try adjusting your filters</p>
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Modal */}
      {selectedItem && (
        <Modal item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </div>
  );
}

function GalleryCard({ item, onClick }: { item: any; onClick: () => void }) {
  const getTypeIcon = () => {
    switch (item.type) {
      case "photo":
        return "📷";
      case "video":
        return "🎥";
      case "youtube":
        return "▶️";
      case "article":
        return "📝";
      default:
        return "🌟";
    }
  };

  const getImage = () => {
    if (item.type === "photo") return item.image;
    if (item.type === "video") return item.thumbnail;
    if (item.type === "youtube") return item.thumbnail;
    if (item.type === "article") return item.image;
    return item.image;
  };

  return (
    <div
      onClick={onClick}
      className="bg-secondary rounded-xl overflow-hidden border border-amber-300/30 shadow-lg hover:shadow-amber-300/40 transition-all cursor-pointer hover:scale-105 group"
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={getImage()}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div
          className="absolute top-2 right-2 px-3 py-1 rounded-full"
          style={{ backgroundColor: "rgba(40, 1, 22, 0.9)" }}
        >
          <span className="text-xl">{getTypeIcon()}</span>
        </div>
        {item.type === "youtube" && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition-colors">
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
              <span className="text-3xl text-white ml-1">▶</span>
            </div>
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="font-amaranath text-amber-200 text-lg mb-2 line-clamp-2">
          {item.title}
        </h3>
        {item.excerpt && (
          <p className="text-amber-200/70 text-sm mb-2 line-clamp-2">
            {item.excerpt}
          </p>
        )}
        <div className="flex items-center justify-between text-xs text-amber-200/60">
          <span
            className="px-2 py-1 rounded"
            style={{ backgroundColor: "rgba(40, 1, 22, 0.5)" }}
          >
            {item.category}
          </span>
          <span>{new Date(item.date).toLocaleDateString()}</span>
        </div>
        {item.readTime && (
          <div className="mt-2 text-xs text-orange-400">⏱️ {item.readTime}</div>
        )}
      </div>
    </div>
  );
}

function Modal({ item, onClose }: { item: any; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-secondary rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border-2 border-amber-300/30"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h2 className="font-amaranath text-amber-200 text-3xl flex-1 pr-4">
              {item.title}
            </h2>
            <button
              onClick={onClose}
              className="text-amber-200 hover:text-orange-400 text-3xl leading-none"
            >
              ×
            </button>
          </div>

          {item.type === "photo" && (
            <img
              src={item.image}
              alt={item.title}
              className="w-full rounded-lg mb-4"
            />
          )}

          {item.type === "video" && (
            <video
              src={item.videoUrl}
              controls
              className="w-full rounded-lg mb-4"
            />
          )}

          {item.type === "youtube" && (
            <div className="aspect-video mb-4">
              <iframe
                src={`https://www.youtube.com/embed/${item.youtubeId}`}
                className="w-full h-full rounded-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}

          {item.type === "article" && (
            <>
              <img
                src={item.image}
                alt={item.title}
                className="w-full rounded-lg mb-4"
              />
              <div className="prose prose-invert max-w-none">
                <p className="text-amber-200/90 text-lg leading-relaxed mb-4">
                  {item.excerpt}
                </p>
                <p className="text-amber-200/80 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </>
          )}

          <div className="flex items-center gap-4 mt-6 pt-4 border-t border-amber-300/30">
            <span
              className="px-3 py-1 rounded-full text-amber-200 text-sm"
              style={{ backgroundColor: "#280116" }}
            >
              {item.category}
            </span>
            <span className="text-amber-200/60 text-sm">
              {new Date(item.date).toLocaleDateString()}
            </span>
            {item.readTime && (
              <span className="text-orange-400 text-sm">
                ⏱️ {item.readTime}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
