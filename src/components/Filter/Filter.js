import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/slices/contactSlice';

import { Label, Input } from './Filter.styled';

export default function Filter() {
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  function changeFilter(event) {
    dispatch(setFilter(event.currentTarget.value.trim()));
  }

  return (
    <Label>
      Find contacts by name:
      <Input type="text" value={filter} onChange={changeFilter} />
    </Label>
  );
}
