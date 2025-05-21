import FAQ from "./cover_faq";
import CoverPageIntro from "./cover_Intro";
import HorizontalTimeline from "./cover_timeline";
const CoverPage = () => {
  return (
    <div>
      <CoverPageIntro />
      <HorizontalTimeline />
      <FAQ />
    </div>
  );
};


export default CoverPage;