import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const getVisibleContacts = (contacts, nameFilter) => {
  return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(nameFilter.toLowerCase())
  );
};

function ContactList() {
  const contacts = useSelector(selectContacts);
  const nameFilter = useSelector(selectNameFilter);

  const visibleContacts = getVisibleContacts(contacts, nameFilter);

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
