import './global.css';
import './App.css';
import WelcomeLayout from './components/WelcomeLayout/WelcomeLayout';
import FormField from './components/FormField/FormField';
import Input from './components/Input/Input';
import InputPassword from './components/InputPassword/InputPassword';
import Button from './components/Button/Button';
import Link from './components/Link/Link';

function App() {
  return (
    <div className="App">
      <WelcomeLayout>
        <h1 className="welcome-layout__title welcome-layout__title--decorative">
          Login
        </h1>
        <form
          className="welcome-layout__form"
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
      </WelcomeLayout>
    </div>
  );
}

export default App;
