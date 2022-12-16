import { Wrap, Text, Register, LogIn } from './authPage.styled';
import imageBg from '../../images/phonebook.png';

export default function WithBackground() {
  return (
    <Wrap imgUrl={imageBg}>
      <Text>My phonebook</Text>
      <Register to="/register">Register</Register>
      <LogIn to="/login">Log in</LogIn>
    </Wrap>
  );
}
