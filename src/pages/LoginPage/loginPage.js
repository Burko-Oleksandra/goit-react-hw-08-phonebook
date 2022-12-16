import { useState, useEffect } from 'react';
import { Navigate, useNavigate, useLocation } from 'react-router-dom';
import { useUserLoginMutation } from '../../redux/api/authApi';

import imageBg from '../../images/logIn.png';
import {
  Wrap,
  Form,
  LabelWrap,
  InputEmail,
  InputPass,
  ButtonLog,
  ButtonBack,
} from './loginPage.styled';

export default function LoginView() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userLogin, { isSuccess, isError }] = useUserLoginMutation();
  useEffect(() => {
    isError && alert('Invalid email or password');
  }, [isSuccess, isError]);

  const handleInputChange = ({ currentTarget: { name, value } }) => {
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    userLogin({
      email,
      password,
    });
    setEmail('');
    setPassword('');
    console.log(123);
  };

  let navigate = useNavigate();
  let location = useLocation();

  const goBack = () => {
    navigate(location?.state?.from || '/');
  };

  return (
    <Wrap imgUrl={imageBg}>
      {isSuccess && <Navigate to="/contacts" replace={true} />}
      <Form autoComplete="off" onSubmit={handleSubmit}>
        <LabelWrap>
          <label>Email</label>
          <InputEmail
            type="email"
            pattern="^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$"
            required
            onChange={handleInputChange}
            name="email"
            value={email}
            placeholder="enter your email"
          />
          <label>Password </label>
          <InputPass
            type="password"
            onChange={handleInputChange}
            value={password}
            name="password"
            placeholder="enter your password"
          />
        </LabelWrap>
        <ButtonLog disabled={email && password ? false : true} type="submit">
          Log in
        </ButtonLog>
        <ButtonBack type="button" onClick={goBack}>
          Back
        </ButtonBack>
      </Form>
    </Wrap>
  );
}
