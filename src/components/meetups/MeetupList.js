import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";

function MeetupList(props) {
  return (
    <ul className={classes.list}>
      {/* What's happening here is, first off the "meetups" can be called whatever you want, here map
      every meetup into another object/JSX element, we are transforming every meetup into a MeetupItem
      now we render one Meetup item per object in the meetup array*/}
      {props.meetups.map((meetup) => (
        <MeetupItem 
        key={meetup.id} 
        id={meetup.id} 
        image={meetup.image} 
        title={meetup.title} 
        address={meetup.address}
        description={meetup.description}
        />
      ))}
    </ul>
  );
}

export default MeetupList;
