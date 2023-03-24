import ContactsList from './Contacts/ContactsList';
import Filter from './Filter/Filter';
import Forms from './Forms/Forms';
import { Box } from './Box';

const App = () => {
  return (
    <Box bg="box" pt={2} pb={8}>
      <h1 style={{ textAlign: 'center' }}>Phonebook</h1>
      <Forms />
      <h2 style={{ textAlign: 'center' }}>Contacts</h2>
      <Filter />
      <ContactsList />
    </Box>
  );
};

export default App;
