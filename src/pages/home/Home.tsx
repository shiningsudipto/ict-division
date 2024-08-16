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

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="flex lg:flex-row flex-col md:p-[70px] p-5 justify-between gap-5">
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
    </div>
  );
};

export default Home;
