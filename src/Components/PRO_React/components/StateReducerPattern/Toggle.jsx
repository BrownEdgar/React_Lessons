///////////////////////////////////////////////
// State Reducer Pattern (Վիճակի Կրճատիչ Շաբլոն)
//
// Կոմպոնենտը կենտրոնական reducer-ի փոխարեն թույլ տալիս
// consumer-ին փոխանցել իր սեփական reducer-ը։
//
// Սա թույլ տալիս է parent-ին վերահսկել
// component-ի state transition-ները առանց wrapping այն-ը:
//
// Առավելություն: Extreme flexibility, inversion of control
///////////////////////////////////////////////

import { useReducer } from 'react';

const initialState = { on: false, count: 0 };

const defaultReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE':
      return { ...state, on: !state.on, count: state.count + 1 };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
};

export const Toggle = ({
  stateReducer = defaultReducer,
  initialState: customInitialState = initialState,
}) => {
  const [state, dispatch] = useReducer(stateReducer, customInitialState);

  const handleToggle = () => {
    dispatch({ type: 'TOGGLE' });
  };

  const handleReset = () => {
    dispatch({ type: 'RESET' });
  };

  return (
    <div className='toggle-container'>
      <div className='toggle-display'>
        <p className='toggle-status'>
          Status:{' '}
          <span className={state.on ? 'on' : 'off'}>
            {state.on ? 'ON' : 'OFF'}
          </span>
        </p>
        <p className='toggle-count'>Toggles: {state.count}</p>
      </div>
      <button
        className={`toggle-switch ${state.on ? 'active' : ''}`}
        onClick={handleToggle}
      >
        {state.on ? '✓ Enabled' : '✗ Disabled'}
      </button>
      <button className='toggle-reset' onClick={handleReset}>
        Reset
      </button>
    </div>
  );
};

export default Toggle;
