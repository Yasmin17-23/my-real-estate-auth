import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="footer bg-[#5B99C2] p-10 font-poppins text-white inline-block">

            <div className="flex justify-between items-center mb-4">
                <div>
                    <p className="text-xl">
                        Dream <br />
                        <span className="ml-4"> Estate</span>

                    </p>
                    <br />
                    <p>Providing Service since 2018</p>
                </div>

                <div>
                    <h6 className="footer-title text-xl">Company</h6>
                    <div className="space-x-2">
                        <a className="link link-hover">Home</a>
                        <a className="link link-hover">Profile</a>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Features</a>
                    </div>
                </div>
                <div>
                    <h6 className="footer-title text-xl">Contact Us</h6>
                    <div className="flex  items-center">
                        <a className="link link-hover">
                            <FaFacebook className="text-xl mr-3" />
                        </a>
                        <a className="link link-hover">
                            <FaLinkedin className="text-xl mr-3" />
                        </a>
                        <a className="link link-hover">
                            <FaYoutube className="text-xl mr-3" />
                        </a>
                        <a className="link link-hover">
                            <FaXTwitter className="text-xl mr-3" />
                        </a>
                    </div>
                    <div className="mt-3">
                        <p><span className="text-primary">Address: Mirpur 12, Dhaka, Bangladesh</span></p>
                        <p><span className="text-primary">Email Address: </span> dreamestate24@gmail.com</p>
                        <p><span className="text-primary">Phone No:</span> +880-1234-567</p>
                    </div>
                </div>
            </div>
            <hr />

            <div className="flex justify-between items-center mb-4 mr-2">
                <div>
                  <p className="text-xl mt-4">©DreamEstate2024 || All Rights Reserved</p>
                </div>
                <div className="flex items-center mt-4">
                    <h6 className="mr-3">Terms & Condition</h6>
                    <h6>Privacy Policy</h6>
                </div>
            </div>


        </div>


    );
};

export default Footer;