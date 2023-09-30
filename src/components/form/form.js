import { Formik, Field } from 'formik';
import { validationSchema } from './validation';
import styles from './form.module.css';
import { useState } from 'react';

const initialValues = {
  name: '',
  email: '',
  phone: '',
  message: '',
};

export const Form = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Let's build project together!</h3>

      {!toggle && (
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={values => {
            setToggle(true);
          }}
        >
          {({ errors, touched, handleSubmit }) => (
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.form_row}>
                <label htmlFor="name" className={styles.label}>
                  What is your name?*
                </label>
                <Field
                  type="text"
                  name="name"
                  placeholder="First Name"
                  aria-required="true"
                  aria-describedby="nameDesc"
                  className={styles.input}
                />
                {errors.name && touched.name && (
                  <div className={styles.error}>{errors.name}</div>
                )}
              </div>

              <div className={styles.form_row}>
                <label htmlFor="name" className={styles.label}>
                  Phone number?*
                </label>
                <Field
                  type="text"
                  name="phone"
                  placeholder="First Name"
                  aria-required="true"
                  aria-describedby="phoneDesc"
                  className={styles.input}
                />
                {errors.phone && touched.phone && (
                  <div className={styles.error}>{errors.phone}</div>
                )}
              </div>

              <div className={styles.form_row}>
                <label htmlFor="email" className={styles.label}>
                  E-mail*
                </label>
                <Field
                  name="email"
                  type="email"
                  placeholder="Email"
                  aria-required="true"
                  aria-describedby="emailDesc"
                  className={styles.input}
                />
                {errors.email && touched.email && (
                  <div className={styles.error}>{errors.email}</div>
                )}
              </div>

              <div className={styles.form_row}>
                <label htmlFor="message" className={styles.label}>
                  A few words about your project*
                </label>
                <Field
                  name="message"
                  type="text"
                  placeholder="Message"
                  component="textarea"
                  aria-required="true"
                  aria-describedby="messageDesc"
                  className={styles.textarea}
                />
                {errors.message && touched.message && (
                  <div className={styles.error}>{errors.message}</div>
                )}
              </div>

              <button type="submit" className={styles.btn}>
                Send
              </button>
            </form>
          )}
        </Formik>
      )}
      {toggle && <p>Thank you, I sed you email! </p>}
    </div>
  );
};
