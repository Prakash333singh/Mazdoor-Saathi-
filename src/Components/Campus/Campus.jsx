import "./Campus.css";
import gallery_1 from "/images/gallery-1.jpeg";
import gallery_2 from "/images/gallery-2.jpeg";
import gallery_3 from "/images/gallery-3.jpeg";
import gallery_4 from "/images/gallery-4.jpeg";
import white_arrow from "../../assets/white-arrow.png";
import { Link } from "react-router-dom";
const Campus = () => {
  return (
    <div className="campus">
      <div className="gallery">
        <img src={gallery_1} alt="" />
        <img src={gallery_2} alt="" />
        <img src={gallery_3} alt="" />
        <img src={gallery_4} alt="" />
      </div>
      <Link to="/gallery">
        <button className="btn dark-btn">
          See more here <img src={white_arrow} alt="" />
        </button>
      </Link>
    </div>
  );
};

export default Campus;
