import React from 'react';

export default function Input(props) {
  const type = props.type || 'text';
  const htmlFor = `${props.type}-${Math.random()}`;
  return (
    <div>
      <label htmlFor={htmlFor}>{props.label}</label>
      <input
        type={type}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
      />
      {!props.isValid && <p>`Invalid {props.name}`</p>}
    </div>
  );
}
