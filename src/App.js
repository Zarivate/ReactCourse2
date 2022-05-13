import { Routes, Route } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";
import Layout from "./components/layout/Layout";

function App() {
  //Our domain would be localhost:3000, the path will be the path in the URL after domain
  return (
    // By wrapping Layout around this stuff, the stuff between it is now rendered inside the <main> block inside of Layout.js
    <Layout>
        <Routes>
          <Route path="/" element={<AllMeetupsPage />}/>
            {/* Here is where we put where we want this path to lead to */}
          <Route path="/new-meetup" element={<NewMeetupPage />}/>
          <Route path="/favorites" element={<FavoritesPage />}/>
        </Routes>
    </Layout>
  );
}

export default App;
