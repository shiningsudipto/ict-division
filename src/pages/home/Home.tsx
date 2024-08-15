import Card from "@/components/ui/Card";
import Banner from "./components/Banner";
import ImportantLinks from "./components/ImportantLinks";
import "./style.css";
import Sidebar from "./components/Sidebar";
import Alert from "./components/Alert";
import Leadership from "./components/Leadership";
import Anthem from "./components/Anthem";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="flex p-[70px] justify-between">
        <div>
          <ImportantLinks />
          <Card />
        </div>
        <Sidebar />
      </div>
      <Anthem />
      <Alert />
      <Leadership />
    </div>
  );
};

export default Home;
