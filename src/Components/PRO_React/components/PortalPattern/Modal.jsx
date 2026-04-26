///////////////////////////////////////////////
// Portal Pattern (Դուռ/Դուստ Շաբլոն)
//
// React-ի createPortal() ֆունկցիա թույլ տալիս
// render-ել component-ը DOM hierarchy-ից դուս,
// սովորաբար document.body-ի մեջ:
//
// Գործածական: Modals, dropdowns, tooltips,
// որ պետք է լինեն parent-ի z-index/overflow-ից վեր
//
// Առավելություն: Չկա z-index conflict, overflow: hidden չի թաքցնում
///////////////////////////////////////////////

import { createPortal } from 'react-dom';

export const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;
  return createPortal(
    <div className='modal-overlay' onClick={onClose}>
      <div className='modal-content' onClick={(e) => e.stopPropagation()}>
        <div className='modal-header'>
          <h2>{title}</h2>
          <button className='modal-close' onClick={onClose}>
            ✕
          </button>
        </div>
        <div className='modal-body'>{children}</div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
