import React, { useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

function Dropdown() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'France', value: 'france' },
    { label: 'Germany', value: 'germany' }
  ]);

  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
    />
  );
}

export default Dropdown;
