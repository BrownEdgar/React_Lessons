import React from 'react';

export default function Form(props) {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <input
          type='text'
          name='loginValue'
          placeholder={props.value1}
          onChange={props.func}
        ></input>
        <input
          type='password'
          name='password'
          placeholder={props.value2}
          onChange={props.func2}
        ></input>
        <input type='submit' value='send' />
      </form>
    </div>
  );
}
