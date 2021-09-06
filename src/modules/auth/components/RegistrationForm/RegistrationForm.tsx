import { FC } from "react";
import { useFormik } from "formik";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { RegistrationFormData } from "../../types/RegistrationFormData";
import { RegistrationFormSchema } from "./RegistrationFormSchema";
import CircularProgress from "@material-ui/core/CircularProgress";

const INITIAL_VALUES: RegistrationFormData = {
  name: "",
  login: "",
  email: "",
  phone: "",
  password: "",
  passwordConfirm: "",
};

interface Props {
  loading: boolean;
  onSubmit: (values: RegistrationFormData) => void;
}

const RegistrationForm: FC<Props> = ({ loading, onSubmit }) => {
  const formik = useFormik({
    initialValues: INITIAL_VALUES,
    validationSchema: RegistrationFormSchema,
    onSubmit,
  });

  const handleReset = () => {
    formik.resetForm();
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField
        id="name"
        name="name"
        label="Имя"
        variant="outlined"
        disabled={loading}
        error={!!formik.touched.name && !!formik.errors.name}
        helperText={
          formik.touched.name && formik.errors.name
            ? formik.errors.name
            : undefined
        }
        value={formik.values.name}
        onChange={formik.handleChange}
      />
      <TextField
        id="login"
        name="login"
        label="Логин"
        variant="outlined"
        disabled={loading}
        error={!!formik.touched.login && !!formik.errors.login}
        helperText={
          formik.touched.login && formik.errors.login
            ? formik.errors.login
            : undefined
        }
        value={formik.values.login}
        onChange={formik.handleChange}
      />
      <TextField
        id="email"
        name="email"
        label="E-mail"
        variant="outlined"
        type="email"
        disabled={loading}
        error={!!formik.touched.email && !!formik.errors.email}
        helperText={
          formik.touched.email && formik.errors.email
            ? formik.errors.login
            : undefined
        }
        value={formik.values.email}
        onChange={formik.handleChange}
      />
      <TextField
        id="phone"
        name="phone"
        label="Телефон"
        variant="outlined"
        disabled={loading}
        error={!!formik.touched.phone && !!formik.errors.phone}
        helperText={
          formik.touched.phone && formik.errors.phone
            ? formik.errors.phone
            : undefined
        }
        value={formik.values.phone}
        onChange={formik.handleChange}
      />
      <TextField
        id="password"
        name="password"
        label="Пароль"
        variant="outlined"
        type="password"
        disabled={loading}
        error={!!formik.touched.password && !!formik.errors.password}
        helperText={
          formik.touched.password && formik.errors.password
            ? formik.errors.password
            : undefined
        }
        value={formik.values.password}
        onChange={formik.handleChange}
      />
      <TextField
        id="passwordConfirm"
        name="passwordConfirm"
        label="Повторите пароль"
        variant="outlined"
        type="password"
        disabled={loading}
        error={
          !!formik.touched.passwordConfirm && !!formik.errors.passwordConfirm
        }
        helperText={
          formik.touched.passwordConfirm && formik.errors.passwordConfirm
            ? formik.errors.passwordConfirm
            : undefined
        }
        value={formik.values.passwordConfirm}
        onChange={formik.handleChange}
      />
      <Button
        variant="contained"
        color="primary"
        type="submit"
        disabled={loading}
      >
        {loading ? <CircularProgress /> : "Зарегистрироваться"}
      </Button>
      <Button variant="contained" color="secondary" onClick={handleReset}>
        Очистить форму
      </Button>
    </form>
  );
};

export { RegistrationForm };
