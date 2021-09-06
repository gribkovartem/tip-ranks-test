import Typography from "@material-ui/core/Typography";
import { observer } from "mobx-react";
import { FC } from "react";
import { RegistrationForm } from "../../components";
import { authStore } from "../../store";
import { RegistrationFormData } from "../../types/RegistrationFormData";

const RegistrationContainer: FC = observer(() => {
  const handleSubmit = (values: RegistrationFormData) => {
    authStore.registerUser(values);
  };

  return authStore.loggedIn && authStore.userData ? (
    <Typography variant="body1">
      Cпасибо {authStore.userData.name}, вы зарегистрировались под логином{" "}
      {authStore.userData.login}, можете вернутся на главную страницу сайта
    </Typography>
  ) : (
    <RegistrationForm loading={authStore.loading} onSubmit={handleSubmit} />
  );
});

export { RegistrationContainer };
