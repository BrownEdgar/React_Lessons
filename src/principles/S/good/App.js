// ✅ ХОРОШО: App отвечает только за одно — оркестрацию.
// Он соединяет хуки и компоненты, но сам не занимается
// ни загрузкой данных, ни фильтрацией, ни отображением.
import { Product } from './product';
import { Filter, filterProducts } from './filter';
import { useProducts } from './hooks/useProducts';
import { useRateFilter } from './hooks/useRateFilter.jsx';
import '../bad/App.scss';

export function App() {
  const { products } = useProducts();
  const { filterRate, handleRating } = useRateFilter();

  return (
    <div>
      <h1 className="Title">
        <span>S</span>ingle Responsibility — ✅ GOOD
      </h1>

      {/* ───── Что такое принцип ───── */}
      <div className="srp-panel srp-panel--info">
        <h2>📖 Single Responsibility Principle (SRP)</h2>
        <p>
          <strong>Каждый модуль — одна обязанность, одна причина меняться.</strong> Здесь каждый
          файл делает ровно одно дело. Смена API-логики не затрагивает UI. Смена UI карточки не
          затрагивает хук загрузки данных.
        </p>
        <p>
          Декомпозиция по обязанностям делает код тестируемым, переиспользуемым и понятным. Каждый
          модуль можно прочитать, понять и изменить изолированно.
        </p>
      </div>

      {/* ───── Что конкретно хорошо ───── */}
      <div className="srp-panel srp-panel--good">
        <h3>✅ Каждый модуль отвечает ровно за одно:</h3>
        <ul>
          <li>
            <code>useProducts</code> — <strong>только загрузка</strong> товаров с API (хук)
          </li>
          <li>
            <code>useRateFilter</code> — <strong>только состояние</strong> фильтра по рейтингу (хук)
          </li>
          <li>
            <code>filterProducts()</code> — <strong>только логика</strong> фильтрации (чистая
            функция)
          </li>
          <li>
            <code>&lt;Filter /&gt;</code> — <strong>только UI</strong> компонента выбора рейтинга
          </li>
          <li>
            <code>&lt;Product /&gt;</code> — <strong>только отображение</strong> одного товара
          </li>
          <li>
            <code>&lt;App /&gt;</code> — <strong>только оркестрация</strong>: соединяет всё вместе
          </li>
        </ul>
        <p className="srp-panel-note">
          💡 Хочешь переиспользовать карточку товара? Просто импортируй{' '}
          <code>&lt;Product /&gt;</code>. Хочешь сменить API? Только <code>useProducts.jsx</code>.
        </p>
      </div>

      {/* ───── Интерактивная демонстрация ───── */}
      <div className="srp-demo-wrapper">
        <Filter filterRate={filterRate} handleRating={handleRating} />
        <div className="container">
          {filterProducts(products, filterRate).length > 0 ? (
            filterProducts(products, filterRate).map((product) => (
              <Product key={product.id} product={product} />
            ))
          ) : (
            <h1 className="Title">Нет товаров с таким рейтингом</h1>
          )}
        </div>
      </div>
    </div>
  );
}
