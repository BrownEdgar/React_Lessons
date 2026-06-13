// ❌ ПЛОХО: один компонент несёт сразу несколько обязанностей —
// загрузка данных, управление фильтром и отображение товаров.
// Любое изменение любой из этих задач затрагивает весь компонент.
import React, { useState, useEffect, useMemo } from 'react';
import { Rating } from 'react-simple-star-rating';

import './App.scss';

export function App() {
  const [products, setProducts] = useState([]);
  const [filterRate, setFilterRate] = useState(1);

  // Обязанность 1: загрузка данных с API прямо внутри компонента
  const fetchData = () => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => setProducts(json));
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Обязанность 2: логика фильтрации также живёт здесь же
  const filteredProducts = useMemo(
    () => products.filter((product) => product.rating.rate > filterRate),
    [products, filterRate]
  );

  // Обязанность 3: управление состоянием фильтра
  const handleRating = (rate) => {
    setFilterRate(rate);
  };
  return (
    <div>
      <h1 className="Title">
        <span>S</span>ingle Responsibility — ❌ BAD
      </h1>

      {/* ───── Что такое принцип ───── */}
      <div className="srp-panel srp-panel--info">
        <h2>📖 Single Responsibility Principle (SRP)</h2>
        <p>
          <strong>Каждый компонент должен иметь одну и только одну причину для изменения.</strong>{' '}
          Если ты описываешь компонент словом «И» — это сигнал нарушения: «он загружает данные{' '}
          <em>И</em> фильтрует их <em>И</em> рендерит карточки».
        </p>
        <p>
          Представь: ты меняешь внешний вид карточки товара — и случайно ломаешь логику фильтрации,
          потому что всё находится в одном месте. Вот цена нарушения SRP.
        </p>
      </div>

      {/* ───── Что конкретно плохо ───── */}
      <div className="srp-panel srp-panel--bad">
        <h3>❌ В этом компоненте 4 разные обязанности:</h3>
        <ul>
          <li>
            <strong>Загрузка данных</strong> —{' '}
            <code>fetch('https://fakestoreapi.com/products')</code> прямо внутри компонента
          </li>
          <li>
            <strong>Бизнес-логика</strong> —{' '}
            <code>products.filter(p =&gt; p.rating.rate &gt; filterRate)</code> здесь же
          </li>
          <li>
            <strong>Управление UI-состоянием</strong> — <code>filterRate</code> и{' '}
            <code>handleRating</code> в том же файле
          </li>
          <li>
            <strong>Отображение</strong> — вся разметка карточки товара жёстко зашита внутри
          </li>
        </ul>
        <p className="srp-panel-note">
          ⚠️ Чтобы переиспользовать карточку товара на другой странице — придётся копипастить. Чтобы
          сменить API — придётся идти в UI-компонент. Это признак нарушения SRP.
        </p>
      </div>

      <div className="rating">
        <Rating initialValue={filterRate} SVGclassName="inline-block" onClick={handleRating} />
      </div>
      <div className="container">
        {filteredProducts.length > 0 ? (
          <>
            {filteredProducts.map((product) => {
              return (
                <div className="container__item" key={product.id}>
                  <div className="container__image">
                    <img src={product.image} alt="#" />
                  </div>
                  <div className="container__text">
                    <h3 className="container__title">{product.title}</h3>
                    <p className="container__info container__info-price">
                      price: <span>${product.price}</span>
                    </p>
                    <div className="container__info container__info-rating">
                      {Array(parseInt(product.rating.rate))
                        .fill('')
                        .map((_, idx) => (
                          <svg
                            aria-hidden="true"
                            className="w-5 h-5 text-yellow-300"
                            fill="#f1c40f"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>First star</title>
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </svg>
                        ))}
                      <span className="rate">{parseInt(product.rating.rate)}</span>
                    </div>
                    <button className="container__btn">Add to cart</button>
                  </div>
                </div>
              );
            })}
          </>
        ) : (
          <h1 className="Title">no match product</h1>
        )}
      </div>
    </div>
  );
}
