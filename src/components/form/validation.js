import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),
  phone: Yup.string().min(2, 'Too Short!').max(20, 'Too Long!'),

  email: Yup.string().email('Invalid email').required('Required'),
  message: Yup.string().min(0).max(200, 'Too Long!, please make 200 charters '),
});
