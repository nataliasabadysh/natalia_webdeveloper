// // UIInput.stories.js
// import React from 'react';
// import { Formik, Form } from 'formik';
// import * as Yup from 'yup';
// import UIInput from './UIInput';

// export default {
//   title: 'Example/UIInput',
//   component: UIInput,
// };

// const Template = (args) => (
//   <Formik
//     initialValues={{ name: '' }}
//     validationSchema={Yup.object({
//       name: Yup.string()
//         .max(15, 'Must be 15 characters or less')
//         .required('Required'),
//     })}
//     onSubmit={(values, { setSubmitting }) => {
//       setTimeout(() => {
//         alert(JSON.stringify(values, null, 2));
//         setSubmitting(false);
//       }, 400);
//     }}
//   >
//     <Form>
//       <UIInput {...args} />
//     </Form>
//   </Formik>
// );

// export const Default = Template.bind({});
// Default.args = {
//   label: 'Name',
//   name: 'name',
//   type: 'text',
//   placeholder: 'Your name',
// };

// export const Email = Template.bind({});
// Email.args = {
//   label: 'Email',
//   name: 'email',
//   type: 'email',
//   placeholder: 'Your email',
// };
import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import UIInput from './UIInput';

// This default export determines where your story goes in the story list
export default {
  title: 'Style Guide/UIInput',
  component: UIInput,
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

const Template = args => (
  // Wrap the UIInput with Formik for state handling
  <Formik
    initialValues={{
      name: '',
    }}
    validationSchema={Yup.object({
      name: Yup.string().required('Required'),
    })}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 400);
    }}
  >
    {formik => (
      <Form>
        <UIInput {...args} />
      </Form>
    )}
  </Formik>
);

export const Default = Template.bind({});
Default.args = {
  label: 'Name',
  name: 'name',
  type: 'text',
  placeholder: 'John Doe',
};

export const WithError = Template.bind({});
WithError.args = {
  ...Default.args,
  // Simulating a touched state with an error
  meta: {
    touched: true,
    error: 'This field is required.',
  },
};
