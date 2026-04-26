import {
  ListRenderer,
  RenderPropsApp,
  OrchestratorApp,
  CompoundComponentsApp,
  SlotsPatternApp,
  StateReducerApp,
  ControlledUncontrolledApp,
  OptimisticUIApp,
  PortalPatternApp,
  ComponentInjectionApp,
  TableRendererApp,
  ObserverPatternApp,
} from './components';
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

      {/* <TableRendererApp /> */}
      {/* <RenderPropsApp /> */}
      {/* <OrchestratorApp /> */}
      <CompoundComponentsApp />
      {/* <SlotsPatternApp /> */}
      {/* <StateReducerApp /> */}
      {/* <ControlledUncontrolledApp /> */}
      {/* <OptimisticUIApp /> */}
      {/* <PortalPatternApp /> */}
      {/* <ComponentInjectionApp /> */}
      {/* <ObserverPatternApp /> */}
    </div>
  );
}
