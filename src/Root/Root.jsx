import { Outlet } from "react-router-dom";
import Nav from "../Components/Nav/Nav";
import Footer from "../Components/Footer/Footer";
const Root = () => {
  return (
    <div className="bg-black ">
      <Nav />
      <div className=" content-around max-w-screen-xl mx-auto">
        <Outlet></Outlet>
      </div>
      <Footer />
    </div>
  );
};

export default Root;
