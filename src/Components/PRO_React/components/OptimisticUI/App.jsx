import { LikeButton } from './LikeButton';
import './LikeButton.css';
import Title from '../../ui/Title';
import { Divider } from '../../ui/Divider';

const items = [
  { id: 1, title: '🎨 Beautiful UI Design', initialLikes: 234 },
  { id: 2, title: '⚡ Lightning Fast', initialLikes: 567 },
  { id: 3, title: '🚀 Rocket Launch', initialLikes: 892 },
];

export default function App() {
  return (
    <div className='optimistic-app'>
      <Title>
        <span>&lt;Optimistic&gt;</span> UI Pattern
      </Title>
      <p className='description'>
        UI-ն պատասխանում է անմիջապես օգտագործողի գործողությանը՝ առանց սպասելու
        սերվերի պատասխանի։ Սա ստեղծում է ավելի հարթ և արագ փորձ, բայց պահանջում
        է ճիշտ սխալների կառավարում։
      </p>
      <Divider />
      <div className='items-list'>
        {items.map((item) => (
          <div key={item.id} className='item-card'>
            <h3>{item.title}</h3>
            <LikeButton itemId={item.id} initialLikes={item.initialLikes} />
          </div>
        ))}
      </div>
      <div className='resource'>
        <p>
          📚{' '}
          <a
            href='https://react.dev/reference/react/useOptimistic'
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
