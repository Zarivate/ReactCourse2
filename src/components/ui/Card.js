import classes from './Card.module.css';

// The special thing about this component is that this is now the first custom component that we can wrap around JSX content
// goal is to use this component such that a meetup item inside of the list item in MeetupItem.js and that content
function Card(props) {
  return <div className={classes.card}>
      {/* The children prop is a special prop that every component receives by default, and children holds the content passed between the opening and closing tags/<></> */}
      {props.children}</div>
}

export default Card;