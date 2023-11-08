import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Input from './Input';

export default {
  title: 'Style Guide/Input',
  component: Input,
  excludeStories: /.*Data$/,
};

const Template = args => (
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
        <Input {...args} />
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
  meta: {
    touched: true,
    error: 'This field is required.',
  },
};
