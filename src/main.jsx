import ReactDOM from 'react-dom/client';
import Title from './Components/Title/Title';
import './index.css';
import App from '@/test/App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Title lesson={1} title='Prop drilling'>
    <App />
  </Title>
);
