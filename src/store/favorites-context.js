import { createContext, useState } from "react";

// When you build your own React components, the convention you should follow is start with a capital character for component name
const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteMeetup) => {},
  removeFavorite: (meetupId) => {},
  itemIsFavorite: (meetupId) => {},
});

// This will be a regular React component but will have job of providing this context to any and all components interested in listening to values
// /all components that need values from the context, and will also be responsible for updating context values
export function FavoritesContextProvider(props) {
  // We wrap this provider component below, that we get from the context object above, around props.children. This means we can now wrap our component
  // here below around any other component and those components will be wrapped by context automatically
  // It's done like this because now in this component, we can manage our context data above. Can manage it with state
  // Because it's still a regular React component, when we manage state inside here and change it, this component will execute again, be reevalutated
  // and means if we change the context value above inside here, and we pass that context value to provider, all components listening to our context will be updated and get new data
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoriteHandler(favoriteMeetup) {
    setUserFavorites((prevUserFavorites) => {
      // Because React doesn't process state updates instantly but instead schedules them, we have to do it like this so things are up to date
      // also concat is just a way to add something to the end of the other value. Better way of updating state if it depends on previous version of state
      return prevUserFavorites.concat(favoriteMeetup);
    });
  }

  function removeFavoriteHandler(meetupId) {
    setUserFavorites((prevUserFavorites) => {
      // If the meetup IDs are not equal to meetupID you get as parameter, if it is equal you return false and drop the item where ID is equal
      return prevUserFavorites.filter((meetup) => meetup.id !== meetupId);
    });
  }

  function itemIsFavoriteHandler(meetupId) {
    // Some is another built in method
    return userFavorites.some((meetup) => meetup.id === meetupId);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    // We can also add functions here, a key here that stores a pointer to a handler
    // we don't execute it here we just point at it. This exposes that function defined in the FavoritesContextProvider(props) component
    // to all components in this app that are interested
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
