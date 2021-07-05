import React, { useState } from 'react'
import { Table, Button } from 'antd';

const columns = [
    {
        title: 'Medication',
        dataIndex: 'medication',
    },
    {
        title: 'Dose',
        dataIndex: 'dose',
    },
    {
        title: 'Last Fill',
        dataIndex: 'lastFill',
    },
    {
        title: 'Days Left',
        dataIndex: 'daysLeft',
    },
];

const data = [{
    key: 1,
    medication: 'Metformin',
    dose: '500mg',
    lastFill: '5-7-2021',
    quantity: 120,
    daysLeft: 4,
},
{
    key: 2,
    medication: 'Atorvastin',
    dose: '40mg',
    lastFill: '5-7-2021',
    quantity: 30,
    daysLeft: 4,
},
{
    key: 3,
    medication: 'Citalopram',
    dose: '10mg',
    lastFill: '5-7-2021',
    quantity: 30,
    daysLeft: 4,
},
{
    key: 4,
    medication: 'Bisoprolol',
    dose: '10mg',
    lastFill: '5-7-2021',
    quantity: 30,
    daysLeft: 4,
},
{
    key: 5,
    medication: 'Lansoprazole',
    dose: '30mg',
    lastFill: '5-7-2021',
    quantity: 30,
    daysLeft: 4,
},
{
    key: 6,
    medication: 'Finasteride',
    dose: '5mg',
    lastFill: '5-7-2021',
    quantity: 30,
    daysLeft: 4,
},];

const MedicationHistory = () => {

    const [selectedRowKeys, setSelectedRowKeys] = useState([])
    const [loading, setLoading] = useState(false)

    const start = () => {
        setLoading(true);
        // ajax request after empty completing
        setTimeout(() => {
            setSelectedRowKeys([]);
            setLoading(false);
        }, 1000);
    };

    const onSelectChange = selectedRowKeys => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        setSelectedRowKeys(selectedRowKeys)
    };
    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;
    return (
        <div>
            <h1>Medication History</h1>
            <div>
                <div style={{ marginBottom: 16 }}>
                    <Button type="primary" onClick={start} disabled={!hasSelected} loading={loading}>
                        Fill
          </Button>
                    <span style={{ marginLeft: 8 }}>
                        {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
                    </span>
                </div>
                <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
            </div>
        </div>
    )
}

export default MedicationHistory;