import { Formik, Field } from 'formik';
import { validationSchema } from './validation';
import { useState } from 'react';
import UIInput from '../input/UIInput';
import UIButton from '../button/UIButton';
import { Container, FormRow, Title, StyledForm, Error } from './form.styles';

const initialValues = {
  name: '',
  email: '',
  phone: '',
  message: '',
};

const URL = 'https://eoai0a4rjd3b1j6.m.pipedream.net';

export const Form = () => {
  const [toggle, setToggle] = useState(false);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);

  const send = async body => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'cors',
      body: JSON.stringify(body),
    };
    setLoader(true);
    try {
      const response = await fetch(URL, options);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      return result;
    } catch (error) {
      setError(error);
      throw error;
    } finally {
      setLoader(false);
    }
  };

  return (
    <Container>
      <Title>Let&apos;s build project together!</Title>

      {!toggle && (
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={values => {
            setToggle(true);
            send(values);
          }}
        >
          {({ errors, touched, handleSubmit }) => (
            <StyledForm>
              <FormRow>
                <UIInput
                  label="What is your name?*"
                  type="text"
                  name="name"
                  placeholder="First Name"
                  aria-required="true"
                  aria-describedby="nameDesc"
                />

                {errors.name && touched.name && <Error>{errors.name}</Error>}
              </FormRow>

              <FormRow>
                <UIInput
                  label="What is your phone?*"
                  type="text"
                  name="phone"
                  placeholder="First Name"
                  aria-required="true"
                  aria-describedby="phoneDesc"
                />

                {errors.phone && touched.phone && <Error>{errors.phone}</Error>}
              </FormRow>

              <FormRow>
                <UIInput
                  label="What is your E-mail?*"
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  aria-required="true"
                  aria-describedby="emailDesc"
                />
                {errors.email && touched.email && <Error>{errors.email}</Error>}
              </FormRow>

              <FormRow>
                <UIInput
                  label="A few words about your project*"
                  name="message"
                  type="text"
                  placeholder="Message"
                  component="textarea"
                  aria-required="true"
                  aria-describedby="emailDesc"
                />

                {errors.message && touched.message && (
                  <Error>{errors.message}</Error>
                )}
              </FormRow>

              <UIButton label="Send" type="submit" />
            </StyledForm>
          )}
        </Formik>
      )}
      {toggle && <p>Thank you, I sed you email! </p>}
    </Container>
  );
};
