import { useState } from 'react';
import { Navigate, useNavigate, useLocation } from 'react-router-dom';
import { useUserSignupMutation } from '../../redux/api/authApi';
import imageBg from '../../images/logIn.png';
import {
  Wrap,
  InputPass,
  LabelWrap,
  InputEmail,
  ButtonReg,
  ButtonBack,
  Form,
} from './registerPage.styled';

export default function SignupView() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userSignup, { isSuccess }] = useUserSignupMutation();

  const handleInputChange = ({ currentTarget: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
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

  const handleSubmit = async event => {
    event.preventDefault();
    await userSignup({ name, email, password });
    setName('');
    setEmail('');
    setPassword('');
  };

  let navigate = useNavigate();
  let location = useLocation();

  const goBack = () => {
    navigate(location?.state?.from || '/');
  };

  return (
    <Wrap imgUrl={imageBg}>
      {isSuccess && <Navigate to="/contacts" replace={true} />}
      <Form onSubmit={handleSubmit}>
        <LabelWrap>
          <label>Name</label>
          <InputEmail
            type="text"
            value={name}
            name="name"
            onChange={handleInputChange}
            placeholder="enter your name"
          />
          <label color={'black'}>Email</label>
          <InputEmail
            pattern="^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$"
            onChange={handleInputChange}
            type="email"
            value={email}
            name="email"
            placeholder="enter your email"
          />
          <label color={'black'}>Password</label>
          <InputPass
            onChange={handleInputChange}
            value={password}
            minLength={7}
            name="password"
            type="password"
            placeholder="enter your password"
          />
        </LabelWrap>
        <ButtonReg
          type="submit"
          disabled={name && email && password ? false : true}
        >
          Register
        </ButtonReg>
        <ButtonBack type="button" onClick={goBack}>
          Back
        </ButtonBack>
      </Form>
    </Wrap>
  );
}
