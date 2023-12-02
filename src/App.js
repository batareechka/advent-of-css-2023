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
          <Avatar fileName="avatar-01.png" />
          <Avatar fileName="avatar-02.png" status="danger" />
          <Avatar fileName="avatar-03.png" status="warning" />
          <Avatar fileName="avatar-04.png" status="success" />
          <Avatar fileName="avatar-05.png" isChristmasTheme />
          <Avatar isAnonymous />

          {/* <Avatar fileName="avatar-07.png" />
          <Avatar fileName="avatar-08.png" />
          <Avatar fileName="avatar-09.png" /> */}
        </div>
      </section>
    </div>
  );
}

export default App;
