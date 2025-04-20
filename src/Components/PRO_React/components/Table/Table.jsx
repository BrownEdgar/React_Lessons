import './Table.css';

export default function Table({ data, renderHeader, renderRow }) {
  return (
    <div className='Table__wrapper'>
      <table>
        <thead className='table__header'>
          <tr>{renderHeader(data.fields)}</tr>
        </thead>
        <tbody className='table__body'>
          {data.data.map((elem) => (
            <tr key={elem.id}>{renderRow(elem)}</tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
