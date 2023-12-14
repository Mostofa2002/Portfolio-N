import { Outlet } from "react-router-dom";
import Nav from "../Components/Nav/Nav";
import Footer from "../Components/Footer/Footer";
const Root = () => {
  return (
    <div className="bg-black">
      <Nav />
      <Outlet></Outlet>
      <Footer />
    </div>
  );
};

export default Root;
