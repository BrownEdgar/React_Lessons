import { Card } from './Card';
import './Card.css';
import Title from '../../ui/Title';
import { Divider } from '../../ui/Divider';

export default function App() {
  return (
    <div className='slots-app'>
      <Title>
        <span>&lt;Slots&gt;</span> Pattern
      </Title>
      <p className='description'>
        Vue-ի նման named slots, տալ մեջ բաժիններ կոմպոնենտում
      </p>
      <Divider />

      <div className='cards-grid'>
        <Card
          header={
            <div className='slot-header'>
              <h3>💼 Project Management</h3>
            </div>
          }
          body={
            <div className='slot-body'>
              <p>Կառավարեք ձեր նախագծերը հեղուկ եւ պարզ շարակցմամբ:</p>
              <ul>
                <li>Tasks tracking</li>
                <li>Team collaboration</li>
              </ul>
            </div>
          }
          footer={
            <div className='slot-footer'>
              <button className='card-btn'>Get Started →</button>
            </div>
          }
          className='card-premium'
        />
        <Card
          header={
            <div className='slot-header'>
              <h3>🎯 Analytics</h3>
            </div>
          }
          body={
            <div className='slot-body'>
              <p>Իրական ժամանակային վերլուծություն եւ տվյալներ:</p>
            </div>
          }
          className='card-simple'
        />
        <Card
          body={
            <div className='slot-body'>
              <h3>⚡ Performance</h3>
              <p>Արագ, հուսալի, վստահ:</p>
            </div>
          }
          className='card-minimal'
        />
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
