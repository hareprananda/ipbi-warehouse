import AuthReducers from "./auth/auth.reducer";
import UIReducer from "./ui/ui.reducer";

const RegisterReducer = {
  auth: AuthReducers,
  ui: UIReducer,
};
export default RegisterReducer;
