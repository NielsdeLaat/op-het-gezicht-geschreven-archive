import Image from "next/image";
import { FC } from "react";

interface AvatarProps {
  id: number;
  imageUrl: string;
  isSelected: boolean;
  onClick: () => void;
}

const Avatar: FC<AvatarProps> = ({ id, imageUrl, isSelected, onClick }) => {
  return (
    <div
      className={`relative cursor-pointer transition-transform duration-300 ${
        isSelected ? "scale-110" : "hover:scale-105"
      }`}
      onClick={onClick}
      style={{ backgroundColor: "transparent" }}
    >
      <div className="relative bg-transparent">
        <Image
          src={imageUrl}
          alt={`Avatar ${id}`}
          width={1000}
          height={400}
          className="bg-transparent"
          priority
          style={{
            backgroundColor: "transparent",
            width: "auto",
            height: "auto",
          }}
        />
      </div>
    </div>
  );
};

export default Avatar;
