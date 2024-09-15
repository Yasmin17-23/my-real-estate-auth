import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";


const Navbar = () => {
    const [open, setOpen] = useState(false);
    const { user, logOut } = useContext(AuthContext);

    const navLinks = <>

        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/profile">Profile</NavLink></li>
        <li><NavLink to="/aboutUs">About Us</NavLink></li>
        <li><NavLink to="/updateProfile">Update Profile</NavLink></li>

    </>
    return (
        <div className="navbar  py-6  font-poppins">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost md:hidden text-black text-xl" onClick={() => setOpen(!open)}>
                    {
                       open === true ? 
                       <AiOutlineClose /> :
                       <AiOutlineMenu />
                    }
                   
                    </div>
                    <ul
                        tabIndex={0}
                        className={`menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2
                            duration-1000 ${open ? 'top-12' : '-top-60'} shadow absolute`}>
                        {navLinks}
                    </ul>
                </div>
                <p className="text-xl">Dream <br /> <span className="ml-6 text-lg text-red-400">Estate</span></p>
            </div>
            <div className="navbar-center hidden md:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <div className="dropdown dropdown-end flex">
                            <div className="flex justify-between items-center">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img
                                            alt="Tailwind CSS Navbar component"
                                            src={user.photoURL} />
                                    </div>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="menu menu-sm dropdown-content rounded-box 
                                     mt-16 ml-12 w-48 p-2 ">
                                    <li className=" ">
                                        <a className="text-gray-600 ">
                                           {user.displayName}  
                                        </a>
                                    </li>
                                </ul>
                                <button onClick={logOut}
                                    className="btn btn-sm btn-primary">Sign Out</button>
                            </div>
                        </div>
                        : <Link to="/login">
                            <button className="btn btn-primary">Login</button>
                        </Link>
                }

            </div>
        </div>
    );
};

export default Navbar;