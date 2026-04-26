import { useState } from 'react';
import { Modal } from './Modal';
import './Modal.css';
import Title from '../../ui/Title';
import { Divider } from '../../ui/Divider';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDemo, setSelectedDemo] = useState(null);

  const openModal = (demo) => {
    setSelectedDemo(demo);
    setIsModalOpen(true);
  };

  return (
    <div className='portal-app'>
      <Title>
        <span>&lt;Portal&gt;</span> Pattern
      </Title>
      <p className='description'>
        createPortal() - Render մեջ DOM tree-ից դուս
      </p>
      <Divider />

      <div className='modal-demos'>
        <button
          className='demo-button primary'
          onClick={() => openModal('notification')}
        >
          📢 Show Notification
        </button>
        <button
          className='demo-button success'
          onClick={() => openModal('alert')}
        >
          ✅ Show Alert
        </button>
        <button className='demo-button info' onClick={() => openModal('form')}>
          📝 Show Form
        </button>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title='Portal Modal'
      >
        {selectedDemo === 'notification' && (
          <div>
            <h3>🎉 Notification</h3>
            <p>This modal renders outside the component tree!</p>
          </div>
        )}
        {selectedDemo === 'alert' && (
          <div>
            <h3>⚠️ Alert</h3>
            <p>Portals are useful for modals and dropdowns.</p>
          </div>
        )}
        {selectedDemo === 'form' && (
          <div>
            <h3>📝 Form</h3>
            <p>Form content here</p>
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
