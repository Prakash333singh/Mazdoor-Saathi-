import React from "react";
import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";
import { Link } from "react-router-dom";
import dark_arrow from "../../assets/dark-arrow.png";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    // ------Enter your web3forms access key below-------

    formData.append("access_key", "36eaa7a3-bd0a-419c-a218-65eca96cbc4e");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());

    if (res.success) {
      setResult(res.message);
      event.target.reset();
    } else {
      console.log("Error", res);
      setResult(res.message);
    }
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a message <img src={msg_icon} alt="" />
        </h3>
        <p>
          Feel free to reach out through contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional service to our
          workers community.
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="" />
            rightpathpredictor@gmail.com
          </li>
          <li>
            <img src={phone_icon} alt="" />
            +91 7275 45 9492
          </li>
          <li>
            <img src={location_icon} alt="" />
            IET Incubation Centre, Lucknow
            <br /> India
          </li>
        </ul>
        <Link to="otp-verify">
          <button
            className=" bg-red-400 rounded-full py-3 px-8 flex items-center text-white font-bold text-xl shadow-lg hover:shadow-xl
          hover:bg-red-500 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Register Now !
          </button>
        </Link>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your mobile number"
            required
          />
          <label>Write your messages here</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your message"
            required
          ></textarea>
          <button type="submit" className="btn dark-btn">
            Submit now <img src={white_arrow} alt="" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
