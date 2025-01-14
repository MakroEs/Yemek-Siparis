import Banner from "./Components/Banner";
import Category from "./Components/Category";
import OurServices from "./Components/OurServices";

import SliderSection from "./Components/SliderSection";
import Testimonial from "./Components/Testimonial";
export default function Home() {
  return (
    <div className="container mx-auto px-16">
      <Banner />
      <Category />
      <SliderSection />
      <Testimonial />
      <OurServices />
    </div>
  );
}
