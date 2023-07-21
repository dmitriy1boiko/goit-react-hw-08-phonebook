import { useDispatch } from 'react-redux';
import { loginOperation } from 'redux/auth/authOperations';
import { Btn, Form, Input, Label, Title } from './LoginPage.styles';

export default function LoginPage() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      loginOperation({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <>
      <Title>Login</Title>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Label>
          Email
          <Input type="email" name="email" />
        </Label>
        <Label>
          Password
          <Input type="password" name="password" />
        </Label>
        <Btn type="submit">Log In</Btn>
      </Form>
    </>
  );
}
