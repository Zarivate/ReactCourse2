import { useRef } from "react";

import classes from "./NewMeetupForm.module.css";
import Card from "../ui/Card";

function NewMeetupForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    // Now that we prevented the event, we have to find ways to read entered values, there are two ways of handling it. The first would be to use
    // something like useState again where we add an "onChange" event listener to every input, that would trigger a function on every keystroke, which
    // we can then extract that value from the event object, and then update our state with the entered value
    // Here though we only interested in user input once when form is submitted so we use concept of Ref/set up references to dom elements, that's what the
    // useRef thing is for

    // A JS object representing an input element has a value property, that holds the currently entered value of input
    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };

    // Play close attention to this, it's how we pass the data from this file to the other one
    props.onAddMeetup(meetupData);
  }

  return (
    <Card>
      {/* The oneSubmit is to listen to the submission and prevent a HTTP request that would cause the page to reload, instead to handle it with JS
      the default behavior of browser would be it would send a request to the server, serving it automatically, we may still want to send an HTTP 
      request but we wanna do it behind the scenes without reloading page*/}
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          {/* You connect the label with the input by adding the "for" attribute */}
          <label htmlFor="title">Meetup Title</label>
          {/* ref here is how we connect the input with the created object above */}
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" ref={addressInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            required
            row="5"
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
