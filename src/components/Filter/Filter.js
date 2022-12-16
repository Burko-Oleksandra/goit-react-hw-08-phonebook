import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/slices/filterSlice';

import { Form, Label, InputFilter, Button } from './Filter.styled';
import { BiSearchAlt } from 'react-icons/bi';

export default function Filter() {
  const dispatch = useDispatch();
  const filterValue = useSelector(state => state.filter);

  const onFilterChange = event => {
    dispatch(setFilter(event.currentTarget.value.toLowerCase()));
  };

  return (
    <Form>
      <Label>Filter</Label>
      <InputFilter
        onChange={onFilterChange}
        value={filterValue}
        type="text"
        name="filter"
        placeholder="Find contacts by name"
      />
      <Button type="button">
        <BiSearchAlt size="1.5rem" color="#efbad3" />
      </Button>
    </Form>
  );
}
