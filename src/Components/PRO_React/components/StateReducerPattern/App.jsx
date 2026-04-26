import { Toggle } from './Toggle';
import './Toggle.css';
import Title from '../../ui/Title';
import { Divider } from '../../ui/Divider';

const customReducer = (state, action) => {
  const now = new Date().getHours();
  const isWorkingHours = now >= 9 && now < 17;

  switch (action.type) {
    case 'TOGGLE':
      if (isWorkingHours && state.on) return state;
      return { ...state, on: !state.on, count: state.count + 1 };
    case 'RESET':
      return { on: false, count: 0 };
    default:
      return state;
  }
};

export default function App() {
  return (
    <div className='state-reducer-app'>
      <Title>
        <span>&lt;State Reducer&gt;</span> Pattern
      </Title>
      <p className='description'>
        Developer կա կարողություն վերահսկել component-ի ներքին վարքը
      </p>
      <Divider />

      <div className='toggle-demo'>
        <div className='demo-section'>
          <h2>Default Behavior</h2>
          <Toggle />
        </div>
        <div className='demo-section'>
          <h2>Custom Behavior</h2>
          <p className='hint'>
            Custom reducer blocks toggle OFF during working hours (9 AM - 5 PM)
          </p>
          <Toggle stateReducer={customReducer} />
        </div>
      </div>

      <div className='resource'>
        <p>
          📚{' '}
          <a
            href='https://kentcdodds.com/blog/the-state-reducer-pattern-with-react-hooks'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn more about State Reducer Pattern
          </a>
        </p>
      </div>
    </div>
  );
}
