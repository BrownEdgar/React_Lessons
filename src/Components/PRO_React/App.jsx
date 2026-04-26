import ListRenderer from './components/ListRenderer/ListRenderer';
import TableRendererApp from './components/TableRenderer/App';
import RenderPropsApp from './components/RenderPropsPatern/App';
import OrchestratorApp from './components/OrchestratorPattern/App';
import CompoundComponentsApp from './components/CompoundComponents/App';
import SlotsPatternApp from './components/SlotsPattern/App';
import StateReducerApp from './components/StateReducerPattern/App';
import ControlledUncontrolledApp from './components/ControlledUncontrolled/App';
import OptimisticUIApp from './components/OptimisticUI/App';
import PortalPatternApp from './components/PortalPattern/App';
import ComponentInjectionApp from './components/ComponentInjection/App';
import ObserverPatternApp from './components/ObserverPattern/App';
import Title from './ui/Title';

const items = ['html', 'css', 'Java Script', 'React.js', 'Node.js', 'Python'];

export default function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <Title>ListRenderer</Title>
      <ListRenderer
        items={items}
        render={(item) => <li key={item}>{item}</li>}
      />

      <TableRendererApp />

      <RenderPropsApp />

      <OrchestratorApp />

      <CompoundComponentsApp />

      <SlotsPatternApp />

      <StateReducerApp />

      <ControlledUncontrolledApp />

      <OptimisticUIApp />

      <PortalPatternApp />

      <ComponentInjectionApp />

      <ObserverPatternApp />
    </div>
  );
}
