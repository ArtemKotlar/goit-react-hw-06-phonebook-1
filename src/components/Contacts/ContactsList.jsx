import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from 'redux/contactsSlice';
import { Wraper, Btn } from './Contacts.styled';

const ContactsList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);

  const filteredContacts = () =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

  return (
    <>
      <Wraper>
        {filteredContacts().map(({ id, name, number }) => (
          <li key={number} >
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
