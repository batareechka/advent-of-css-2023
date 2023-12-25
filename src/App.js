import './global.css';
import './App.css';
import RsvpPage from './components/RsvpPage/RsvpPage';
import Footer from './components/Footer/Footer';
import InteriorLayout from './components/InteriorLayout/InteriorLayout';
import InviteGroupForm from './components/InviteGroupForm/InviteGroupForm';
import WishListForm from './components/WishListForm/WishListForm';

function App() {
  return (
    <div className="App">
      <InteriorLayout>
        <h1 className="title-jumbo">Wish list</h1>
        <p className="subtitle">Make your list and check it twice</p>
        <WishListForm />
      </InteriorLayout>
      <Footer />
    </div>
  );
}

export default App;
