///////////////////////////////////////////////
// Compound Components Pattern (Բաղադրյալ Կոմպոնենտներ)
//
// Մի քանի միատեսակ կոմպոնենտներ (Tabs, Tab, TabPanel) աշխատում են
// միասին` ձևավորում են մեկ ամբողջ ֆունկցիոնալ միավոր։
//
// React Context-ի միջով դրանք կիսում են վիճակ առանց
// prop drilling-ի (props անցում ամբ. ծառի միջով)։
//
// Առավելություն: Տրամաբանական հետևականություն, մաքուր API
///////////////////////////////////////////////

import { createContext, useContext, useState } from 'react';

const TabsContext = createContext();

const useTabsContext = () => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error('Tab components must be used within <Tabs>');
  }
  return context;
};

export const Tabs = ({ children, defaultTab = 0 }) => {
  const [activeTab, setActiveTab] = useState(defaultTab);

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className='tabs-wrapper'>{children}</div>
    </TabsContext.Provider>
  );
};

export const TabsList = ({ children }) => (
  <div className='tabs-list'>{children}</div>
);

export const Tab = ({ id, children }) => {
  const { activeTab, setActiveTab } = useTabsContext();
  const isActive = activeTab === id;

  return (
    <button
      className={`tab-button ${isActive ? 'active' : ''}`}
      onClick={() => setActiveTab(id)}
    >
      {children}
    </button>
  );
};

export const TabPanel = ({ id, children }) => {
  const { activeTab } = useTabsContext();

  if (activeTab !== id) return null;

  return <div className='tab-panel'>{children}</div>;
};

Tabs.List = TabsList;
Tabs.Tab = Tab;
Tabs.Panel = TabPanel;
