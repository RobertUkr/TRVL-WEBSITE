import { Button } from "../button/button";
import "../app/App.scss";
import "./heroSection.scss";

const HeroSection = () => {
  return (
    <div className="hero__container">
      <video src="/assets/videos/video-1.mp4" autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className="hero__btns">
        <Button
          className="btn"
          buttonStyle="btn--outline"
          buttonSize="btn--larde"
        >
          GET STARTED
        </Button>
        <Button
          className="btn"
          buttonStyle="btn--primary"
          buttonSize="btn--larde"
        >
          WATCH TRAILER <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
