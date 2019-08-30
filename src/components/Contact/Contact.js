import React from 'react';
import './Contact.css';
import AbsoluteWrapper from '../AbsoluteWrapper/AbsoluteWrapper';
import Form from '../Form/Form';

const Contact = () => {
  return (
    <AbsoluteWrapper >
      <main className="Contact">
        <Form />
      </main>
    </AbsoluteWrapper>
  )
};

export default Contact;