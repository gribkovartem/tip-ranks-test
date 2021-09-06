import { makeAutoObservable } from "mobx";
import { registerUser } from "../../api";
import { User } from "../../types/user";
import { RegistrationFormData } from "./types/RegistrationFormData";

interface AuthStore {
  loading: boolean;
  loggedIn: boolean;
  userData: User | null;
  registerUser: (data: RegistrationFormData) => void;
}

const authStore = makeAutoObservable<AuthStore>({
  loading: false,
  loggedIn: false,
  userData: null,
  registerUser: async (data: RegistrationFormData) => {
    authStore.loading = true;
    const userData = await registerUser(data);
    authStore.loggedIn = true;
    authStore.userData = userData;
    authStore.loading = false;
  },
});

export { authStore };
