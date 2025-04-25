"use client";

import { useState, useEffect } from "react";
import Avatar from "@/components/Avatar";
import ThoughtBubble from "@/components/ThoughtBubble";

const avatar = {
  id: 1,
  imageUrl: "/avatars/avatar1.png",
  thoughts: [
    "Today it was hard to get up.",
    "When I smile, no one notices I am tired.",
  ],
};

const thoughtPositions = [
  { top: "-80px", left: "0px" },
  { top: "0px", left: "200px" },
];

export default function Home() {
  const [isSelected, setIsSelected] = useState(false);
  const [startPosition, setStartPosition] = useState(-100);

  useEffect(() => {
    if (!isSelected) {
      const interval = setInterval(() => {
        setStartPosition(-100 - Math.random() * 50); // Random start between -100vh and -150vh
      }, 12000); // Sync with animation duration
      return () => clearInterval(interval);
    }
  }, [isSelected]);

  return (
    <main className="h-screen w-screen overflow-hidden bg-transparent flex items-center justify-center">
      <div
        className="overflow-visible bg-transparent flex items-center justify-center"
        style={{
          transform: "rotate(-90deg)",
          transformOrigin: "center center",
          right: "13vw",
          position: "absolute",
          backgroundColor: "transparent",
          ...(isSelected
            ? {}
            : {
                bottom: `${startPosition}vh`,
                transition: "none",
                animation: "floatUpwards 12s linear infinite",
              }),
        }}
      >
        {!isSelected ? (
          <div className="bg-transparent">
            <div className="transform hover:scale-105 transition-transform bg-transparent">
              <Avatar
                id={avatar.id}
                imageUrl={avatar.imageUrl}
                isSelected={false}
                onClick={() => setIsSelected(true)}
              />
            </div>
          </div>
        ) : (
          <div className="relative bg-transparent">
            <div className="absolute left-0 top-0 z-10">
              <button
                onClick={() => setIsSelected(false)}
                className="px-4 py-2 text-sm bg-white/80 rounded-lg shadow-md hover:bg-white transition-colors"
              >
                ← Back
              </button>
            </div>
            <div className="relative bg-transparent">
              <div className="relative bg-transparent">
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
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
