import { List, CardList } from './List';
import './List.css';
import Title from '../../ui/Title';
import { Divider } from '../../ui/Divider';

const items = [
  { id: 1, name: 'React', desc: 'A JavaScript library' },
  { id: 2, name: 'Vue', desc: 'Progressive framework' },
  { id: 3, name: 'Angular', desc: 'Full-featured' },
];

export default function App() {
  return (
    <div className='injection-app'>
      <Title>
        <span>&lt;Component Injection&gt;</span> Pattern
      </Title>
      <p className='description'>
        Pass components կամ render functions տարբեր գեներացիաների համար
      </p>
      <Divider />

      <div className='injection-demo'>
        <div className='demo-section'>
          <h2>1. Simple List</h2>
          <List items={items} />
        </div>

        <div className='demo-section'>
          <h2>2. List with Custom Render</h2>
          <List
            items={items}
            renderItem={(item) => (
              <div className='custom-item'>
                <strong>{item.name}</strong>
                <span>{item.desc}</span>
              </div>
            )}
          />
        </div>

        <div className='demo-section'>
          <h2>3. Card Grid</h2>
          <CardList
            items={items}
            renderCard={(item) => (
              <div className='card-content'>
                <h3>{item.name}</h3>
                <p>{item.desc}</p>
                <button className='card-action'>Learn More →</button>
              </div>
            )}
          />
        </div>
      </div>

      <div className='resource'>
        <p>
          📚{' '}
          <a
            href='https://reactpatterns.js.org/docs/component-injection/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn more
          </a>
        </p>
      </div>
    </div>
  );
}
