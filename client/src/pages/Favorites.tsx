import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useUpdateUserMutation, useUserProfile } from "../hooks/useUser";
import CardsData from "../components/templates/CardData";

interface Favorite {
  id: string;
  title: string;
  type: string;
  imageUrl: string;
}

function Favorites() {
  const [favorites, setFavorites] = useState<Favorite[]>([]);
  const { data: userData, isLoading } = useUserProfile();
  const { mutate: updateUser } = useUpdateUserMutation();

  useEffect(() => {
    if (isLoading || !userData?.user?.favoriteTemplates) return;

    const filteredFavorites = CardsData.filter((template) =>
      userData.user.favoriteTemplates.includes(template.id)
    );

    setFavorites(filteredFavorites);
  }, [userData, isLoading]);

  const toggleFavorite = (id: string) => {
    if (!userData?.user?._id) {
      console.error("User ID not found");
      return;
    }

    const isFavorite = userData.user.favoriteTemplates.includes(id);
    const updateData = {
      favoriteTemplateId: id,
      action: isFavorite ? "remove" : "add",
    };

    updateUser(
      { updateData, id: userData.user._id },
      {
        onSuccess: () => {
          setFavorites((prevFavorites) =>
            isFavorite
              ? prevFavorites.filter((fav) => fav.id !== id)
              : [
                  ...prevFavorites,
                  CardsData.find((template) => template.id === id)!,
                ]
          );
        },
        onError: (error) =>
          console.error(
            `Failed to ${isFavorite ? "remove" : "add"} favorite:`,
            error
          ),
      }
    );
  };

  return (
    <div className="flex flex-col items-center h-screen w-screen p-4">
      {/* Back button */}
      <div className="w-full flex items-center mb-6 group">
        <Link
          to="/templates"
          className="text-black text-lg flex items-center gap-2"
        >
          <span className="material-icons transition-transform duration-500 group-hover:rotate-[360deg]">
            arrow_back
          </span>
          <p className="relative overflow-hidden">
            <span className="text-base font-bold">To Templates</span>
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
          </p>
        </Link>
      </div>

      {/* Head with favorites counter */}
      <h2 className="text-black text-2xl mb-4 mt-32 self-start ml-40">
        My Favorites ({favorites.length})
      </h2>
      {/* Favorites Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {favorites.length > 0 ? (
          favorites.map((favorite) => (
            <div key={favorite.title} className="p-4 rounded-md relative">
              <img
                src={favorite.imageUrl}
                alt={favorite.title}
                className="w-full min-w-[420px] h-72 object-cover rounded-md mb-4 shadow"
              />
              <div className="relative min-w-96 flex mb-10">
                <h3 className="text-xl font-bold mt-5">{favorite.title}</h3>
                <button
                  onClick={() => toggleFavorite(favorite.id)}
                  className="absolute right-0 border px-6 py-4 overflow-hidden group"
                >
                  <span
                    className="absolute inset-0 bg-gray-100 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"
                    style={{ zIndex: 10 }}
                  ></span>
                  <span
                    className="relative transition-colors duration-300 text-3xl text-black"
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
          ))
        ) : (
          <p className="text-black text-2xl">No favorites yet!</p>
        )}
      </div>
    </div>
  );
}

export default Favorites;
