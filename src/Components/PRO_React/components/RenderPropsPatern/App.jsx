import { DataFetcher } from './DataFetcher.jsx';
import TabSwitcher from './TabSwitcher.jsx';
import { Divider } from '../../ui/Divider';
import Title from '../../ui/Title.jsx';

export default function App() {
  return (
    <div className='App'>
      <Title>TabSwitcher</Title>
      <Divider />
      <TabSwitcher
        tabIds={['first', 'second', 'third']}
        getHeader={(tabId) => {
          return tabId[0].toUpperCase() + tabId.slice(1);
        }}
        renderContent={(tabId) => {
          return <p>This is the {tabId} item.</p>;
        }}
      />

      <Divider />
      <Title>DataFetcher</Title>
      <Divider />
      {/* Ունիվերսալ կոմպոնենտ render props patern 
      կարելի է բազմակի օգտագործել անկախ fetch-ով եկած տվյալների տիպից
      Այն մենք վերափոխում ենք հենց render-ի մեջ*/}
      <DataFetcher
        url='https://jsonplaceholder.typicode.com/posts'
        render={({ data, loading, error }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>error: - {error.message}</p>;
          return (
            <ul>
              {data.slice(0, 8).map((post) => {
                return <li key={post.id}>{post.title}</li>;
              })}
            </ul>
          );
        }}
      ></DataFetcher>
    </div>
  );
}
