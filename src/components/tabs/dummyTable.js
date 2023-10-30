import React from 'react';
import { tabs } from '../../testdb/tabs'
import Table from 'react-bootstrap/Table';
import cl from '../../defaultStyle.module.css'

const DummyTable = () => {
  const filterTabs = tabs.filter(table => table.id === 'dummyTable');

  return (
    <>
      {filterTabs.map(table => 
        filterTabs.length ?
          <div key={table.id} className={`mt-3 ${cl.table__container}`}>
            <h2>{table.title}</h2>
            <Table striped bordered hover>
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

export default DummyTable;
