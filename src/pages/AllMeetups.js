import { useState, useEffect } from "react";
// useEffect is a React hook that lets you run some code under certain conditions, we'll use this to avoid
// infinite loading error/constant fetching issue

import MeetupList from "../components/meetups/MeetupList";

// const DUMMY_DATA = [
//   {
//     id: "m1",
//     title: "This is a first meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
//     address: "Meetupstreet 5, 12345 Meetup City",
//     description:
//       "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
//   },
//   {
//     id: "m2",
//     title: "This is a second meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
//     address: "Meetupstreet 5, 12345 Meetup City",
//     description:
//       "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
//   },
// ];

function AllMeetupsPage() {
  // useState always returns an array with exactly two elements, where first element is current state snapshot and second is function for updating state
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  // Wants two arguments, first being a function while the second is an array of dependencies
  useEffect(() => {
    setIsLoading(true);
    // This is how we get the data from the firebase database to appear on screen, we send an HTTP request
    // Fetch returns a promise so we can use fetch, we'll get the response object as an argument
    fetch(
      "https://react-example-1ae6b-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((response) => {
        return response.json();
        // The .json here will give us access to the data automatically converted from json to plain javascript object
        // however it will also return a promise so you have to wait for this promise to resolve too, so we add another then bloc
        // where we get the actual data. We wanna extract an array of meetups from response data and pass it as value to to meetups props below instead of DUMMY_DATA
      })
      .then((data) => {
        // We need to turn data from object into an array since the "map" feature we use in MeetupList.js
        // is only applicable to arrays, but database data is a nested object 
        const meetups = [];

        // The keys here are the random string of letters in firebase database/the id
        // Here what is happening is we're accessing the nested object in the firebase database/the data inside the scramble of letters ID
        // then use the spread operator, a default JS operator, to copy all key value pairs of the nested object, into this meetup object
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key]
          };

          meetups.push(meetup); 
        }
        // Start in loading state, then set it to false once you have the data
        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetups</h1>
      {/* This is how you render a list of JSX elements dynamically, from data to JSX elements
      you can actually render an array of JSX elements by doing {[<li>Item1</li>,[<li>Item2</li>, etc ]} 
      you typically render lists of data by mapping it*/}
      {/* <ul>
        {DUMMY_DATA.map((meetup) => {
          // What we're saying here is for every meetup object we're getting we wanna return a list item. there is also a key
          // because every child in a list should have a unique "key" prop, because React needs it to update things efficiently 
          return <li key={meetup.id}>{meetup.title}</li>;
        })}
      </ul> */}
      {/* We use "meetups" here cause it's the name of what we gave in the MeetupList.js file and we pass in the dummy data */}
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}

export default AllMeetupsPage;
