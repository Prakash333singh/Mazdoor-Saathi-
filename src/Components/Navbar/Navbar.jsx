import { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/mp.png";
import { useNavigate } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { MdMiscellaneousServices } from "react-icons/md";
import { FaCircleInfo } from "react-icons/fa6";
import { GrGallery } from "react-icons/gr";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import menu_icon from "../../assets/menu-icon.png";
import { Link, scroller } from "react-scroll";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };
  const handleNavigateAndScroll = (sectionId, offset) => {
    navigate("/");

    setTimeout(() => {
      scroller.scrollTo(sectionId, {
        duration: 500,
        smooth: true,
        offset: offset,
      });
      toggleMenu();
    }, 100);
  };

  return (
    <nav className={"box dark-nav"}>
      <img
        src={logo}
        alt=""
        className="logo cursor-pointer"
        onClick={() => navigate("/")}
      />
      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
        <li>
          <Link
            to="hero"
            smooth={true}
            offset={0}
            duration={500}
            onClick={() => {
              navigate("/");
              toggleMenu();
            }}
          >
            <span className="flex gap-2">
              <span className="md:hidden">
                <IoHomeOutline />
              </span>
              Home
            </span>
          </Link>
        </li>
        <li>
          <span
            className="cursor-pointer"
            onClick={() => handleNavigateAndScroll("program", -260)}
          >
            <span className="flex gap-2">
              <span className="md:hidden">
                <MdMiscellaneousServices />
              </span>
              Services
            </span>
          </span>
        </li>
        <li>
          <span
            className="cursor-pointer"
            onClick={() => handleNavigateAndScroll("about", -150)}
          >
            <span className="flex gap-2">
              <span className="md:hidden">
                <FaCircleInfo />
              </span>
              About Us
            </span>
          </span>
        </li>
        <li>
          <span
            className="cursor-pointer"
            onClick={() => handleNavigateAndScroll("campus", -260)}
          >
            <span className="flex gap-2">
              <span className="md:hidden">
                <GrGallery />
              </span>
              Gallery
            </span>
          </span>
        </li>
        <li>
          <span
            className="cursor-pointer"
            onClick={() => handleNavigateAndScroll("testimonials", -260)}
          >
            <span className="flex gap-2">
              <span className="md:hidden">
                <VscWorkspaceTrusted />
              </span>
              Testimonials
            </span>
          </span>
        </li>
        <li>
          <span>
            <span
              className="btn text-sm cursor-pointer"
              onClick={() => handleNavigateAndScroll("contact", -260)}
            >
              Contact Us
            </span>
          </span>
        </li>
      </ul>
      <img src={menu_icon} alt="" className="menu-icon" onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
