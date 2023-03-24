import ContactsList from './Contacts/ContactsList';
import Filter from './Filter/Filter';
import Forms from './Forms/Forms';
import { Box } from './Box';

const App = () => {
  return (
    <Box backgroundImage="url(https://kartinkin.net/uploads/posts/2021-07/1625166379_38-kartinkin-com-p-fon-gori-krasivie-foni-42.jpg)" pt={2} pb={8}>
      <h1 style={{ textAlign: 'center' }}>Phonebook</h1>
      <Forms />
      <h2 style={{ textAlign: 'center' }}>Contacts</h2>
      <Filter />
      <ContactsList />
    </Box>
  );
};

export default App;



// https://mobimg.b-cdn.net/v3/fetch/af/af4e684497699463ff4813eaaabf2e90.jpeg