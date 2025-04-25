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
    >
      <div className="w-48 h-48 md:w-64 md:h-64 relative rounded-full overflow-hidden">
        <Image
          src={imageUrl}
          alt={`Avatar ${id}`}
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
};

export default Avatar;
