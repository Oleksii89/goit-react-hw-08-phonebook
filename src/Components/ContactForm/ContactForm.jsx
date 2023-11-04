import { useEffect } from 'react';
import {
  StyledButton,
  StyledForm,
  StyledInput,
  StyledLabel,
} from './ContactForm.styled.';

import React from 'react';
import { useDispatch } from 'react-redux';
import { addContact, fetchContacts } from 'redux/contactsSlice';
import { useForm } from 'react-hook-form';

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onSubmit = contact => {
    dispatch(addContact(contact));
    reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <StyledLabel>
        <span>Name:</span>
        <StyledInput {...register('name', { required: true })} type="text" />
        {errors.name && <span>This field is required</span>}
      </StyledLabel>

      <StyledLabel>
        <span>Number:</span>
        <StyledInput {...register('number', { required: true })} type="text" />
        {errors.number && <span>This field is required</span>}
      </StyledLabel>

      <StyledButton type="submit">Add contact</StyledButton>
    </StyledForm>
  );
};

export default ContactForm;
