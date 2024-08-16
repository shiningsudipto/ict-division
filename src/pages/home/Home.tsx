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
      <div className="flex lg:flex-row md:flex-col p-[70px] justify-between">
        <div>
          <ImportantLinks />
          <div className="md:hidden lg:block">
            <Card />
          </div>
        </div>
        <div className="md:hidden lg:block">
          <Sidebar />
        </div>
        <div className="flex justify-between lg:hidden">
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
