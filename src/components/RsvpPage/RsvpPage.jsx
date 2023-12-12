import './RsvpPage.css';
import ReactionButton from '../ReactionButton/ReactionButton';
import WelcomeLayout from '../WelcomeLayout/WelcomeLayout';

const RsvpPage = () => {
  return (
    <WelcomeLayout>
      <h1>
        <span className="title-1 text-decorative">You’re invited TO</span>
        <span className="title-jumbo">SMITH CHRISTMAS</span>
      </h1>
      <p className="subtitle">December 23, 2023</p>
      <div className="reactions-layout">
        <ReactionButton type="negative" url="/rsvp-decline">
          Regretfully Decline
        </ReactionButton>
        <ReactionButton type="positive" url="/rsvp-accept">
          I’ll Be There!
        </ReactionButton>
      </div>
    </WelcomeLayout>
  );
};

export default RsvpPage;
