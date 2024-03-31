import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/contactsOps';
import { selectError, selectLoading } from '../../redux/contactsSlice';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import ContactForm from '../ContactForm/ContactForm';
import css from './App.module.css';
import { ToastContainer } from 'react-toastify';
import { errToast } from '../../toasts';
import { Watch } from 'react-loader-spinner';

export default function App() {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
      {loading && (
        <Watch
          visible={true}
          height="32"
          width="32"
          radius="48"
          color="#808080"
          ariaLabel="watch-loading"
          wrapperStyle={{}}
          wrapperClass={css.loader}
        />
      )}

      <ToastContainer />
      {error && errToast()}
    </div>
  );
}
