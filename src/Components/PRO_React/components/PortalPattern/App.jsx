import { useState } from 'react';
import { Modal } from './Modal';
import './Modal.css';
import Title from '../../ui/Title';
import { Divider } from '../../ui/Divider';
import { demoModals } from '../../constants';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDemo, setSelectedDemo] = useState(null);

  const openModal = (demo) => {
    setSelectedDemo(demo);
    setIsModalOpen(true);
  };

  const currentModal = demoModals.find((m) => m.id === selectedDemo);

  return (
    <div className='portal-app'>
      <Title>
        <span>&lt;Portal&gt;</span> Pattern
      </Title>
      <p className='description'>
        createPortal() - Render մեջ DOM tree-ից դուս
      </p>
      <div className='modal-demos'>
        {demoModals.map((demo) => (
          <button
            key={demo.id}
            className={`demo-button ${demo.buttonClass}`}
            onClick={() => openModal(demo.id)}
          >
            {demo.buttonText}
          </button>
        ))}
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title='Portal Modal'
      >
        {currentModal && (
          <div>
            <h3>{currentModal.title}</h3>
            <p>{currentModal.content}</p>
          </div>
        )}
      </Modal>

      <div className='resource'>
        <p>
          📚{' '}
          <a
            href='https://react.dev/reference/react-dom/createPortal'
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
