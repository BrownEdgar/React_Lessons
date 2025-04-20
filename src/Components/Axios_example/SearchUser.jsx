import React from 'react';

export default function SearchUser({ getUser, handleSubmit }) {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <input
              id='text'
              type='text'
              className='validate'
              onChange={(e) => getUser(e)}
            />
            <button type='submit' name='action'>
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
