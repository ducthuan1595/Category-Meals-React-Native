import { createContext, useContext, useState } from "react";

const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

function FavoritesContextProvider({ children }) {
  const [favoritesId, setFavoritesId] = useState([]);

  const addFavorite = (id) => {
    setFavoritesId((state) => [...state, id]);
  };

  const removeFavorite = (id) => {
    setFavoritesId((state) => favoritesId.filter((f) => f !== id));
  };

  const values = {
    ids: favoritesId,
    addFavorite,
    removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={values}>
      {children}
    </FavoritesContext.Provider>
  );
}

export const FavoriteState = () => {
  return useContext(FavoritesContext);
};

export default FavoritesContextProvider;
