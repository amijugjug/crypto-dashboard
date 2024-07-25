import { useState, useEffect } from "react";
import { FAVORITES } from "@/constants";
import {
  getLocalStorageItem,
  setLocalStorageItem,
} from "@/helpers/localStorage.helper";

const FavoriteButton = ({ id }: { id: string }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = getLocalStorageItem(FAVORITES) || [];
    setIsFavorite(favorites.includes(id));
  }, [id]);

  const toggleFavorite = () => {
    const favorites = getLocalStorageItem(FAVORITES) || [];
    if (favorites.includes(id)) {
      const newFavorites = favorites.filter((favId: string) => favId !== id);
      setLocalStorageItem(FAVORITES, newFavorites);
      setIsFavorite(false);
    } else {
      favorites.push(id);
      setLocalStorageItem(FAVORITES, favorites);
      setIsFavorite(true);
    }
  };

  return (
    <button
      onClick={toggleFavorite}
      className={`px-2 py-1 rounded ${
        isFavorite ? "bg-red-500 text-white" : "bg-gray-200 text-black"
      }`}
    >
      {isFavorite ? "Unfavorite" : "Favorite"}
    </button>
  );
};

export default FavoriteButton;
