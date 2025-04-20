///////////////////////////////////////////////
// 1. Ավելի դինամիկ կոմպոնենտ է դառնում "render" ֆունկցիայի օգնությամբ
//
//
///////////////////////////////////////////////

import './ListRenderer.css';

export default function ListRenderer({ items, render }) {
  return (
    <ul>
      {items.map((item) => {
        return render(item);
      })}
    </ul>
  );
}
