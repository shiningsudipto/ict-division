import Card from "@/components/shared/Card";
import Banner from "./components/Banner";
import ImportantLinks from "./components/ImportantLinks";
import "./style.css";
import Sidebar from "./components/Sidebar";
import Alert from "./components/Alert";
import Leadership from "./components/Leadership";
import Anthem from "./components/Anthem";
import Emergency from "./components/Emergency";
import Location from "./components/Location";
import { FaAnglesUp } from "react-icons/fa6";
import { useEffect, useState } from "react";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  return (
    <div className="text-secondary">
      <Banner />
      <div className="flex lg:flex-row flex-col md:p-[70px] p-5 justify-between gap-5 ">
        <div>
          <ImportantLinks />
          <div className="hidden lg:block">
            <Card />
          </div>
        </div>
        <div className="hidden lg:block">
          <Sidebar />
        </div>
        <div className="flex md:flex-row flex-col md:justify-between lg:hidden">
          <Card />
          <Sidebar />
        </div>
      </div>
      <Emergency />
      <Anthem />
      <Alert />
      <Leadership />
      <Location />
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 bg-primary-foreground rounded-full p-2 shadow-md"
        >
          <FaAnglesUp className="text-white" />
        </button>
      )}
    </div>
  );
};

export default Home;
