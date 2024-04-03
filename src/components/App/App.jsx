import { lazy, Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/contacts/operations';
import { selectError, selectLoading } from '../../redux/contacts/slice';
import Layout from '../Layout/Layout';
import SearchBox from '../SearchBox/SearchBox';
import css from './App.module.css';
import { ToastContainer } from 'react-toastify';
import { errToast } from '../../js/toasts';
import { Watch } from 'react-loader-spinner';

const HomePage = lazy(() => import('../../pages/Home/Home'));
const RegisterPage = lazy(() =>
  import('../../pages/Registration/Registration')
);
const LoginPage = lazy(() => import('../../pages/Login/Login'));
const ContactsPage = lazy(() => import('../../pages/Contacts/Contacts'));

export default function App() {
  // const loading = useSelector(selectLoading);
  // const error = useSelector(selectError);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Layout>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

// <ContactForm />
// <SearchBox />
// <ContactList />
// {loading && (
//   <Watch
//     visible={true}
//     height="32"
//     width="32"
//     radius="48"
//     color="#808080"
//     ariaLabel="watch-loading"
//     wrapperStyle={{}}
//     wrapperClass={css.loader}
//   />
// )}

// <ToastContainer />
// {error && errToast()}
