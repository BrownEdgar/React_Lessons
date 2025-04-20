import ReactDOM from 'react-dom/client';
import Title from './Components/Title/Title';
import './index.css';
import App from '@/PRO_React/components/RenderPropsPatern/App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Title lesson={1} title='Render props patern'>
    <App />
  </Title>
);
