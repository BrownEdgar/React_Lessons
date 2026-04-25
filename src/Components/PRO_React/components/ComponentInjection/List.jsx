///////////////////////////////////////////////
// Component Injection Pattern (Կոմպոնենտ Ներածման Շաբլոն)
//
// Component-ը ընդունում է render function կամ component
// որ կարող է ընտրել ինչպես render-ել իր data-ն:
//
// Մեկ logic, բազմաթիվ views: list, cards, table, etc.
// Parent-ը վերահսկում է ամբողջ rendering logic-ը
//
// Առավելություն: Maximum flexibility, reusability, no wrapper hell
///////////////////////////////////////////////

export const List = ({ items, renderItem }) => {
  return (
    <ul className="injected-list">
      {items.map((item, idx) => (
        <li key={item.id || idx}>
          {renderItem ? renderItem(item) : item.name || String(item)}
        </li>
      ))}
    </ul>
  );
};

export const CardList = ({ items, renderCard }) => {
  return (
    <div className="card-list">
      {items.map((item, idx) => (
        <div key={item.id || idx} className="card-item">
          {renderCard(item)}
        </div>
      ))}
    </div>
  );
};

export default List;
