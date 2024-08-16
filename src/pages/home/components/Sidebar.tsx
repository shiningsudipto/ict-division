import mujibDoc from "@/assets/sidebar/doc.png";
import s1 from "@/assets/sidebar/s1.jpg";
import s2 from "@/assets/sidebar/s2.jpeg";
import s3 from "@/assets/sidebar/s3.jpg";
import s4 from "@/assets/sidebar/s4.jpg";
import s5 from "@/assets/sidebar/s5.jpg";
import { governmentOffices, services } from "@/utils/links";
import { Link } from "react-router-dom";
import { FaLink } from "react-icons/fa6";
import CountUp from "react-countup";

const Sidebar = () => {
  return (
    <div className="md:w-[260px] w-full flex flex-col space-y-5 bg-primary-foreground/5 md:p-2 p-4 h-fit rounded-md">
      <p className="sidebar-section">Office attachment application form</p>
      <p className="sidebar-section">
        বার্ষিক কর্মসম্পাদন চুক্তি (এপিএ) ২০২০-২০২১ এর চূড়ান্ত মূল্যায়নে তথ্য ও
        যোগাযোগ প্রযুক্তি বিভাগের প্রথম স্থান অর্জন
      </p>
      <img
        src={mujibDoc}
        alt=""
        className="border rounded-md border-primary-foreground"
      />
      <img src={s1} alt="" className="sidebar-image" />
      <img src={s2} alt="" className="sidebar-image" />
      <p className="sidebar-section">Internal e-Services</p>
      <div className="space-y-2">
        {services.map((item, index) => {
          return (
            <div key={index} className="flex items-center">
              <FaLink className="text-primary-foreground me-2 text-base" />{" "}
              <Link to={item?.href}>{item?.label}</Link>
            </div>
          );
        })}
        <button className="border border-primary hover:bg-primary hover:text-white w-full text-secondary rounded-md py-1 font-medium">
          All
        </button>
      </div>
      <p className="sidebar-section">Important Link</p>
      <div className="space-y-2">
        {governmentOffices.map((item, index) => {
          return (
            <div key={index} className="flex items-center">
              <FaLink className="text-primary-foreground me-2 text-base" />{" "}
              <Link to={item?.href}>{item?.label}</Link>
            </div>
          );
        })}
        <button className="border border-primary hover:bg-primary hover:text-white w-full text-secondary rounded-md py-1 font-medium">
          All
        </button>
      </div>
      <img src={s3} alt="" className="sidebar-image" />
      <img src={s4} alt="" className="sidebar-image" />
      <p className="sidebar-section">Visitor Counter</p>
      <div className="bg-primary/5 text-black px-2 py-3 rounded-md font-medium flex items-center justify-center">
        Total visited:
        <CountUp
          delay={2}
          duration={5}
          end={120}
          className="ms-2 bg-primary text-white px-3 py-2 rounded-md font-semibold w-[60px] text-center"
        />
      </div>
      <img
        src={s5}
        alt=""
        className="border rounded-md border-primary-foreground w-full object-cover"
      />
    </div>
  );
};

export default Sidebar;
