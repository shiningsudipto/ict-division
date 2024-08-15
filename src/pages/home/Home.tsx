import Card from "@/components/ui/Card";
import Banner from "./components/Banner";
import ImportantLinks from "./components/ImportantLinks";
import "./style.css";
import Sidebar from "./components/Sidebar";
import Alert from "./components/Alert";

const Home = () => {
  return (
    <div>
      <Banner />
      <ImportantLinks />
      <div className="px-[70px] flex justify-between">
        <Card />
        <Sidebar />
      </div>
      <Alert />
    </div>
  );
};

export default Home;
