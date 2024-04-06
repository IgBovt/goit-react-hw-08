import { useSelector } from 'react-redux';
import css from './ContactsList.module.css';
import Contact from '../Contact/Contact';
import { filteredContacts } from '../../redux/contacts/slice';

export default function ContactList() {
  const contacts = useSelector(filteredContacts);

  return contacts.length === 0 ? (
    <p className={css.text}>We haven`t found any contacts</p>
  ) : (
    <ul className={css.list}>
      {contacts.map(({ name, number, id }) => (
        <li key={id}>
          <Contact name={name} number={number} id={id} />
        </li>
      ))}
    </ul>
  );
}
