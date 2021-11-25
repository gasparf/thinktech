import * as React from 'react';
import './DataTable.css';
import MaterialTable from 'material-table';
import { TableData } from './TableData';


const columns = [
    { title: 'Transactions', field: 'transactions'},
    { title: 'Institution', field: 'institution'},
    { title: 'Account', field: 'account'},
    { title: 'Date', field: 'date' },
    { title: 'Amount', field: 'amount'}, 
];

const DataTable = () => {
    return (
        <div style={{ maxWidth: '100%' }}>
            <MaterialTable columns={columns} data={TableData} title='Transanctions' />
        </div>
    )
}

export default DataTable