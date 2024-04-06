import { useSelector } from "react-redux";
import { selectVisibleContacts } from "../../redux/contactsSlice";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

function ContactList() {
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <ul className={css.list}>
      {visibleContacts.map((user) => {
        return (
          <li key={user.id}>
            <Contact contact={user} />
          </li>
        );
      })}
    </ul>
  );
}

export default ContactList;
