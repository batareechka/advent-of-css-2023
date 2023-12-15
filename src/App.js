import './global.css';
import './App.css';
import RsvpPage from './components/RsvpPage/RsvpPage';
import Footer from './components/Footer/Footer';
import InteriorLayout from './components/InteriorLayout/InteriorLayout';
import InviteGroupForm from './components/InviteGroupForm/InviteGroupForm';

function App() {
  return (
    <div className="App">
      <InteriorLayout>
        <h1>
          <span className="subtitle">4 weeks & 2 days until</span>
          <br />
          <span className="title-1">SMITH CHRISTMAS</span>
        </h1>
        <InviteGroupForm />
      </InteriorLayout>
      <Footer />
    </div>
  );
}

export default App;
