import * as Yup from "yup";
import { NAME_REGEXP, LOGIN_REGEXP, PHONE_REGEXP } from "../../constants";

const RegistrationFormSchema = Yup.object({
  name: Yup.string()
    .required("Необходимо указать имя")
    .min(3, "Минимальное количество символов: 3")
    .matches(NAME_REGEXP, "Допустимые символы: А-я, A-z, -")
    .max(30, "Максимальное количество символов: 30"),
  login: Yup.string()
    .required("Необходимо указать логин")
    .min(3, "Минимальное количество символов: 3")
    .matches(LOGIN_REGEXP, "Допустимые символы: A-z, -")
    .max(30, "Максимальное количество символов: 30"),
  email: Yup.string()
    .required("Необходимо указать email")
    .email("Некорректный email"),
  phone: Yup.string()
    .required("Необходимо указать телефон")
    // .matches(PHONE_REGEXP, "Формат телефона +7-9##-###-##-##")
    .max(11, "Некорректный телефон"),
  password: Yup.string().required("Необходимо указать пароль"),
  passwordConfirm: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Пароли не совпадают"
  ),
});

export { RegistrationFormSchema };
