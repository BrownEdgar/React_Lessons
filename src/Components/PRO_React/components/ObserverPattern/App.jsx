import { Notifications } from './Notifications';
import eventBus from './eventBus';
import './Observer.css';
import Title from '../../ui/Title';
import { Divider } from '../../ui/Divider';

const ActionButtons = () => {
  const sendNotification = (type, title, message, icon) => {
    eventBus.publish('notification', { type, title, message, icon });
  };

  return (
    <div className='action-buttons'>
      <button
        className='btn btn-success'
        onClick={() =>
          sendNotification(
            'success',
            '✅ Success',
            'Operation completed!',
            '🎉'
          )
        }
      >
        Send Success
      </button>
      <button
        className='btn btn-error'
        onClick={() =>
          sendNotification('error', '❌ Error', 'Something went wrong!', '⚠️')
        }
      >
        Send Error
      </button>
      <button
        className='btn btn-info'
        onClick={() =>
          sendNotification('info', 'ℹ️ Info', 'Here is some info!', 'ℹ️')
        }
      >
        Send Info
      </button>
      <button
        className='btn btn-warning'
        onClick={() =>
          sendNotification('warning', '⚠️ Warning', 'Be careful!', '⚠️')
        }
      >
        Send Warning
      </button>
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
