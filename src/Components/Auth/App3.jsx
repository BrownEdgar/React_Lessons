import { useState } from 'react';

import * as yup from 'yup';

import { Formik, Form, Field, ErrorMessage } from 'formik';

const API_KEY = 'AIzaSyBUkiOBxzcaJUMZQg4X0aORhRpr1Ha99jQ';

export default function App() {
  const [state, setstate] = useState({});

  const onSubmit = (values) => {
    registerHandler(values);
    setstate(values);
  };
  const initialValues = {
    email: 'nikogosjanedgar@gmail.com',
    password: '',
  };
  const validationSchema = yup.object({
    email: yup.string().email().required('Required'),
    password: yup.string().required('Required'),
  });

  function registerHandler(values) {
    const data = { ...values, returnSecureToken: true };

    fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
      {
        method: 'POST',
        body: JSON.stringify(data),
      }
    )
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  }
  function loginHandler() {
    const data = { ...state, returnSecureToken: true };
    fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`,
      {
        method: 'POST',
        body: JSON.stringify(data),
      }
    )
      .then((res) => res.json())
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  }
  return (
    <div className='container'>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => {
          return (
            <Form>
              <div className='form-group'>
                <label htmlFor='email'>Name</label>
                <Field type='text' id='email' name='email' />
                <ErrorMessage name='email'>
                  {(errMsg) => (
                    <div>
                      <p>{errMsg}</p>
                    </div>
                  )}
                </ErrorMessage>
              </div>
              <div className='form-group'>
                <label htmlFor='password'>password</label>
                <Field type='password' id='password' name='password' />
                <ErrorMessage name='password' component='p' />
              </div>
              <button
                type='button'
                id='login'
                disabled={!formik.isValid}
                onClick={() => {
                  setstate(formik.values);
                  loginHandler();
                }}
              >
                Login
              </button>
              <button type='submit' id='Register' disabled={!formik.isValid}>
                Register
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
