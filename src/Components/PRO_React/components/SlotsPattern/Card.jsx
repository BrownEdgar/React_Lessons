///////////////////////////////////////////////
// Slots Pattern (Բաժինների Շաբլոն)
//
// Vue.js-ի slot-ից ներիոնված pattern-ը React-ում:
// Component-ը ընդունում է named props որ տալ նմանակել տարբեր մասերը
// (header, body, footer) առանց children prop-ի complex logic-ի
//
// Առավելություն: Flexible layouts, clarity, no prop drilling,
// հեշտ customization-ը առանց wrapper components-ի
///////////////////////////////////////////////

export const Card = ({ header, body, footer, className = '' }) => {
  return (
    <div className={`card ${className}`}>
      {header && <div className="card-header">{header}</div>}
      {body && <div className="card-body">{body}</div>}
      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
};

export default Card;
