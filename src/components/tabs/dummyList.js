import React from 'react';
import { tabs } from '../../testdb/tabs'
import Table from 'react-bootstrap/Table';

const DummyList = () => {
  const filterTabs = tabs.filter(table => table.id === 'dummyList');

  return (
    <>
      {filterTabs.map(table => 
        filterTabs.length ?
          <div key={table.id} className='mt-3'>
            <h2>{table.title}</h2>
            <Table striped bordered hover >
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Order</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{table.id}</td>
                        <td>{table.title}</td>
                        <td>{table.order}</td>
                    </tr>
                </tbody>
            </Table>
          </div>
          : null
        )}
    </>
  );
}

export default DummyList;
