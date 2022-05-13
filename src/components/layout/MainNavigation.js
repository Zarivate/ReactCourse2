import { useContext } from "react";
import { Link } from "react-router-dom";
// Classes here (name doesn't matter) is a JS object where all the CSS classes
// There all the classes you define in the css file will be properties of this "classes" object that you can attach to
// your elements
import classes from "./MainNavigation.module.css";
import FavoritesContext from "../../store/favorites-context";

function MainNavigation() {
  const favoritesCtx = useContext(FavoritesContext);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          {/* Normally you would use an anchor tag to render links like "<a href="">Some Link</a>"
              but we don't hear cause eveytime you click the link a new request would be sent to the server. Since
              our server here is the one hosting the React app, and would reply with the application and have the router figure out which 
              page to load, but it's redundant since we're already in the running React app*/}
          <li>
            {/* By using a Link here, it will render an anchor tag in the end but will not send a new request 
                  react-router-dom attaches a click listener to the tag and when you click on it prevents browser default 
                  from sending a request and instead just parse the URL you want to go to and change it into the URL bar/load the appropriate component*/}
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">New Meetup</Link>
          </li>
          <li>
            <Link to="/favorites">
              Favorites
              <span className={classes.badge}>
                {favoritesCtx.totalFavorites}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default MainNavigation;
