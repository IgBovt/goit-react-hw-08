import { lazy, Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/contacts/operations';
// import { selectError, selectLoading } from '../../redux/contacts/slice';
import Layout from '../Layout/Layout';
import { ToastContainer } from 'react-toastify';

const HomePage = lazy(() => import('../../pages/Home/Home'));
const RegisterPage = lazy(() =>
  import('../../pages/Registration/Registration')
);
const LoginPage = lazy(() => import('../../pages/Login/Login'));
const ContactsPage = lazy(() => import('../../pages/Contacts/Contacts'));
const NotFoundPage = lazy(() => import('../../pages/NotFound/NotFound'));

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
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      <ToastContainer />
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
