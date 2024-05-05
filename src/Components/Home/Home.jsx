import Organisations from "../Organisations/Organisations";
import Register from "../Register/Register";
import Androidapp from "../Playstore/Playstore";
import Contact from "../Contact/Contact";
import Hero from "../Hero/Hero";
import Programs from "../Programs/Programs";
import Title from "../Title/Title";
import About from "../About/About";
import Campus from "../Campus/Campus";
import Popup from "../SuccessPopup/Popup.jsx";
import Testimonials from "../Testimonials/Testimonials";
import FAQ from "../FAQ/FAQ.jsx";
export default function Home({ setPlayState }) {
  return (
    <>
      <Hero />
      <div className="box">
        <Title subTitle="Our Platform" title="What We Provide" />
        <Programs />
        <Organisations />
        <About setPlayState={setPlayState} />
        <Title subTitle="Gallery" title="Our Photos" />
        <Campus />
        <Title subTitle="TESTIMONIALS" title="What Worker Says" />
        <Testimonials />
        <Title subTitle="Steps" title="Steps to Register" />
        <Register />
        <Title title="Download Our Mobile App" />
        <Androidapp />
        <FAQ />
        <Title subTitle="Contact Us" title="Get in Touch" />
        <Contact />
      </div>
    </>
  );
}
