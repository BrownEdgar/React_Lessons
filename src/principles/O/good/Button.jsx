import React from 'react';
import './Button.scss';

function Button({ onClick, children, className = '' }) {
  return (
    <button className={`btn ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}

export const PrimaryButton = (props) => <Button {...props} className="btn--primary" />;
export const DangerButton = (props) => <Button {...props} className="btn--danger" />;
export const SuccessButton = (props) => <Button {...props} className="btn--success" />;
export const WarningButton = (props) => <Button {...props} className="btn--warning" />;
export const GhostButton = (props) => <Button {...props} className="btn--ghost" />;

export default Button;
