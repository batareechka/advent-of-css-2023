import './global.css';
import './App.css';
import Icon from './components/Icon/Icon';
import Avatar from './components/Avatar/Avatar';

function App() {
  return (
    <div className="App">
      <h1>Components</h1>
      <section>
        <h2>Icons</h2>
        <Icon id="calendar" />
        <Icon id="check" />
        <Icon id="chevron" />
        <Icon id="close" />
        <Icon id="eyeclosed" />
        <Icon id="eyeopened" />
        <Icon id="logout" />
        <Icon id="minus" />
        <Icon id="plus" />
        <Icon id="question" />
        <Icon id="thumbsdown" />
        <Icon id="thumbsup" />
        <Icon id="upload" />
        <Icon id="user" />
      </section>
      <section style={{ padding: '4rem', color: 'white', background: 'black' }}>
        <h2>Avatars</h2>
        <div className="app__avatar-grid">
          <Avatar alt="Anastasiia Batarei" />
          <Avatar avatar="avatar-01.png" />
          <Avatar avatar="avatar-02.png" status="danger" />
          <Avatar avatar="avatar-03.png" status="warning" />
          <Avatar avatar="avatar-04.png" status="success" />
          <Avatar avatar="avatar-05.png" isChristmasTheme />
          <Avatar isAnonymous />
        </div>
      </section>
    </div>
  );
}

export default App;
