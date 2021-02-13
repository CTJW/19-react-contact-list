import contactsJSON from "./contacts.json";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useState } from "react";
export default function ContactDetail(props) {
  const specId = props.match.params.id;
  console.log(props);
  const userFound = contactsJSON.find((user) => user.id == specId);
  const [currentUser, setCurrentUser] = useState(userFound);
  // const [currentUser, setCurrentUser] = useState(
  //   contactsJSON.find((user) => user.id == specId)
  // );
  return (
    <div className="userDetails">
      <div className="back">
        <Link to="/">Back</Link>
      </div>
      <h2>
        <img
          src={currentUser.picture.thumbnail}
          height="150px"
          alt="Avatar"
          class="Avatar"
        ></img>
      </h2>
      <div className="list">
        {currentUser.name.first} {currentUser.name.last}
      </div>
      <div className="list">{currentUser.email}</div>
      <div className="list">{currentUser.phone}</div>
      <div className="list">{currentUser.cell}</div>
      <div className="list">{currentUser.location.state}</div>
      <div className="list">{currentUser.location.city}</div>
    </div>
  );
}
