import { useSelector } from 'react-redux';
import { filteredContacts } from '../../redux/contacts/slice';
import css from './ContactsList.module.css';
import Contact from '../Contact/Contact';

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
