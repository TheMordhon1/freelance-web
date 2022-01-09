import ButtonExplore from "./ButtonExplore";
import FeaturesCard from "./FeaturesCard";
import SectionBg from "./SectionBg";

export default function Features() {
  return (
    <div className="pt-10 pb-20 bg-bg_gray mt-28">
      <SectionBg
        titleBlack="Our"
        titleBlue="Features"
        desc="Letter of on become he tended active enable to. Vicinity relation sensible sociable surprise screened no up as."
      >
        <FeaturesCard />
        <ButtonExplore />
      </SectionBg>
    </div>
  );
}
