import React, { useState } from 'react';
import { AutoComplete } from 'antd';

// const mockVal = (str, repeat = 1) => ({
//   value: str.repeat(repeat),
// });

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

const patients = ['Mary Petawabano', 'Laura Icebound', 'Anna Bearskin', 'Susan Sealhunter']

const Patients = ({setPatient}) => {
  const [value, setValue] = useState('');
  const [options, setOptions] = useState([]);

  //   const onSearch = (searchText) => {
  //     setOptions(
  //       !searchText ? [] : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)],
  //     );
  //   };

  const onSelect = (data) => {
    console.log('onSelect', data);
    setValue(data)
    setPatient(data)
  };

  const onChange = (data) => {
    console.log('changing', data)
    if (data) {
      const filteredPatients = patients.map(p => p.toLowerCase()).filter(p => p.includes(data.toLowerCase()));
      console.log('filteredPatients', filteredPatients)
      setOptions(filteredPatients.map(pt => titleCase(pt)))
      setValue(data);
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
        placeholder="Patient Name"
        onChange={onChange}
      />
      <br />
      <br />
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