import { FC } from "react";

interface ThoughtBubbleProps {
  text: string;
  position: {
    top: string;
    left: string;
  };
}

const ThoughtBubble: FC<ThoughtBubbleProps> = ({ text, position }) => {
  return (
    <div
      className="absolute animate-float bg-white/90 dark:bg-gray-800/90 p-4 rounded-2xl shadow-lg max-w-[200px]"
      style={{
        top: position.top,
        left: position.left,
      }}
    >
      <p className="text-gray-700 dark:text-gray-200 text-sm font-light italic">
        {text}
      </p>
    </div>
  );
};

export default ThoughtBubble;
