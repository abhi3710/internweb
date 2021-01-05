import TopNav from "./Components/TopNav";
import "./App.css";
import Title from "./Components/Title";
import Schedule from "./Components/Schedule";
import OurRoom from "./Components/OurRoom";
import OurService from "./Components/OurService";
import { content } from "./Content/OurServiceContent";
import { thingsContent } from "./Content/ThingsContent";
import Gallery from "./Components/Gallery";
import GuestReview from "./Components/GuestReview";
import Contact from "./Components/Contact";

const App = () => {
  return (
    <div>
      <TopNav />
      <div className="container main-container">
        <Title />
        <Schedule />
        <OurRoom />
        <OurService content={content} />
        <Gallery />
        <OurService
          title="THINGS TO DO"
          content={thingsContent}
          isSvg={false}
        />
        <GuestReview />
        <Contact />
      </div>
    </div>
  );
};

export default App;
