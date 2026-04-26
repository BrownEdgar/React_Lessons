import Table from '../Table/Table';
import { renderHeader, renderRow } from './renderHelpers';
import { users, cars } from './data';
import Title from '../../ui/Title';

export default function TableRendererApp() {
  return (
    <>
      <Title>
        Dynamic <span>&lt;Table&gt;</span> Render
      </Title>
      <Table data={users} renderHeader={renderHeader} renderRow={renderRow} />
      <Table data={cars} renderHeader={renderHeader} renderRow={renderRow} />
    </>
  );
}
