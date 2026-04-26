import { useState } from 'react';
import { Divider } from '../../ui/Divider';

export default function TabSwitcher({ tabIds, getHeader, renderContent }) {
  const [selectedId, setSelectedId] = useState(tabIds[0]);
  return (
    <>
      {tabIds.map((tabId) => (
        <button key={tabId} onClick={() => setSelectedId(tabId)}>
          {getHeader(tabId)}
        </button>
      ))}
      <Divider />
      <div key={selectedId}>
        <h3>{getHeader(selectedId)}</h3>
        {renderContent(selectedId)}
      </div>
    </>
  );
}
