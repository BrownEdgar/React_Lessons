import { useState, useEffect } from 'react';
import axios from 'axios';
import UserList from './UserList';
import SearchUser from './SearchUser';

export default function App() {
  const [data, setData] = useState([]);

  const handleData = () => {
    axios
      .get('https://jsonplaceholder.typicode.com/users', {
        params: {
          _limit: '5',
        },
      })
      .then((result) => {
        setData(result.data);
      })
      .catch((error) => console.log(error));
  };

  const handleClear = () => {
    setData([]);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('e.target', e.target);
  };
  const handleDelete = (id) => {
    let f = data.filter((elem) => elem.id !== id);
    setData(f);
  };
  const getUser = (e) => {
    // e.persist() old way
    let f = data.filter((elem) => elem.name.includes(e.target.value));
    console.log('e.target.value', e.target.value);
    setData(f);
  };
  return (
    <div>
      <SearchUser handleSubmit={handleSubmit} getUser={getUser} />
      <UserList data={data} handleDelete={handleDelete} />
      <button
        className='btn waves-effect waves-light'
        type='submit'
        name='action'
        onClick={handleData}
      >
        get Data
      </button>
      <button
        className='btn waves-effect waves-light'
        type='submit'
        name='action'
        onClick={handleClear}
      >
        Clear
      </button>
    </div>
  );
}
