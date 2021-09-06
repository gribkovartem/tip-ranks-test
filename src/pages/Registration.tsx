import { FC } from "react";
import Typography from "@material-ui/core/Typography";
import { RegistrationContainer } from "../modules/auth/containers";

const Registration: FC = () => {
  return (
    <>
      <Typography variant="h1">Зарегистрироваться</Typography>
      <RegistrationContainer />
    </>
  );
};

export { Registration };
