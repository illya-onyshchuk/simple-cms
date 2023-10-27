import React from 'react';
import cl from '../defaultStyle.module.css'
import { tables } from '../testdb/tables'


const DummyTable = () => {
  const filterTables = tables.filter(table => table.id === 'dummyTable');

  return (
    <>
      {filterTables.map(table => 
        tables.length ?
          <div key={table.id}>
            <h2>{table.title}</h2>
            <table  className={cl.customTable}>
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
            </table>
          </div>
          : null
        )}
    </>
  );
}

export default DummyTable;
