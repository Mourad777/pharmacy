import React, { useState } from 'react';
import { AutoComplete, Avatar, Card, DatePicker, InputNumber, Input, Tag } from 'antd';
import { UserOutlined, IdcardOutlined } from '@ant-design/icons';
// const mockVal = (str, repeat = 1) => ({
//   value: str.repeat(repeat),
// });

const { Meta } = Card;
function titleCase(str) {
  var splitStr = str.toLowerCase().split(" ");

  for (var i = 0; i < splitStr.length; i++) {
    if (splitStr.length[i] < splitStr.length) {
      splitStr[i].charAt(0).toUpperCase();
    }

    str = splitStr.join(" ");
  }

  return str;
}

const gridStyle = {
  width: '50%',
  textAlign: 'center',
  height: '70px'
};

const patients = ['Mary Petawabano', 'Laura Icebound', 'Anna Bearskin', 'Susan Sealhunter']

const Patients = ({ setPatient, selectedPatient }) => {
  // const [value, setValue] = useState('');
  const [options, setOptions] = useState([]);

  //   const onSearch = (searchText) => {
  //     setOptions(
  //       !searchText ? [] : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)],
  //     );
  //   };

  function onDOBChange(date, dateString) {
    console.log(date, dateString);
  }

  function onPhoneNumberChange(value) {
    console.log('changed', value);
  }

  const onSelect = (data) => {
    console.log('onSelect', data);
    // setValue(data)
    setPatient(data)
  };

  const onChange = (data) => {
    console.log('changing', data)
    if (data) {
      const filteredPatients = patients.map(p => p.toLowerCase()).filter(p => p.includes(data.toLowerCase()));
      console.log('filteredPatients', filteredPatients)
      setOptions(filteredPatients.map(pt => titleCase(pt)))
      // setValue(data);
    }
  };

  return (
    <>
      <AutoComplete
        dataSource={options}
        style={{
          width: 200,
        }}
        onSelect={onSelect}
        // onSearch={onSearch}
        placeholder="Search Patient"
        onChange={onChange}
      />
      <br />
      <br />
      {/* {selectedPatient && <Avatar shape="square" size={64} icon={<UserOutlined />} />} */}
      <Card
        style={{ width: '100%' }}
        cover={
          <Avatar shape="square" style={{ width: '100%' }} size={200} icon={<IdcardOutlined />} />
          // <img
          //   alt="example"
          //   src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          // />
        }
      // actions={[
      //   <SettingOutlined key="setting" />,
      //   <EditOutlined key="edit" />,
      //   <EllipsisOutlined key="ellipsis" />,
      // ]}
      >
        {/* <Meta
          description={"Phone number:" + ` ${'514 562 2222'}`}
        />
        <Meta
          description={"Address:" + ` ${'111 Summer Hill Road'}`}
        />

        <Meta
          description={"Weight:" + ` ${'80 lbs'}`}
        />
        <Meta
          description={"DOB:" + ` ${'November 5, 1990'}`}
        /> */}
        <Card.Grid hoverable={false} style={gridStyle}>Allergies:</Card.Grid>
        <Card.Grid hoverable={false} style={gridStyle}><Tag color="error">Penicillin</Tag></Card.Grid>
        <Card.Grid hoverable={false} style={gridStyle}>Weight:</Card.Grid>
        <Card.Grid hoverable={false} style={gridStyle}><Input placeholder="Enter Weight" /></Card.Grid>
        <Card.Grid hoverable={false} style={gridStyle}>Address:</Card.Grid>
        <Card.Grid hoverable={false} style={gridStyle}><Input placeholder="Enter Address" /></Card.Grid>
        <Card.Grid hoverable={false} style={gridStyle}>DOB:</Card.Grid>
        <Card.Grid hoverable={false} style={gridStyle}><DatePicker onChange={onDOBChange} /></Card.Grid>
        <Card.Grid hoverable={false} style={gridStyle}>Phone Number:</Card.Grid>
        <Card.Grid hoverable={false} style={gridStyle}><InputNumber defaultValue={5142221111} onChange={onPhoneNumberChange} /></Card.Grid>
      </Card>,
      {/* <AutoComplete
        value={value}
        options={options}
        style={{
          width: 200,
        }}
        onSelect={onSelect}
        // onSearch={onSearch}
        onChange={onChange}
        placeholder="control mode"
      /> */}
    </>
  );
};

export default Patients;