import { useDispatch, useSelector } from 'react-redux';
import { getFilterContacts } from '../../redux/selectors';
import { removeContact } from '../../redux/contactsSlice';
import { Wraper, Btn } from './Contacts.styled';

const ContactsList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(getFilterContacts);

  return (
    <>
      <Wraper>
        {contacts.map(({ id, name, number }) => (
          <li key={id}>
            {name}:{number}
            <Btn type="button" onClick={() => dispatch(removeContact(id))}>
              Delete
            </Btn>
          </li>
        ))}
      </Wraper>
    </>
  );
};

export default ContactsList;
