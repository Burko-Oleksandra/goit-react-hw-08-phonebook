import React from 'react';
import { Label, Input } from './Filter.styled';

export default function Filter({ value, onChange }) {
  return (
    <Label>
      Find contacts by name:
      <Input type="text" value={value} onChange={onChange} />
    </Label>
  );
}
