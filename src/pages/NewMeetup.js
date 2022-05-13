import { useNavigate } from 'react-router-dom';

import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
// All this does is use the built in React hook to give us a history object that exposes certain methods to manipulate
// browser history, something like to navigate away for example
const history = useNavigate();

  function addMeetupHandler(meetupData) {
    // To send an HTTP request we can use the default JS function fetch(); You are also required to add ".json" to end cause of firebase requirement
    // To signal that we wanna store data on the firebase servers, we have to send a POST request, by default however fetch() sends a GET request
    // Depends on API you work with but most built so storing Data requires POST requests
    fetch(
      "https://react-example-1ae6b-default-rtdb.firebaseio.com/meetups.json",
      {
        // When you send a POST request you should also add the data you wanna store to the request, which is done through the body field
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers: {
          // Some APIs may require this, here it is just extra metadata to make it clear that it carries JSON data
          'Content-Type': 'application/json'
        }
      }
      // This executes when prompt is completed
    ).then(() => {
      // What we pass to replace is the same as what we pass to Link to the to prop in MainNavigation.js
      history('/');
    });
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      {/* Here we wanna ouput our new meetup form that we'll create and store in a separate file to keep this page lean */}
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
