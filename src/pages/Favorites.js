import { useContext } from "react";

import FavoritesContext from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";

function FavoritesPage() {
  // From this we can get our favorites array from const context = {} in favorites-context.js
  const favoritesCtx = useContext(FavoritesContext);

  let content;

  if (favoritesCtx.totalFavorites === 0) {
    content = <p>There are no favorites at the moment.</p>
  } else {
    content = <MeetupList meetups={favoritesCtx.favorites} />
  }

  return (
    <section>
      <h1>My Favorites</h1>
       {content}
    </section>
  );
}

export default FavoritesPage;
