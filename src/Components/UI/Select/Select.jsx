////////////////////////////////////////////////////////////////////////////////
// Ունիվերսալ select- Կոմպոնենտ ամբողջ ծրագրի համար իր ՛css՛-ով
// ստանում է դինամիկ արժեքներ "props"-ով
////////////////////////////////////////////////////////////////////////////////

import React from 'react';
import classes from './Select.module.css';

export default function Select(props) {
  const htmlFor = `${props.label}-${Math.random()}`;

  return (
    <div className={classes.main}>
      <label htmlFor={htmlFor}>{props.label}</label>
      <select id={htmlFor} value={props.value} onChange={props.onChange}>
        {props.options.map((option, index) => {
          return (
            <option key={option.value + index} value={option.value}>
              {option.text}
            </option>
          );
        })}
      </select>
    </div>
  );
}
