// Prop drilling

import Modal from '@/PRO_React/components/PortalPattern/Modal';
import { useState, createContext } from 'react';
import { createPortal } from "react-dom";
import { Button } from './Button';


export const MyContext = createContext(null);

const option = [
  { id: 1, name: 'Option 1' },
  { id: 2, name: 'Option 2' },
  { id: 3, name: 'Option 3' },
]

function App() {

  return (
    <div>
      <Button>
        {option.map((item) => (
          <Button.Btn key={item.id} id={item.id}>
            {item.name}
          </Button.Btn>
        ))}

      </Button>

    </div>
  );
}

export default App;
