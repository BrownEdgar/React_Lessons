import { useState } from 'react';
import { SmartInput } from './SmartInput';
import './SmartInput.css';
import Title from '../../ui/Title';
import { Divider } from '../../ui/Divider';

export default function App() {
  const [controlledValue, setControlledValue] = useState('');

  return (
    <div className='controlled-app'>
      <Title>
        <span>&lt;Controlled &amp; Uncontrolled&gt;</span> Pattern
      </Title>
      <p className='description'>Մեկ component — երկու mode</p>
      <Divider />
      <div className='inputs-grid'>
        <div className='input-section'>
          <h2>Uncontrolled Mode</h2>
          <p className='mode-hint'>Component մշակում է իր վիճակը</p>
          <SmartInput placeholder='Type freely...' />
        </div>
        <div className='input-section'>
          <h2>Controlled Mode</h2>
          <p className='mode-hint'>Parent մշակում է վիճակը</p>
          <SmartInput
            value={controlledValue}
            onChange={setControlledValue}
            placeholder='Controlled input...'
          />
          <div className='parent-data'>
            <strong>Parent's value:</strong> {controlledValue || '(empty)'}
          </div>
        </div>
      </div>
      <div className='resource'>
        <p>
          📚{' '}
          <a
            href='https://react.dev/learn/sharing-state-between-components#controlled-and-uncontrolled-components'
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
