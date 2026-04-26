import { Card } from './Card';
import './Card.css';
import Title from '../../ui/Title';
import { Divider } from '../../ui/Divider';
import { cardsConfig } from '@/PRO_React/constants';

export default function App() {
  return (
    <div className='slots-app'>
      <Title>
        <span>&lt;Slots&gt;</span> Pattern
      </Title>
      <p className='description'>
        Կառուցեք ճկուն եւ վերօգտագործվող component-ներ slot-ների միջոցով:
      </p>
      <Divider />

      <div className='cards-grid'>
        {cardsConfig.map(({ id, className, headerTitle, bodyContent, footerContent }) => (
          <Card
            key={id}
            className={className}
            header={headerTitle && <h3>{headerTitle}</h3>}
            body={<p>{bodyContent}</p>}
            footer={footerContent && <p>{footerContent}</p>}
          />
        ))}
      </div>

      <div className='resource'>
        <p>
          📚{' '}
          <a
            href='https://www.patterns.dev/react/slots-pattern'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn more about Slots Pattern
          </a>
        </p>
      </div>
    </div>
  );
}
