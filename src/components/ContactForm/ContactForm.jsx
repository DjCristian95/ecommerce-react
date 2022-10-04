import React, { useState } from 'react';
import { getFirestore, addDoc, collection } from 'firebase/firestore';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';


const ContactForm = () => {
  const [id, setId] = useState();

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const changeHandler = (event) => {
    const newForm = { ...form, [event.target.name]: event.target.value };
    setForm(newForm);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const db = getFirestore();
    const contactFormCollection = collection(db, 'contactform');
    addDoc(contactFormCollection, form).then((snapshot) => setId(snapshot.id));
  };

  return (
    <>
    <div>
      {typeof id !== 'undefined' ? (
        <p>Has enviado un formulario y la id es {id}</p>
      ) : (
        <>
        <Container>
        <Form  onSubmit={submitHandler}>
          <Form.Group controlId="form.Name">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" id="name" onChange={changeHandler}
              value={form.name} placeholder="Ingrese su nombre" />
          </Form.Group>
          <Form.Group controlId="form.Email">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email"   name="email"
              id="email" onChange={changeHandler}
              value={form.email} placeholder="name@example.com" />
          </Form.Group>
          <Form.Group controlId="message">
              <Form.Label>Comment</Form.Label>
              <Form.Control as="textarea"   name="message"
              id="message"
              onChange={changeHandler}
              value={form.message}  rows={3} />
          </Form.Group>
        </Form>
      </Container>
          <button>Enviar</button>
       
          </>     
    
      )}
    </div>
    </>
  );
};

export default ContactForm;