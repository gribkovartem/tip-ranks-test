import { RegistrationFormData } from "../modules/auth/types/RegistrationFormData";
import { User } from "../types/user";

const registerUser = (data: RegistrationFormData): Promise<User> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const userData = {
        name: data.name,
        login: data.login,
        email: data.email,
        phone: +data.phone,
      };
      resolve(userData);
    }, 500);
  });
};

export { registerUser };
