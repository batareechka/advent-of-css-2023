import './global.css';
import './App.css';
import WelcomeLayout from './components/WelcomeLayout/WelcomeLayout';
import FormField from './components/FormField/FormField';
import Footer from './components/Footer/Footer';
import Input from './components/Input/Input';
import InputPassword from './components/InputPassword/InputPassword';
import Button from './components/Button/Button';
import Link from './components/Link/Link';
import InteriorLayout from './components/InteriorLayout/InteriorLayout';

function App() {
  return (
    <div className="App">
      <InteriorLayout>
        <h1>Wish list</h1>
        <p>Make your list and check it twice</p>
      </InteriorLayout>
      {/* <WelcomeLayout>
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
      </WelcomeLayout> */}
      <Footer />
    </div>
  );
}

export default App;
