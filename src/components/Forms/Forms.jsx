import { Box } from 'components/Box';
import { ErrorMessage, Form, Formik } from 'formik';
import * as yup from 'yup';
import { Input, Btn, Title } from './Forms.styled';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import { customAlphabet } from 'nanoid';

const ErrorText = styled.p`
  color: red;
`;
const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  );
};

const nanoid = customAlphabet('1234567890', 3);

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.number().required(),
});

const initialValues = {
  id: '',
  name: '',
  number: '',
};

const Forms = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    const newContact = {
      id: 'id' + nanoid(),
      name: values.name,
      number: values.number,
    };
    dispatch(addContact(newContact));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Box
        p={4}
        m="auto"
        bg="primary"
        width=" 300px"
        display="flex"
        flexDirection="column"
        textAlign="center"
        borderRadius="normal"
        border="normal"
        boxShadow="shadow"
      >
        <Form autoComplete="off">
          <label htmlFor="name">
            <Title>Name</Title>
            <Input type="text" name="name" id="name" placeholder="Full name" />
            <FormError name="name" component="div" />
          </label>
          <label htmlFor="number">
            <Title>Number</Title>
            <Input
              type="tel"
              name="number"
              id="name"
              placeholder="Phone number"
            />
            <FormError name="number" component="div" />
          </label>
          <Btn type="submit">Add contact</Btn>
        </Form>
      </Box>
    </Formik>
  );
};

export default Forms;
