import './Title.scss';

function Title({ children, className = '', level = 1 }) {
  const Element = `h${level}`;
  const titleClass = `title title__h${level}`;

  return <Element className={`${titleClass} ${className}`}>{children}</Element>;
}

export default Title;
