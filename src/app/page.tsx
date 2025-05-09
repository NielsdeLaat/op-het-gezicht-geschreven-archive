"use client";

import { useState } from "react";
import Avatar from "@/components/Avatar";
import ThoughtBubble from "@/components/ThoughtBubble";

// Sample data - replace with your actual data
const avatars = [
  {
    id: 1,
    imageUrl: "/avatars/avatar1.jpg",
    thoughts: [
      "Today it was hard to get up.",
      "When I smile, no one notices I am tired.",
    ],
  },
  {
    id: 2,
    imageUrl: "/avatars/avatar2.jpg",
    thoughts: [
      "I wonder if they can see through my facade.",
      "Sometimes I feel so alone in a crowd.",
    ],
  },
  {
    id: 3,
    imageUrl: "/avatars/avatar3.jpg",
    thoughts: [
      "I wish I could be more open about my feelings.",
      "Behind my success, there is constant doubt.",
    ],
  },
];

const thoughtPositions = [
  { top: "-80px", left: "0px" },
  { top: "0px", left: "200px" },
  { top: "80px", left: "-40px" },
];

export default function Home() {
  const [selectedAvatar, setSelectedAvatar] = useState<number | null>(null);

  const handleAvatarClick = (id: number) => {
    setSelectedAvatar(selectedAvatar === id ? null : id);
  };

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8 flex items-center justify-center overflow-hidden">
      <div
        className="max-w-6xl w-full h-screen overflow-hidden"
        style={{
          transform: "rotate(-90deg)",
          transformOrigin: "center center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {selectedAvatar === null ? (
          <div className="flex flex-col space-y-12 py-20">
            {avatars.map((avatar) => (
              <div
                key={avatar.id}
                className="transform hover:scale-105 transition-transform"
              >
                <Avatar
                  id={avatar.id}
                  imageUrl={avatar.imageUrl}
                  isSelected={false}
                  onClick={() => handleAvatarClick(avatar.id)}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="relative flex flex-col items-center w-full max-w-2xl mx-auto">
            <div className="absolute -left-8 -top-8">
              <button
                onClick={() => setSelectedAvatar(null)}
                className="px-4 py-2 text-sm bg-white/80 dark:bg-gray-800/80 rounded-lg shadow-md hover:bg-white dark:hover:bg-gray-800 transition-colors"
              >
                ← Back
              </button>
            </div>
            <div className="relative mt-20">
              {avatars
                .filter((avatar) => avatar.id === selectedAvatar)
                .map((avatar) => (
                  <div key={avatar.id} className="relative">
                    <Avatar
                      id={avatar.id}
                      imageUrl={avatar.imageUrl}
                      isSelected={true}
                      onClick={() => {}}
                    />
                    {avatar.thoughts.map((thought, index) => (
                      <ThoughtBubble
                        key={index}
                        text={thought}
                        position={thoughtPositions[index]}
                      />
                    ))}
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
