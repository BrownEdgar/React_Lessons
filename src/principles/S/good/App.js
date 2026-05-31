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
      <div
        style={{
          maxWidth: 780,
          margin: '0 auto 16px',
          padding: '20px 24px',
          background: '#f0f4ff',
          border: '1px solid #c7d7ff',
          borderRadius: 12,
        }}
      >
        <h2 style={{ margin: '0 0 10px', fontSize: 17, color: '#1e3a8a' }}>
          📖 Single Responsibility Principle (SRP)
        </h2>
        <p style={{ margin: '0 0 10px', color: '#334155', lineHeight: 1.7 }}>
          <strong>Каждый модуль — одна обязанность, одна причина меняться.</strong> Здесь каждый
          файл делает ровно одно дело. Смена API-логики не затрагивает UI. Смена UI карточки не
          затрагивает хук загрузки данных.
        </p>
        <p style={{ margin: 0, color: '#334155', lineHeight: 1.7 }}>
          Декомпозиция по обязанностям делает код тестируемым, переиспользуемым и понятным. Каждый
          модуль можно прочитать, понять и изменить изолированно.
        </p>
      </div>

      {/* ───── Что конкретно хорошо ───── */}
      <div
        style={{
          maxWidth: 780,
          margin: '0 auto 24px',
          padding: '20px 24px',
          background: '#f0fdf4',
          border: '1px solid #86efac',
          borderLeft: '5px solid #22c55e',
          borderRadius: 8,
        }}
      >
        <h3 style={{ margin: '0 0 12px', color: '#16a34a', fontSize: 16 }}>
          ✅ Каждый модуль отвечает ровно за одно:
        </h3>
        <ul style={{ margin: 0, paddingLeft: 20, color: '#14532d', lineHeight: 2 }}>
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
        <p style={{ margin: '12px 0 0', color: '#166534', fontSize: 14 }}>
          💡 Хочешь переиспользовать карточку товара? Просто импортируй{' '}
          <code>&lt;Product /&gt;</code>. Хочешь сменить API? Только <code>useProducts.jsx</code>.
        </p>
      </div>

      {/* ───── Интерактивная демонстрация ───── */}
      <div style={{ maxWidth: 780, margin: '0 auto', padding: '0 16px' }}>
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
