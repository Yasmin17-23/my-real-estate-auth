import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const navLinks = <>

        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/profile">Profile</NavLink></li>
        <li><NavLink to="/updateProfile">Update Profile</NavLink></li>

    </>
    return (
        <div className="navbar  py-6  font-poppins">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navLinks}
                    </ul>
                </div>
                <p className="text-xl">Dream <br /> <span className="md:ml-6 text-lg">Estate</span></p>
            </div>
            <div className="navbar-center hidden lg:flex">
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
                                     mt-28 mr-6 w-48 p-2 ">
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