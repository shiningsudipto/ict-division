import { footerLinks, planningAndImplementation } from "@/utils/links";
import "./style.css";
import { Link } from "react-router-dom";
import logo1 from "@/assets/logos/l1.png";
import logo2 from "@/assets/logos/l2.png";
import logo3 from "@/assets/logos/l3.png";
import logo4 from "@/assets/logos/l4.png";
import { RiFacebookCircleLine } from "react-icons/ri";
import { TiSocialTwitterCircular } from "react-icons/ti";
import { FaRegCirclePlay } from "react-icons/fa6";

const techSupports = [
  {
    img: logo1,
    href: "/",
  },
  {
    img: logo2,
    href: "/",
  },
  {
    img: logo3,
    href: "/",
  },
  {
    img: logo4,
    href: "/",
  },
];

const getCurrentDateTime = (): string => {
  const now = new Date();

  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");

  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};

const Footer = () => {
  return (
    <div className="footer md:p-[70px] p-5 text-secondary bg-primary-foreground/10">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-x-[100px] gap-5">
        <div className="md:block flex flex-col justify-center items-center">
          <h4 className="font-semibold text-lg mb-4">Important links</h4>
          <div className="space-y-2 md:text-start text-center">
            {footerLinks.map((item, index) => {
              return (
                <div key={index}>
                  <Link to={item.href} className="font-medium">
                    {item.label}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        <div className="md:block flex flex-col justify-center items-center">
          <h4 className="font-semibold text-lg mb-4">
            Planning and Implementation
          </h4>
          <div className="space-y-2 md:text-start text-center">
            {planningAndImplementation.map((item, index) => {
              return (
                <div key={index}>
                  <Link to={item.href} className="font-medium">
                    {item.label}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        <div className="md:block flex flex-col justify-center items-center">
          <h4 className="font-semibold text-lg mb-4">Technical Support</h4>
          <div className="space-x-2 flex items-baseline">
            {techSupports.map((item, index) => {
              return (
                <div key={index}>
                  <Link to={item.href} className="font-medium">
                    <img
                      src={item.img}
                      alt=""
                      className="max-h-[60px] max-w-[80px]"
                    />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex md:justify-end">
          <div className="md:block flex flex-col justify-center items-center w-full md:w-auto">
            <h4 className="font-semibold text-lg mb-4">Socials</h4>
            <div className="flex items-center gap-x-2 text-primary-foreground">
              <RiFacebookCircleLine className="text-[36px] cursor-pointer hover:text-primary" />{" "}
              <TiSocialTwitterCircular className="text-[40px] cursor-pointer hover:text-primary" />{" "}
              <FaRegCirclePlay className="text-[30px] cursor-pointer hover:text-primary" />
            </div>
          </div>
        </div>
      </div>
      <p className="text-center font-medium md:pb-0 pb-5">
        Site was last updated: {getCurrentDateTime()}
      </p>
    </div>
  );
};

export default Footer;
