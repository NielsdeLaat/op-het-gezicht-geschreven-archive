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
      <div className="w-32 h-32 md:w-40 md:h-40 relative rounded-full overflow-hidden">
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
