import * as yup from 'yup';

const NumberUppercaseAndLowercaseMin6Symbols = new RegExp(/^(?=.*[a-zа-я])(?=.*[A-ZА-Я])(?=.*\d).{6,}$/);

export const passwordValidation = {
    password: yup
        .string()
        .required('Обязательное поле')
        .matches(
            NumberUppercaseAndLowercaseMin6Symbols,
            'Пароль должен содержать минимум 6\u00a0символов, цифры, заглавные и\u00a0строчные буквы',
        ),
    confirmPassword: yup
        .string()
        .required('Обязательное поле')
        .oneOf([yup.ref('password'), null], 'Пароли не\u00a0совпадают'),
};
