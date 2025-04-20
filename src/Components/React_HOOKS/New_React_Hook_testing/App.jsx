//////////////////////////////////////////////////////////
// React Suspense - это компонент React, который приостанавливает отрисовку компонентов до выполнения определенного условия и отображает запасной вариант - fallback. Этот запасной вариант является обязательным, и это может быть строка или другой компонент, например, спиннер. Так же React Suspense работает только с динамическим импортом, он же ленивая загрузка.
// https://teacher.army/blog/kak-rabotaet-react-suspense
//////////////////////////////////////////////////////////
import { Suspense, useState } from 'react';
import Form from './Form';
import FetchData from './FetchData';

import s from './App.module.css';
import Title from '@/Title/Title';

// required!
// const FetchData = React.lazy(() => import('./FetchData'));

export default function App() {
  const [value, setValue] = useState('users');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className={s.App}>
      <Title title='React suspense' lesson={21} />
      <Form handleChange={handleChange} />
      <Suspense fallback={<h2>Loaging....</h2>}>
        <FetchData url={`https://jsonplaceholder.typicode.com/${value}`} />
      </Suspense>
    </div>
  );
}
