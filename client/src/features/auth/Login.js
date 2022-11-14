import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Container, PersistRow } from "../../assets/wrappers/auth/Login";
import FormRow from "../../components/FormRow";
import Logo from "../../components/Logo";
import usePersist from "../../utils/hooks/usePersist";
import Alert from "../alerts/Alert";
import {
  clearAlerts,
  loginSuccessful,
  loginInvalid,
  selectAlert,
  selectAlertText,
  selectAlertType,
} from "../alerts/alertSlice";
import { useLoginMutation } from "./authApiSlice";
import { setCredentials } from "./authSlice";

const Login = () => {
  const initialState = {
    email: "",
    password: "",
  };

  //Selectors
  const alert = useSelector(selectAlert);
  const alerText = useSelector(selectAlertText);
  const alertType = useSelector(selectAlertType);

  const navigate = useNavigate();
  const [value, setValue] = useState(initialState);
  const [persist, setPersist] = usePersist();
  const dispatch = useDispatch();
  const [login, { isLoading }] = useLoginMutation();

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = value;
    if (!email || !password) {
      return;
    }

    const currentUser = { email, password };

    try {
      const { accessToken, user } = await login(currentUser).unwrap();
      dispatch(setCredentials({ accessToken, user }));
      localStorage.setItem("user", JSON.stringify(user));
      setValue(initialState);
      dispatch(loginSuccessful());
      setTimeout(() => {
        dispatch(clearAlerts());
        navigate("/");
      }, 3000);
    } catch (err) {}
  };

  const handleToggle = () => setPersist((prev) => !prev);

  return (
    <Container className="full-page">
      <form className="form" onSubmit={handleSubmit}>
        <Logo />
        <h3>Log In</h3>
        {alert && <Alert alertText={alerText} alertType={alertType} />}
        <FormRow
          name="email"
          type="email"
          value={value.email}
          handleChange={handleChange}
        />
        <FormRow
          name="password"
          type="password"
          value={value.password}
          handleChange={handleChange}
        />
        <button className="btn" type="submit">
          Log In
        </button>
        <PersistRow>
          <label htmlFor="persist" className="form-label">
            <input
              name="persist"
              type="checkbox"
              value={persist}
              onChange={handleToggle}
              defaultChecked={persist}
            />
            Trust this device
          </label>
        </PersistRow>
      </form>
    </Container>
  );
};
export default Login;
