import * as Yup from 'yup'

export const LoginSchema = Yup.object().shape({
    password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .max(50, 'Password must be at most 50 characters')
        .required('Password cannot be left blank!'),

    email: Yup.string()
        .email('Invalid email format')
        .required('Email cannot be left blank!'),
});

export const SignUpSchema = Yup.object().shape({
    password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .max(50, 'Password must be at most 50 characters')
        .required('Password cannot be left blank!'),

    email: Yup.string()
        .email('Invalid email format')
        .required('Email cannot be left blank!'),

    name: Yup.string()
        .required('Name cannot be left blank!'),
})

