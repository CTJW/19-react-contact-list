import contactsJSON from "./contacts.json";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function Contact() {
  const [contacts, setContacts] = useState(contactsJSON);
  return (
    <div>
      <ul>
        {contacts.map((contact) => (
          <li>
            <Link to={`detail/${contact.id}`}>person</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
