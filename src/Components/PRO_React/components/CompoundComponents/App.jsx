import { Tabs } from './Tabs';
import './Tabs.css';

export default function App() {
  return (
    <div className="compound-app">
      <h1>
        <span>&lt;Compound&gt;</span> Components
      </h1>
      <p className="description">
        Context-ի միջոցով պարզ վերահսկում, առանց prop drilling-ի
      </p>
      <hr />

      <Tabs defaultTab={0}>
        <Tabs.List>
          <Tabs.Tab id={0}>💻 React</Tabs.Tab>
          <Tabs.Tab id={1}>📱 Vue</Tabs.Tab>
          <Tabs.Tab id={2}>🎨 Svelte</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel id={0}>
          <div className="panel-content">
            <h3>React.js</h3>
            <p>React-ը Facebook-ի կողմից ստեղծված JavaScript գրադարանի համար, ինտերակտիվ հավելվածների կառուցման համար:</p>
          </div>
        </Tabs.Panel>

        <Tabs.Panel id={1}>
          <div className="panel-content">
            <h3>Vue.js</h3>
            <p>Vue.js-ը շատ հեղուկ եւ հեշտ շրջանակ, որ լավ փաստաթղթավորված:</p>
          </div>
        </Tabs.Panel>

        <Tabs.Panel id={2}>
          <div className="panel-content">
            <h3>Svelte</h3>
            <p>Svelte-ը ժամանակակից շրջանակ, որ վերածելի ժամանակ իջեցում ունի:</p>
          </div>
        </Tabs.Panel>
      </Tabs>

      <div className="resource">
        <p>
          📚{' '}
          <a href="https://www.patterns.dev/react/compound-pattern" target="_blank" rel="noopener noreferrer">
            Learn more about Compound Components
          </a>
        </p>
      </div>
    </div>
  );
}
