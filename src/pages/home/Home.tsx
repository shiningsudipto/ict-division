import Card from "@/components/ui/Card";
import Banner from "./components/Banner";
import ImportantLinks from "./components/ImportantLinks";
import "./style.css";
import Sidebar from "./components/Sidebar";
import Alert from "./components/Alert";
import Leadership from "./components/Leadership";

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
      <Leadership />
    </div>
  );
};

export default Home;
