import React, { useState, useEffect } from "react";
import { useUpdateUserMutation, useUserProfile } from "../../hooks/useUser";

interface CardProps {
  title: string;
  type: string;
  imageUrl: string;
  id: string;
}

const Card: React.FC<CardProps> = ({ title, imageUrl, id }) => {
  const [isHeartFilled, setIsHeartFilled] = useState(false);
  const { data: userData, isLoading } = useUserProfile();
  const { mutate: updateUser } = useUpdateUserMutation();

  useEffect(() => {
    if (isLoading || !userData?.user.favoriteTemplates) return;

    const isFavorite = Array.isArray(userData.user.favoriteTemplates)
      ? userData.user.favoriteTemplates.includes(id)
      : false;

    setIsHeartFilled(isFavorite);
  }, [userData, isLoading, id]);

  const toggleHeart = () => {
    if (!userData?.user._id) {
      console.error("User ID not found");
      return;
    }

    const updateData = { favoriteTemplateId: id };

    updateUser(
      { updateData, id: userData.user._id },
      {
        onSuccess: () => setIsHeartFilled(!isHeartFilled),
        onError: (error) =>
          console.error(
            `Failed to ${isHeartFilled ? "remove" : "add"} favorite:`,
            error
          ),
      }
    );
  };

  return (
    <div className="p-4 rounded-md relative">
      <img
        src={imageUrl}
        alt={title}
        className="w-full min-w-96 h-56 object-cover rounded-md mb-4 shadow cursor-pointer"
      />
      <div className="relative min-w-96 flex">
        <h3 className="text-xl font-bold mt-5">{title}</h3>
        <button
          onClick={toggleHeart}
          className="absolute right-0 border px-6 py-4 overflow-hidden group"
        >
          <span
            className="absolute inset-0 bg-gray-100 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"
            style={{ zIndex: 10 }}
          ></span>
          <span
            className={`relative transition-colors duration-300 text-3xl ${
              isHeartFilled ? "text-black" : "text-transparent"
            }`}
            style={{
              WebkitTextStroke: "2px black",
              zIndex: 20,
            }}
          >
            ♥
          </span>
        </button>
      </div>
    </div>
  );
};

export default Card;
