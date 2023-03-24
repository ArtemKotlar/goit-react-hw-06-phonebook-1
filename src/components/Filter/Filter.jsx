import { useDispatch } from 'react-redux';
import { setContactFilter } from 'redux/filterSlice';
import { Wraper, Title, Input } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <Wraper>
      <label htmlFor="filter">
        <Title>Find contacts by name</Title>
        <Input
          type="text"
          name="filter"
          id="filter"
          onInput={e => dispatch(setContactFilter(e.target.value))}
        />
      </label>
    </Wraper>
  );
};

export default Filter;
