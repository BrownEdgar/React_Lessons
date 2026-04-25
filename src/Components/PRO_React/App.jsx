import ListRenderer from './components/ListRenderer/ListRenderer';
import Table from './components/Table/Table';
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
const items = ['html', 'css', 'Java Script', 'React.js', 'Node.js', 'Python'];

const users = {
  fields: ['id', 'name', 'age', 'salary'],
  data: [
    { id: 1, name: 'Alice Johnson', age: 28, salary: 55000 },
    { id: 2, name: 'Bob Smith', age: 35, salary: 72000 },
    { id: 3, name: 'Charlie Brown', age: 42, salary: 85000 },
    { id: 4, name: 'Diana Wilson', age: 30, salary: 64000 },
    { id: 5, name: 'Ethan Lee', age: 25, salary: 48000 },
    { id: 6, name: 'Fiona Davis', age: 38, salary: 90000 },
    { id: 7, name: 'George Miller', age: 50, salary: 110000 },
    { id: 8, name: 'Hannah Martin', age: 22, salary: 45000 },
  ],
};

const cars = {
  fields: ['id', 'brand', 'model', 'year', 'price'],
  data: [
    { id: 10, brand: 'Toyota', model: 'Camry', year: 2021, price: 25000 },
    { id: 11, brand: 'Honda', model: 'Civic', year: 2020, price: 22000 },
    { id: 12, brand: 'Ford', model: 'Mustang', year: 2022, price: 35000 },
    { id: 13, brand: 'Chevrolet', model: 'Malibu', year: 2019, price: 20000 },
    { id: 14, brand: 'Tesla', model: 'Model 3', year: 2023, price: 45000 },
    { id: 15, brand: 'BMW', model: 'X5', year: 2021, price: 60000 },
    { id: 16, brand: 'Audi', model: 'A4', year: 2020, price: 40000 },
    { id: 17, brand: 'Mercedes-Benz', model: 'C-Class', year: 2022, price: 55000 },
  ],
};

const renderHeader = (headerFields) => {
  return (
    <>
      {headerFields.map((field) => {
        return (
          <th data-label={field} key={field}>
            {field}
          </th>
        );
      })}
    </>
  );
};
const renderRow = (entity) => {
  return (
    <>
      {Object.entries(entity).map(([key, value]) => {
        return <td key={key}>{value}</td>;
      })}
    </>
  );
};
export default function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <section>
        <h1>ListRenderer</h1>
        <ListRenderer
          items={items}
          render={(item) => <li key={item}>{item}</li>}
        />
        <hr />
      </section>

      <section>
        <h1>
          Dynamic <span>&lt;Table&gt;</span> Render
        </h1>
        <Table data={users} renderHeader={renderHeader} renderRow={renderRow} />
        <Table data={cars} renderHeader={renderHeader} renderRow={renderRow} />
        <hr />
      </section>

      <section>
        <RenderPropsApp />
        <hr />
      </section>

      <section>
        <OrchestratorApp />
        <hr />
      </section>

      <section>
        <CompoundComponentsApp />
        <hr />
      </section>

      <section>
        <SlotsPatternApp />
        <hr />
      </section>

      <section>
        <StateReducerApp />
        <hr />
      </section>

      <section>
        <ControlledUncontrolledApp />
        <hr />
      </section>

      <section>
        <OptimisticUIApp />
        <hr />
      </section>

      <section>
        <PortalPatternApp />
        <hr />
      </section>

      <section>
        <ComponentInjectionApp />
        <hr />
      </section>

      <section>
        <ObserverPatternApp />
      </section>
    </div>
  );
}
