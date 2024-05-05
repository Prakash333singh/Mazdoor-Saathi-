import "./About.css";
import about_img from "/images/demo-img.png";
import play_icon from "../../assets/play-icon.png";

const About = ({ setPlayState }) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img
          src={play_icon}
          alt=""
          className="play-icon"
          onClick={() => {
            setPlayState(true);
          }}
        />
      </div>
      <div className="about-right">
        <h3>ABOUT MRMA</h3>
        <h2>MERA ROGJAR MERA ADHIKAR</h2>
        <p>
          This portal is to prepared with the aim of bringing employers and
          daily wages workers (migrants) on a single platform. This portal will
          allow work seekers (labours) to register themselves on the portal ,
          create their profile , select their work category, and can apply on
          click of a button
        </p>
        <p>
          The employers get themselves registered on portal and can post
          vacancies in their respective category, give ratings, feedback, make
          payment, and check work history and If they face issues ,they will be
          contacted telephonically.
        </p>
        <p>
          Through this portal the job seekers can get active notifications in
          their preferred locations . Also with the Toll-free number provided on
          the portal , the applicant will get their problems resolved .
        </p>
      </div>
    </div>
  );
};

export default About;
