import { Orchestrator } from './Orchestrator';
import './Orchestrator.css';

const StepOne = ({ formData, onUpdateField, onNext }) => (
  <div className="step">
    <h2>Step 1: Choose Product</h2>
    {/* Օրխեստրատորը ստանում է callback, որը թարմացնում է տվյալները */}
    <select
      value={formData.product}
      onChange={e => onUpdateField('product', e.target.value)}
      className="form-input"
    >
      <option>Select a product</option>
      <option>Laptop</option>
      <option>Phone</option>
      <option>Tablet</option>
    </select>
    <button className="btn btn-primary" onClick={onNext}>
      Next →
    </button>
  </div>
);

const StepTwo = ({ formData, onUpdateField, onNext, onPrev }) => (
  <div className="step">
    <h2>Step 2: Delivery Address</h2>
    {/* Բերեց առաջ փոփոխել հասցեն */}
    <input
      type="text"
      placeholder="Enter address"
      value={formData.address}
      onChange={e => onUpdateField('address', e.target.value)}
      className="form-input"
    />
    <div className="step-buttons">
      <button className="btn btn-secondary" onClick={onPrev}>
        ← Back
      </button>
      <button className="btn btn-primary" onClick={onNext}>
        Next →
      </button>
    </div>
  </div>
);

const StepThree = ({ formData, onUpdateField, onPrev }) => (
  <div className="step">
    <h2>Step 3: Review & Confirm</h2>
    {/* Վերջանց մեր ամբողջ պատվերը կցուցադրենք */}
    <div className="review">
      <p>
        <strong>Product:</strong> {formData.product || 'Not selected'}
      </p>
      <p>
        <strong>Address:</strong> {formData.address || 'Not filled'}
      </p>
    </div>
    <button className="btn btn-secondary" onClick={onPrev}>
      ← Back
    </button>
    <button className="btn btn-success">Confirm Order</button>
  </div>
);

export default function App() {
  return (
    <div className="orchestrator-app">
      <h1>
        <span>&lt;Orchestrator&gt;</span> Pattern
      </h1>
      <p className="description">
        Միայն մեծ կոմպոնենտ մշակում լինում, մյուսներ՝ պարզ
      </p>
      <hr />

      {/* Orchestrator-ը կարող է ստանալ ցանկ step-ի ֆունկցիաներից */}
      <Orchestrator>
        {[StepOne, StepTwo, StepThree].map((Component, idx) => (props) => (
          <Component key={idx} {...props} />
        ))}
      </Orchestrator>

      <div className="resource">
        <p>
          📚{' '}
          <a
            href="https://kentcdodds.com/blog/compound-components-with-react-hooks"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn more about Orchestrator Pattern
          </a>
        </p>
      </div>
    </div>
  );
}
