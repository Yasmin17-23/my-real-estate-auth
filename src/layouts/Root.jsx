import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar/Navbar"
import Footer from "../components/Shared/Footer/Footer";


const Root = () => {
    return (
        <div>


            <div className="md:max-w-6xl md:mx-auto px-8">
                <Navbar></Navbar>
                <Outlet></Outlet>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Root;