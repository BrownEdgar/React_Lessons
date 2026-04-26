import { Notifications } from './Notifications';
import eventBus from './eventBus';
import './Observer.css';
import Title from '../../ui/Title';
import { Divider } from '../../ui/Divider';
import { notifications } from '../../constants';

const ActionButtons = () => {
  const sendNotification = (type, title, message, icon) => {
    eventBus.publish('notification', { type, title, message, icon });
  };

  return (
    <div className='action-buttons'>
      {notifications.map((notif) => (
        <button
          key={notif.type}
          className={`btn btn-${notif.type}`}
          onClick={() =>
            sendNotification(notif.type, notif.title, notif.message, notif.icon)
          }
        >
          {notif.buttonText}
        </button>
      ))}
    </div>
  );
};

export default function App() {
  return (
    <div className='observer-app'>
      <Title>
        <span>&lt;Observer/Event Bus&gt;</span> Pattern
      </Title>
      <p className='description'>
        Pub/Sub կամ Event Bus - Component-ներ խոսում են առանց direct reference
      </p>
      <Divider />

      <Notifications />

      <div className='demo-content'>
        <div className='info-section'>
          <h3>📡 How Event Bus Works</h3>
          <p>
            Սա demonstration ա Observer pattern-ի: Սեղմ կոճակ, կուղարկել event
            publish() միջոցով, Notifications component-ը կստանա:
          </p>
        </div>

        <ActionButtons />

        <div className='resource'>
          <p>
            📚{' '}
            <a
              href='https://www.patterns.dev/react/observer-pattern'
              target='_blank'
              rel='noopener noreferrer'
            >
              Learn more about Observer/Event Bus Pattern
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
