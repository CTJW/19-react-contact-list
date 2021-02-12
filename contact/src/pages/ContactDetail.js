import contactsJSON from "./contacts.json";
import { useState } from "react";
export default function ContactDetail(props) {
  const specId = props.match.params.id;
  const [currentUser, setCurrentUser] = useState(
    contactsJSON.find((user) => user.id == specId)
  );
  return (
    <div>
      `${currentUser.name.first} ${currentUser.name.last}`
    </div>
  );
}
