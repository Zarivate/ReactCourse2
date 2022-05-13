import classes from "./Layout.module.css";
import MainNavigation from "./MainNavigation";

// This is just so we have more whitespace around the content of our app
function Layout(props) {
  return (
    <div>
      <MainNavigation />
      {/* The props.children stuff here is what forwards the content between the Layout stuff in App.js to here */}
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
