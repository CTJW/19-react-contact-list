import contactsJSON from "./contacts.json";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function Contact() {
  const [contacts, setContacts] = useState(contactsJSON);
  return (
    <div className="contacts">
      <div className="peeps">
        <h2>My Peeps</h2>
      </div>
      <ul>
        {contacts.map((contact) => (
          <li>
            <Link to={`/detail/${contact.id}`}>
              <img
                className="photos"
                src={contact.picture.thumbnail}
                height="40"
                width="40"
                alt="Avatar"
                class="avatar"
              ></img>
              {contact.name.first} {contact.name.last}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
