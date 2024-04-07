import { lazy, Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from '../../redux/auth/operations';
import { selectIsRefreshing } from '../../redux/auth/selectors';
import Layout from '../Layout/Layout';
import PrivateRoute from '../PrivateRoute/PrivateRout';
import RestrictedRoute from '../RestrictedRoute/RestrictedRoute';
import { fetchContacts } from '../../redux/contacts/operations';
import { ToastContainer } from 'react-toastify';
import { Watch } from 'react-loader-spinner';
import 'react-toastify/dist/ReactToastify.css';
import css from './App.module.css';

const HomePage = lazy(() => import('../../pages/Home/Home'));
const RegisterPage = lazy(() =>
  import('../../pages/Registration/Registration')
);
const LoginPage = lazy(() => import('../../pages/Login/Login'));
const ContactsPage = lazy(() => import('../../pages/Contacts/Contacts'));
const NotFoundPage = lazy(() => import('../../pages/NotFound/NotFound'));

export default function App() {
  const isRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
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
  ) : (
    <Layout>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                component={<RegisterPage />}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                component={<LoginPage />}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute component={<ContactsPage />} redirectTo="/login" />
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      <ToastContainer />
    </Layout>
  );
}
