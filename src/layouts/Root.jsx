import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar/Navbar";
import Footer from "../components/Shared/Footer/Footer";


const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="max-w-6xl mx-auto font-poppins">
               <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;