import { useRef } from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "/images/profile-icon1.png";
// import user_2 from "/images/user-2.jpeg";
// import user_3 from "/images/user-3.jpeg";
// import user_4 from "/images/user-4.jpeg";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonials">
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
      <img
        src={back_icon}
        alt=""
        className="back-btn"
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Suman</h3>
                  <span>Lucknow, Uttar Pradesh</span>
                </div>
              </div>
              <p>
                As a startup enthusiast, I&apos;m highly impressed by the
                dedication and vision of the team at Mera Rojgar Mera Adhikar.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Rahul Shukla</h3>
                  <span>Uttar Pradesh</span>
                </div>
              </div>
              <p>
                Right Path Predictor Pvt Ltd (MRMA) is taking a bold step
                towards addressing the challenges faced by migrant workers, and
                I&apos;m excited to be a part of their journey.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Sachin Kumar</h3>
                  <span>Lucknow, Uttar Pradesh</span>
                </div>
              </div>
              <p>
                मेरा रोजगार मेरा अधिकार प्लेटफ़ॉर्म का लॉन्च होने की बड़ी उम्मीद
                है! यह हमें नई रोजगार अवसरों और अपने अधिकारों की प्राप्ति में
                मदद करेगा।
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Anurag Awasthi</h3>
                  <span>Lucknow, Uttar Pradesh</span>
                </div>
              </div>
              <p>
                Anticipating the release of Mera Rojgar Mera Adhikar platform!
                With its focus on migrant
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
