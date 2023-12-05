import './WelcomeScreen.css';
import Logo from '../Logo/Logo';
import FormField from '../FormField/FormField';
import Input from '../Input/Input';
import InputPassword from '../InputPassword/InputPassword';
import Button from '../Button/Button';
import Link from '../Link/Link';

const WelcomeScreen = () => {
  return (
    <div class="welcome-screen">
      <img
        class="welcome-screen__background-image"
        src="/images/bg__auth.svg"
        alt=""
      />
      <div className="welcome-screen__inner">
        <div className="welcome-screen__content">
          <Logo />
          <h1 className="welcome-screen__title welcome-screen__title--decorative">
            Login
          </h1>
          <form
            className="welcome-screen__form"
            onSubmit={(event) => event.preventDefault()}
          >
            <FormField label="Username">
              <Input type="email"></Input>
            </FormField>

            <FormField label="Password">
              <InputPassword></InputPassword>
            </FormField>
            <Button isFullWidth>Submit</Button>
          </form>
          <Link>Need an Account?</Link>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
