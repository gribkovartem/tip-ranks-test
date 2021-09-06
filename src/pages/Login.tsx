import { FC } from "react";
import Typography from "@material-ui/core/Typography";
import { LoginContainer } from "../modules/auth/containers";

const Login: FC = () => {
  return (
    <>
      <Typography variant="h1">Войти</Typography>
      <LoginContainer />
    </>
  );
};

export { Login };
