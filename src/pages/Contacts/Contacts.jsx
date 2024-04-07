import { useDispatch, useSelector } from 'react-redux';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactsList';
import { selectLoading } from '../../redux/contacts/selectors';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contacts/operations';
import { Watch } from 'react-loader-spinner';
import css from './Contacts.module.css';
import SearchBox from '../../components/SearchBox/SearchBox';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <ContactForm />
      <SearchBox />

      {isLoading && (
        <Watch
          visible={true}
          height="32"
          width="32"
          radius="48"
          color="#322fd4"
          ariaLabel="watch-loading"
          wrapperStyle={{}}
          wrapperClass={css.loader}
        />
      )}
      <ContactList />
    </div>
  );
}
