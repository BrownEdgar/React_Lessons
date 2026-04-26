//  Compound Components Pattern
//  Այն թույլ է տալիս ստեղծել ճկուն եւ վերօգտագործվող component-ներ, որոնք օգտագործում են React-ի context-ը ներքին state-ի եւ logic-ի կառավարման համար, առանց prop drilling-ի: Քանի որ compound components-ը context-ի վրա է հիմնված է, նրանք կարող են հեշտությամբ փոխազդել միմյանց հետ, նույնիսկ եթե գտնվում են տարբեր մակարդակներում component ծառի մեջ: Այս pattern-ը հատկապես օգտակար է UI component-ների համար, որտեղ տարբեր մասեր պետք է աշխատեն միասին, օրինակ՝ tabs, modals կամ accordions:

import { Tabs } from './Tabs';
import './Tabs.css';
import Title from '../../ui/Title';
import { Divider } from '../../ui/Divider';
import { tabsData } from '../../constants';

export default function App() {
  return (
    <div className='compound-app'>
      <Title>
        <span>&lt;Compound&gt;</span> Components
      </Title>
      <p className='description'>
        Context-ի միջոցով պարզ վերահսկում, առանց prop drilling-ի
      </p>
      <Divider />
      <Tabs>
        <Tabs.List>
          {tabsData.map((tab) => (
            <Tabs.Tab key={tab.id} id={tab.id}>
              {tab.label}
            </Tabs.Tab>
          ))}
        </Tabs.List>

        {tabsData.map((tab) => (
          <Tabs.Panel key={tab.id} id={tab.id}>
            <div className='panel-content'>
              <h3>{tab.title}</h3>
              <p>{tab.description}</p>
            </div>
          </Tabs.Panel>
        ))}
      </Tabs>

      <div className='resource'>
        <p>
          📚{' '}
          <a
            href='https://www.patterns.dev/react/compound-pattern'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn more about Compound Components
          </a>
        </p>
      </div>
    </div>
  );
}
